<?php

namespace App\Controller\Api;

use App\Entity\Console;
use App\Form\ConsoleType;
use App\Repository\ConsoleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ConsoleController extends AbstractController
{
    /**
     * @Route("/consoles", name="all_consoles")
     */
    public function findAll(ConsoleRepository $repo)
    {
        $consoles = $repo->findAll();
        foreach ($consoles as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'nbAvailable' => $currentValue->getNbAvailable(),
                'brand' => $currentValue->getBrand(),
                'image' => $currentValue->getImage(),
                'releaseDate' => $currentValue->getReleaseDate(),
                'games' => $currentValue->getGames()

            ];
            }
    $jsonConsoles = \json_encode($array);
    $response = new Response($jsonConsoles);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/console/{id}", name="console_by_one", methods={"GET"})
     */
    public function findOneConsole(Console $console)
    {
        $currentValue = $console;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'nbAvailable' => $currentValue->getNbAvailable(),
            'brand' => $currentValue->getBrand(),
            'image' => $currentValue->getImage(),
            'releaseDate' => $currentValue->getReleaseDate(),
            'games' => $currentValue->getGames()
        ];

    $jsonOneConsole = \json_encode($array);
    $response = new Response($jsonOneConsole);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/console/new", name="console_new", methods={"POST"})
     */
    public function newConsole($data)
    {
        $connexion=connect_db();
        $sql="INSERT INTO CONSOLE(NAME,DESCRIPTION,NBAVAILABLE,BRAND,IMAGE,RELEASEDATE,GAMES[]) values (?,?,?,?,?,?,?)";
        $stmt=$connexion->prepare($sql);
        return $stmt->execute(array($data['NAME'], $data['DESCRIPTION'], $data['NBAVAILABLE'],$data['BRAND'],$data['IMAGE'],$data['RELEASEDATE'],$data['GAMES']));
    }
}
