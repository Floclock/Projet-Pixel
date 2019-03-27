<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Entity\Event;
use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/api", name="api_")
 */
class CommentController extends AbstractController
{
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
     * @Route("/comment/new", name="comment_new", methods={"POST"})
     */
    public function newCommentAction(Request $request): Response
    {
        $return = [];
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
           $return['coucou'] = 'test';
            if($form->isValid()) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($comment);
                $entityManager->flush();

                return new JsonResponse([], JsonResponse::HTTP_OK);
            } else {
                $return['error'] = $this->getErrorsFromForm($form);
            }
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
}