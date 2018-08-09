<template>
    <div class="test">
        <h1>SSR with Symfony & Vue test</h1>
        <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem fugiat labore porro velit? Asperiores assumenda dignissimos magnam. Dolorum eius enim hic molestiae omnis praesentium quis repellat sit tempore velit?</p>
        </section>
        <hr>
        <section>
            <no-ssr>
                client only
                <!--<flickity ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell">1</div>
                    <div class="carousel-cell">2</div>
                    <div class="carousel-cell">3</div>
                    <div class="carousel-cell">4</div>
                    <div class="carousel-cell">5</div>
                </flickity>-->
            </no-ssr>
        </section>
    </div>
</template>

<script>
    export default {
        components: {
            /*'flickity': () => import('vue-flickity'),*/
        }
    };
</script>
