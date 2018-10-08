<?php

namespace App\Controller;

use App\Entity\RegisteredUser;
use App\Form\RegisteredUserType;
use App\Repository\RegisteredUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/registered/user")
 */
class RegisteredUserController extends AbstractController
{
    /**
     * @Route("/", name="registered_user_index", methods="GET")
     */
    public function index(RegisteredUserRepository $registeredUserRepository): Response
    {
        return $this->render('registered_user/index.html.twig', ['registered_users' => $registeredUserRepository->findAll()]);
    }

    /**
     * @Route("/new", name="registered_user_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $registeredUser = new RegisteredUser();
        $form = $this->createForm(RegisteredUserType::class, $registeredUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($registeredUser);
            $em->flush();

            return $this->redirectToRoute('registered_user_index');
        }

        return $this->render(
            'registered_user/new.html.twig',
            [
                'registered_user' => $registeredUser,
                'form' => $form->createView(),
            ]
        );
    }

    /**
     * @Route("/{id}", name="registered_user_show", methods="GET")
     */
    public function show(RegisteredUser $registeredUser): Response
    {
        return $this->render('registered_user/show.html.twig', ['registered_user' => $registeredUser]);
    }

    /**
     * @Route("/{id}/edit", name="registered_user_edit", methods="GET|POST")
     */
    public function edit(Request $request, RegisteredUser $registeredUser): Response
    {
        $form = $this->createForm(RegisteredUserType::class, $registeredUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('registered_user_edit', ['id' => $registeredUser->getId()]);
        }

        return $this->render(
            'registered_user/edit.html.twig',
            [
                'registered_user' => $registeredUser,
                'form' => $form->createView(),
            ]
        );
    }

    /**
     * @Route("/{id}", name="registered_user_delete", methods="DELETE")
     */
    public function delete(Request $request, RegisteredUser $registeredUser): Response
    {
        if ($this->isCsrfTokenValid('delete'.$registeredUser->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($registeredUser);
            $em->flush();
        }

        return $this->redirectToRoute('registered_user_index');
    }
}
