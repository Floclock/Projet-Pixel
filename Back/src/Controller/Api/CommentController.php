<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
        foreach ($comments as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'content' => $currentValue->getContent(),
                'createdAt' => $currentValue->getCreatedAt(),
                'user' => $currentValue->getUser(),
                'event' => $currentValue->getEvent()
            ];
            }
    $jsonComments = \json_encode($array);
    $response = new Response($jsonComments);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }


    /**
     * @Route("/comment/{id}", name="comment_by_one", methods={"GET"})
     */
    public function findOneComment(Comment $comment)
    {
        $currentValue = $comment;
        $array = [
            'id' => $comment->getId(),
            'content' => $comment->getContent(),
            'createdAt' => $comment->getCreatedAt(),
            'user' => $comment->getUser(),
            'event' => $comment->getEvent()
        ];

   $jsonOneComment = \json_encode($array);
   $response = new Response($jsonOneComment);
   $response->headers->set('Content-Type', 'application/json');
   // $response->headers->set('Access-Control-Allow-Origin', '');
   return $response;
    }
}
