<template>
  <section class="container">

    <form class="d-flex vh-100 w-50 p-3 mx-auto flex-column justify-content-center">
      <div class="form-group">
        <label for="register-email-1">Email</label>
        <input type="email" class="form-control" id="register-email-1">
      </div>
      <div class="form-group">
        <label for="register-password-1">Wachtwoord</label>
        <input type="password" class="form-control" id="register-password-1">
      </div>
      <button class="btn btn-primary">
        Registreer
      </button>
    </form>

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
