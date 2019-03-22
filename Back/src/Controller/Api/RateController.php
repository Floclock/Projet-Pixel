<?php

namespace App\Controller\Api;

use App\Entity\Rate;
use App\Form\RateType;
use App\Repository\RateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class RateController extends AbstractController
{
    /**
     * @Route("/rates", name="all_rates")
     */
    public function findAll(RateRepository $repo)
    {
        $rates = $repo->findAll();
        foreach ($comments as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'user' => $currentValue->getUser(),
                'event' => $currentValue->getEvent()
            ];
            }
    $jsonRates = \json_encode($array);
    $response = new Response($jsonRates);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
