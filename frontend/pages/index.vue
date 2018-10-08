<template>
  <section class="container">
    <div class="d-flex vh-100 w-50 p-3 mx-auto flex-column justify-content-center">
      <h1 class="jumbotron-heading">Welkom losers!</h1>
      <p class="lead text-muted">Gelieve in te loggen om verder te gaan, svp.</p>
      <p>
        <nuxt-link to="/register" class="btn btn-primary my-2">Registreren</nuxt-link>
        <nuxt-link to="/login" class="btn btn-secondary my-2">Inloggen</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss">

</style>
