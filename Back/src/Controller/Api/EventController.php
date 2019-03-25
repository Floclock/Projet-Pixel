<?php

namespace App\Controller\Api;

use App\Entity\Event;
use App\Form\EventType;
use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class EventController extends AbstractController
{
    /**
     * @Route("/events", name="all_events")
     */
    public function findAll(EventRepository $repo)
    {
        $events = $repo->findAll();
        foreach ($events as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'date' => $currentValue->getDate(),
                'nbParticipants' => $currentValue->getNbParticipants(),
                'available' => $currentValue->getAvailable(),
                'selected' => $currentValue->getSelected(),
                'image' => $currentValue->getImage(),
                'comments' => $currentValue->getComments(),
                'rates' => $currentValue->getRates(),
                'rankings' => $currentValue->getRankings(),
                'style' => $currentValue->getStyle()
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
    public function findOneEvent(Event $event)
    {
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
            'comments' => $currentValue->getComments(),
            'rates' => $currentValue->getRates(),
            'rankings' => $currentValue->getRankings(),
            'style' => $currentValue->getStyle()
        ];

    $jsonOneEvent = \json_encode($array);
    $response = new Response($jsonOneEvent);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
