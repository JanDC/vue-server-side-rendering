<template>
  <section class="container">
    <div class="d-flex vh-100 p-3 mx-auto flex-column justify-content-center">
      <h1 class="jumbotron-heading">{{$t('welcome')}}</h1>
      <p class="lead text-muted">Gelieve in te loggen om verder te gaan, svp.</p>
      <p>
        <nuxt-link to="/nl/register" class="btn btn-primary my-2">Registreren</nuxt-link>
        <nuxt-link to="/nl/login" class="btn btn-secondary my-2">Inloggen</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="scss">

</style>
