<?php

namespace App\Controller\Api;

use App\Entity\Rate;
use App\Form\RateType;
use App\Repository\RateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;
use App\Repository\UserRepository;

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
        foreach ($rates as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'user' => $currentValue->getUser()->getUsername(),
                'event' => $currentValue->getEvent()->getName()
            ];
            }
    $jsonRates = \json_encode($array);
    $response = new Response($jsonRates);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/rate/{id}", name="rate_by_one", methods={"GET"})
     */
    public function findOneRate(Rate $rate)
    {
        $currentValue = $rate;
        $array = [
            'id' => $currentValue->getId(),
            'user' => $currentValue->getUser()->getUsername(),
            'event' => $currentValue->getEvent()->getName()
        ];
    $jsonOneRate = \json_encode($array);
    $response = new Response($jsonOneRate);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
