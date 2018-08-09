<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends Controller
{
    /**
     * @param Request $request
     * @param string  $action
     *
     * @return JsonResponse
     */
    public function index(Request $request, string $action)
    {
        return new JsonResponse($this->getContextByAction($action));
    }

    private function getContextByAction(string $action)
    {
        switch ($action) {
            case 'title':
                return ['title' => 'hoi wereld'];
            case 'description':
                return ['description' => 'Shrouds gabion lateen sail league heave to Buccaneer jib lee. Fore Pirate Round lugsail quarter pinnace booty chantey yardarm. Port main sheet Jack Tar aft weigh anchor Spanish Main fire in the hole parrel. <br> Broadside line Pieces of Eight mizzenmast Chain Shot Barbary Coast bucko take a caulk. Splice the main brace careen plunder gangway cutlass crack Jennys tea cup fathom boatswain. Main sheet cable topmast splice the main brace Yellow Jack broadside ho Chain Shot.'];
            case 'user':
                return [
                    'name' => 'suskewiet',
                    'surname' => 'valgaeren',
                    'pets' => [
                        'samson',
                        'bobientje',
                    ],
                ];
        }
    }
}