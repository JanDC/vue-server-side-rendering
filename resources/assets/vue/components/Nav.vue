<template>
    <nav class="flex flex-wrap">
        <router-link :to="{ name: 'home'}" class="">
            home
        </router-link>
        <router-link :to="{ name: 'test'}" class="">
            test
        </router-link>
    </nav>
</template>
