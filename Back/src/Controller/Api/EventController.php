<?php

namespace App\Controller\Api;

use App\Entity\Event;
use App\Form\EventType;
use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StyleRepository;
use App\Repository\GameRepository;
use App\Repository\CommentRepository;
use App\Repository\RankingRepository;
use App\Repository\RateRepository;

/**
 * @Route("/api")
 */
class EventController extends AbstractController
{
    /**
     * @Route("/events", name="all_events")
     */
    public function findAll(EventRepository $repo, CommentRepository $commentRepository, RankingRepository $rankingRepository, RateRepository $rateRepository)
    {
        $events = $repo->findAll();
        foreach ($events as $event) {
            $array[] = [
                'id' => $event->getId(),
                'name' => $event->getName(),
                'description' => $event->getDescription(),
                'date' => $event->getDate(),
                'nbParticipants' => $event->getNbParticipants(),
                'available' => $event->getAvailable(),
                'selected' => $event->getSelected(),
                'image' => $event->getImage(),
                'comments' => $commentRepository->findByEventQueryBuilder($event),
                'rates' => $rateRepository->findByEventQueryBuilder($event),
                'rankings' => $rankingRepository->findByEventQueryBuilder($event),
                'style' => $event->getStyle()->getName()
            ];
            }
    $jsonEvents = \json_encode($array);
    $response = new Response($jsonEvents);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/event/{id}", name="event_by_one", methods={"GET"})
     */
    public function findOneEvent(Event $event, CommentRepository $commentRepository, RankingRepository $rankingRepository, RateRepository $rateRepository)
    {
        $rate = $rateRepository->findByEventQueryBuilder($event);
        $ranking = $rankingRepository->findByEventQueryBuilder($event);
        $comment = $commentRepository->findByEventQueryBuilder($event);
        $currentValue = $event;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'date' => $currentValue->getDate(),
            'nbParticipants' => $currentValue->getNbParticipants(),
            'available' => $currentValue->getAvailable(),
            'selected' => $currentValue->getSelected(),
            'image' => $currentValue->getImage(),
            'comments' => $comment,
            'rates' => $rate,
            'rankings' => $ranking,
            'style' => $currentValue->getStyle()->getName()
        ];

    $jsonOneEvent = \json_encode($array);
    $response = new Response($jsonOneEvent);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    
}
