<?php

namespace App\Controller\Api;

use App\Entity\Role;
use App\Form\RoleType;
use App\Repository\RoleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class RoleController extends AbstractController
{
    /**
     * @Route("/roles", name="all_roles")
     */
    public function findAll(RoleRepository $repo)
    {
        $roles = $repo->findAll();
        foreach ($roles as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'code' => $currentValue->getCode(),
                'name' => $currentValue->getName(),
                'users' => $currentValue->getUsers()
            ];
            }
    $jsonRoles = \json_encode($array);
    $response = new Response($jsonRoles);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
    /**
     * @Route("/role/{id}", name="role_by_one", methods={"GET"})
     */
    public function findOneRole(Role $role)
    {
        $currentValue = $role;
        $array = [
            'id' => $currentValue->getId(),
            'code' => $currentValue->getCode(),
            'name' => $currentValue->getName(),
            'users' => $currentValue->getUsers()
        ];
    $jsonOneRole = \json_encode($array);
    $response = new Response($jsonOneRole);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
