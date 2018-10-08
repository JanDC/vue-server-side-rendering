<?php

namespace App\Repository;

use App\Entity\RegisteredUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method RegisteredUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method RegisteredUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method RegisteredUser[]    findAll()
 * @method RegisteredUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RegisteredUserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, RegisteredUser::class);
    }
}
