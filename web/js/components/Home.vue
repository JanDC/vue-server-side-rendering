<template>
    <div>
        <h1>SSR with Laravel & Vue </h1>
        <section class="text-xl mb-12">
            <p class="mb-8">
                This is a quick demo app for server side rendering Vue with Laravel. Below is a list of our open source packages, which our client-side app has
                divided by type.
            </p>
            <p>
                We're using vue-router for this page so each package type has its own permalink, and will be prerendered
                on the server if visited directly.
            </p>
        </section>
        <nav class="flex flex-wrap">
            <router-link
                :to="{ name: 'home'}"
                class="bg-blue-light font-bold mr-2 mb-2 sm:mr-4 sm:mb-0 px-4 py-2 no-underline rounded-sm text-white uppercase text-sm sm:text-base"
            >
                home
            </router-link>
            <router-link
                :to="{ name: 'test'}"
                class="bg-blue-light font-bold mr-2 mb-2 sm:mr-4 sm:mb-0 px-4 py-2 no-underline rounded-sm text-white uppercase text-sm sm:text-base"
            >
                test
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {};
</script>
