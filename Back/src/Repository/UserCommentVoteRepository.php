<?php

namespace App\Repository;

use App\Entity\UserCommentVote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserCommentVote|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserCommentVote|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserCommentVote[]    findAll()
 * @method UserCommentVote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserCommentVoteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserCommentVote::class);
    }
}
