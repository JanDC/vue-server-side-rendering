<template>
  <section class="container">
    <div class="d-flex vh-100 p-3 mx-auto flex-column justify-content-center">
      <h1 class="jumbotron-heading">{{$t('welcome')}}</h1>
      <p class="lead text-muted">{{$t('please_login_first')}}</p>
      <p>
        <nuxt-link :to="`/${$store.state.i18n.locale}/register`" class="btn btn-primary my-2">{{$t('register.register')}}</nuxt-link>
        <nuxt-link :to="`/${$store.state.i18n.locale}/login`" class="btn btn-secondary my-2">{{$t('login.login')}}</nuxt-link>
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
