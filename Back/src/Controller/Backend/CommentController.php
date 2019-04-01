<?php

namespace App\Controller\Backend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserCommentVoteRepository;
use App\Entity\UserCommentVote;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Doctrine\DBAL\Types\VarDateTimeImmutableType;

/**
 * @Route("/admin/comment")
 */
class CommentController extends AbstractController
{
    /**
     * @Route("/", name="comment_index", methods={"GET"})
     */
    public function index(CommentRepository $commentRepository): Response
    {
        return $this->render('backend/comment/index.html.twig', [
            'comments' => $commentRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="comment_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($comment);
            $entityManager->flush();
            return $this->redirectToRoute('comment_index');
        }

        return $this->render('backend/comment/new.html.twig', [
            'comment' => $comment,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="comment_show", methods={"GET"})
     */
    public function show(Comment $comment): Response
    {
        return $this->render('backend/comment/show.html.twig', [
            'comment' => $comment,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="comment_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Comment $comment): Response
    {
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('comment_index', [
                'id' => $comment->getId(),
            ]);
        }

        return $this->render('backend/comment/edit.html.twig', [
            'comment' => $comment,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="comment_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Comment $comment): Response
    {
        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($comment);
            $entityManager->flush();
        }

        return $this->redirectToRoute('comment_index');
    }

    /**
     * @Route("/vote/{id}", name="comment_vote")
     */
    public function vote(Comment $comment = null, EntityManagerInterface $em, UserCommentVoteRepository $ucvr)
    {
        if (null === $comment){
            throw $this->createnotFoundException('Commentaire innexistant.');
        }
        $user = $this->getUser();

        $commentVote = new UserCommentVote();
        $commentVote->setUser($user);
        $commentVote->setComment($comment);

        $em->persist($commentVote);
        try
        {  
            $em->flush();
            $this->addFlash('success', 'Commentaire Voté.');
            
            $nbVote = count($ucvr->findBy(['comment' => $comment]));
            $comment->setVotes($nbVote);

            $em->flush();
            
        } catch(UniqueConstraintViolationException $e)
        {
            $this->addFlash('danger', 'Vous avez deja voté pour ce commentaire.');
        }
        return $this->redirectToRoute('comment_show', ['id' => $comment->getEvent()->getId()]);
    }
}