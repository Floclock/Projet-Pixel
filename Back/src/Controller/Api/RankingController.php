<?php

namespace App\Controller\Api;

use App\Entity\Ranking;
use App\Form\RankingType;
use App\Repository\RankingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\EventRepository;

/**
 * @Route("/api")
 */
class RankingController extends AbstractController
{
    /**
     * @Route("/rankings", name="all_rankings")
     */
    public function findAll(RankingRepository $repo)
    {
        $rankings = $repo->findAll();
        foreach ($rankings as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'place' => $currentValue->getPlace(),
                'score' => $currentValue->getScore(),
                'reward' => $currentValue->getReward(),
                'user' => $currentValue->getUser()->getUsername(),
                'event' => $currentValue->getEvent()->getName()
            ];
            }
    $jsonRankings = \json_encode($array);
    $response = new Response($jsonRankings);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/ranking/{id}", name="ranking_by_one", methods={"GET"})
     */
    public function findOneRanking(Ranking $ranking)
    {
        $currentValue = $ranking;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'place' => $currentValue->getPlace(),
            'score' => $currentValue->getScore(),
            'reward' => $currentValue->getReward(),
            'user' => $currentValue->getUser()->getUsername(),
            'event' => $currentValue->getEvent()->getName()
        ];
    $jsonOneRanking = \json_encode($array);
    $response = new Response($jsonOneRanking);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

}