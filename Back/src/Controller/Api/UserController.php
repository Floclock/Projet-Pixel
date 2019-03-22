<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/users", name="all_users")
     */
    public function findAll(UserRepository $repo)
    {
        $users = $repo->findAll();
        foreach ($users as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'username' => $currentValue->getUsername(),
                'password' => $currentValue->getPassword(),
                'email' => $currentValue->getEmail(),
                'role' => $currentValue->getRole(),
                'comments' => $currentValue->getComments(),
                'rates' => $currentValue->getRates(),
                'rankings' => $currentValue->getRankings()
            ];
            }
    $jsonUsers = \json_encode($array);
    $response = new Response($jsonUsers);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
