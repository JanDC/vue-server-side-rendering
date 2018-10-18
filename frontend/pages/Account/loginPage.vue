<template>
  <section class="container">
    <form class="d-flex vh-100 p-3 mx-auto flex-column justify-content-center">
      <nuxt-link to="/">← Back</nuxt-link>
      <hr>
      <div class="form-group">
        <label for="register-email-1">Email</label>
        <input type="email" class="form-control" id="register-email-1">
      </div>
      <div class="form-group">
        <label for="register-password-1">Wachtwoord</label>
        <input type="password" class="form-control" id="register-password-1">
      </div>
      <button class="btn btn-primary">
        Login
      </button>
    </form>

  </section>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss">

</style>
