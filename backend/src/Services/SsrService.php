<?php

namespace App\Services;

use Spatie\Ssr\Engines\Node;
use Spatie\Ssr\Renderer;

class SsrService
{
    /** @var Renderer */
    private $renderer;

    public function __construct(string $projectRoot, string $nodePath)
    {
        $this->renderer = new Renderer(new Node($nodePath, "{$projectRoot}/var/cache"));
        $entry = "{$projectRoot}/public/assets/js/entry-server.js";
        $this->renderer->entry($entry)->debug(true)->enabled(true);
    }

    public function render(array $context)
    {
        return $this->renderer->context($context)->render();
    }
}