<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Entity\Event;
use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserCommentVoteRepository;
use App\Entity\UserCommentVote;

/**
 * @Route("/api", name="api_")
 */
class CommentController extends AbstractController
{
    private function getErrorsFromForm(FormInterface $form)
    {
        $errors = array();
        foreach ($form->getErrors() as $error) {
            $errors[] = $error->getMessage();
        }
        foreach ($form->all() as $childForm) {
            if ($childForm instanceof FormInterface) {
                if ($childErrors = $this->getErrorsFromForm($childForm)) {
                    $errors[$childForm->getName()] = $childErrors;
                }
            }
        }
        return $errors;
    }
    
    /**
     * @Route("/comments", name="all_comments")
     */
    public function findAll(CommentRepository $repo)
    {
        $comments = $repo->findAll();
        foreach ($comments as $comment) {
            $array[] = [
                'id' => $comment->getId(),
                'content' => $comment->getContent(),
                'createdAt' => $comment->getCreatedAt(),
                'user' => $comment->getUser()->getUsername(),
                'event' => $comment->getEvent()->getDescription()
            ];
            }
    $jsonComments = \json_encode($array);
    $response = new Response($jsonComments);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }


    /**
     * @Route("/private/comment/new", name="comment_new", methods={"POST"})
     */
    public function newCommentAction(Request $request): Response
    {
        $body = $request->request->all();
        $return = [];
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->submit($body);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
        //    $return['coucou'] = 'test';
            if($form->isValid()) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($comment);
                $entityManager->flush();

                return new JsonResponse([], JsonResponse::HTTP_OK);
            } else {
                $return['error'] = $this->getErrorsFromForm($form);
            }
        } else {    
            // $return['coucou'] = 'test2';
        }
        return new JsonResponse($return, JsonResponse::HTTP_BAD_REQUEST);
    }

    
    /**
     * @Route("/comment/{id}", name="comment_by_one", methods={"GET"})
     */
    public function findOneComment(Comment $comment)
    {
        
        $currentValue = $comment;
        $array = [
            'id' => $currentValue->getId(),
            'content' => $currentValue->getContent(),
            'createdAt' => $currentValue->getCreatedAt(),
            'user' => $currentValue->getUser()->getUsername(),
            'event' => $currentValue->getEvent()->getDescription()
        ];

    $jsonOneComment = \json_encode($array);
    $response = new Response($jsonOneComment);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/comment/vote/{id}", name="comment_vote")
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

        $jsonCommentVote = \json_encode($commentVote);
        $response = new Response($jsonCommentVote);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}