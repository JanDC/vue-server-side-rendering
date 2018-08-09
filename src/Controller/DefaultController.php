<?php

namespace App\Controller;

use App\Services\SsrService;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function index(Request $request)
    {
        $vueContent = $this->get(SsrService::class)->render(['url' => $request->getPathInfo()]);
        $twig = $this->get('twig');

        return new Response($twig->render('base.twig', ['vueContent' => $vueContent]));
    }
}