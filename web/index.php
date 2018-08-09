<?php


require_once __DIR__.'/../vendor/autoload.php';

$entry = __DIR__.'/js/dist/entry-server.js';

$ssr = new Spatie\Ssr\Renderer(new Spatie\Ssr\Engines\Node(trim(`which node`), __DIR__.'/../cache'));
$ssr->enabled();
$ssr->context('title', 'vue test site');
$ssr->entry($entry);
$ssr->debug(true);

echo '<pre>';
echo $ssr->render();
echo '</pre>';
