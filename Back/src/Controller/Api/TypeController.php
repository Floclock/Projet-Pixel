<?php

namespace App\Controller\Api;

use App\Entity\Type;
use App\Form\TypeType;
use App\Repository\TypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use app\Repository\ProductRepository;

/**
 * @Route("/api")
 */
class TypeController extends AbstractController
{
    /**
     * @Route("/types", name="all_types")
     */
    public function findAll(TypeRepository $repo)
    {
        $types = $repo->findAll();
        foreach ($types as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'image' => $currentValue->getImage(),
                'products' => $currentValue->getProducts()
            ];
            }
    $jsonTypes = \json_encode($array);
    $response = new Response($jsonTypes);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/type/{id}", name="type_by_one", methods={"GET"})
     */
    public function findOneType(Type $type)
    {
        $currentValue = $type;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'image' => $currentValue->getImage(),
            'products' => $currentValue->getProducts()
        ];
    $jsonOneType = \json_encode($array);
    $response = new Response($jsonOneType);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
