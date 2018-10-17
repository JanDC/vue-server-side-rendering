<template>
  <section class="container">
    <div class="d-flex p-3 mx-auto flex-column justify-content-center">
      <div v-if="loading">Loading..</div>
      <form method="post" @submit.prevent="submit">
        <nuxt-link to="/">← Back</nuxt-link>
        <hr>
        <div class="bg-success text-white p-2" v-if="success">{{success.message}}</div>
        <br>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="register-firstname">Voornaam</label>
            <input type="text" class="form-control" id="register-firstname" name="firstname" v-model="firstname">
            <error name="firstname" :errors="errors"/>
          </div>
          <div class="form-group col-md-6">
            <label for="register-lastname">Achternaam</label>
            <input type="text" class="form-control" id="register-lastname" name="lastname" v-model="lastname">
            <error name="lastname" :errors="errors"/>
          </div>
        </div>
        <div class="form-group">
          <label for="register-email">Email</label>
          <input type="email" class="form-control" name="email" id="register-email" v-model="email">
          <error name="email" :errors="errors"/>
        </div>
        <fieldset>
          <legend class="col-form-label pt-0">Geslacht</legend>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sex" id="register-sex-male" value="male" v-model="sex">
              <label class="form-check-label" for="register-sex-male">
                Man
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sex" id="register-sex-female" value="female" v-model="sex">
              <label class="form-check-label" for="register-sex-female">
                Vrouw
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sex" id="register-sex-neutral" value="neutral" v-model="sex">
              <label class="form-check-label" for="register-sex-neutral">
                Neutraal
              </label>
            </div>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="register-password">Wachtwoord</label>
          <input type="password" class="form-control" name="password" id="register-password" v-model="password">
        </div>
        <div class="form-group">
          <label for="register-date">Geboortedatum</label>
          <no-ssr>
            <datepicker v-model="birthday" id="register-date" input-class="form-control"></datepicker>
            <!-- loading indicator -->
            <input slot="placeholder" type="date" id="register-date" name="birthday" class="form-control" v-model="birthday"/>
          </no-ssr>
        </div>
        <button class="btn btn-primary">
          Registreer
        </button>
      </form>
      <br><br>

      <button class="btn btn-sm btn-light" @click="showResponse = !showResponse">Show response</button>
      <div class="card" v-if="showResponse">
        <div class="card-body">
          <strong>User:</strong><br>
          <pre>{{user}}</pre>
          <hr>
          <strong>Errors</strong><br>
          <pre>{{errors}}</pre>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import datepicker from 'vuejs-datepicker';
  import error from '@/components/forms/error';

  import {mapState} from 'vuex';

  import {createHelpers} from 'vuex-map-fields';

  const {mapFields} = createHelpers({
    getterType: 'user/register/getField',
    mutationType: 'user/register/updateField',
  });

  export default {
    components: {
      datepicker,
      error,
    },
    data() {
      return {
        showResponse: false,
        loading: false,
      }
    },
    middleware: 'register',
    computed: {
      ...mapFields([
        'form.firstname',
        'form.lastname',
        'form.sex',
        'form.birthday',
        'form.email',
        'form.password',
      ]),
      ...mapState(
        {
          user: state => state.user.register.user,
          errors: state => state.user.register.errors,
          success: state => state.user.register.success,
          form: state => state.user.register.form,
        }
      ),
    },
    methods: {
      submit() {
        this.loading = true;
        this.$store.dispatch('user/register/createUser', this.form).then(() => {
          this.loading = false;
        });
      }
    }
  }
</script>

<style lang="scss">

</style>
