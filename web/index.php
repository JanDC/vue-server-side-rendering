<?php


require_once __DIR__ . '/../vendor/autoload.php';

$entry = __DIR__ . '/js/index.js';

$ssr = new Spatie\Ssr\Renderer(new Spatie\Ssr\Engines\Node('/usr/local/bin/node', __DIR__ . '/../cache'));
$ssr->enabled();
$ssr->entry($entry);


echo $ssr->render();
