<template>
  <section class="container">
    <div class="d-flex vh-100 w-50 p-3 mx-auto flex-column justify-content-center">
      User: {{user}}
      RegisterErrors: {{registerErrors}}
      <form method="post" @submit.prevent="submit">
        <nuxt-link to="/">← Back</nuxt-link>
        <hr>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="register-firstname">Voornaam</label>
            <input type="text" class="form-control" id="register-firstname" name="firstname" v-model="name">
          </div>
          <div class="form-group col-md-6">
            <label for="register-lastname">Achternaam</label>
            <input type="text" class="form-control" id="register-lastname" name="lastname" v-model="last_name">
          </div>
        </div>
        <div class="form-group">
          <label for="register-email">Email</label>
          <input type="email" class="form-control" name="email" id="register-email">
        </div>
        <fieldset>
          <legend class="col-form-label pt-0">Geslacht</legend>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sex" id="register-sex-male" value="male" checked>
              <label class="form-check-label" for="register-sex-male">
                Man
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sex" id="register-sex-female" value="female">
              <label class="form-check-label" for="register-sex-female">
                Vrouw
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sex" id="register-sex-neutral" value="neutral">
              <label class="form-check-label" for="register-sex-neutral">
                Neutraal
              </label>
            </div>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="register-password">Wachtwoord</label>
          <input type="password" class="form-control" name="password" id="register-password">
        </div>
        <div class="form-group">
          <label for="register-date">Geboortedatum</label>
          <input type="date" v-model="date" id="register-date" name="birthday" input-class="form-control"/>
        </div>
        <button class="btn btn-primary">
          Registreer
        </button>
      </form>
    </div>

  </section>
</template>

<script>
  import datepicker from 'vuejs-datepicker';
  import {mapState} from 'vuex';

  import axios from 'axios';

  export default {
    components: {
      datepicker
    },
    data() {
      return {
        date: null,
        name: '',
        last_name: '',
        posts: [],
        errors: [],
      }
    },
    middleware: 'register',
    computed: {
      ...mapState(
        {
          user: state => state.user.register.user,
          registerErrors: state => state.user.register.registerErrors,
        }
      ),
    },
    methods: {
      submit() {

      }
    }
  }
</script>

<style lang="scss">

</style>
