<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
* @Route("/principal", name="principal")
*/
class PrincipalController extends AbstractController
{
    /**
     * @Route("/leccion1", name="principal_leccion1")
     */
    public function index()
    {
        return $this->render('leccion1/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }

    /**
     * @Route("/leccion2", name="principal_leccion2")
     */
    public function index2()
    {
        return $this->render('leccion2/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }

    /**
     * @Route("/leccion3", name="principal_leccion3")
     */
    public function index3()
    {
        return $this->render('leccion3/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }

    /**
    * @Route("/leccion4", name="principal_leccion4")
    */
    public function index4()
    {
        return $this->render('leccion4/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }

    /**
    * @Route("/leccion5", name="principal_leccion5")
    */
    public function index5()
    {
        return $this->render('leccion5/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }

    /**
    * @Route("/tarea", name="principal_tarea")
    */
    public function tarea()
    {
        return $this->render('tarea/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }
}
