<template>
  <span v-if="error" class="bg-danger text-white p-2 d-inline-block">{{error.message}}</span>
</template>

<script>
  import Vue from 'vue'

  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      errors: {
        type: Object,
      }
    },
    components: {},
    data() {
      return {}
    },
    computed: {
      error() {
        if (typeof this.errors.violations !== "undefined") {
          return this.errors.violations.filter(error => {
            return error.propertyPath === this.name;
          })[0]
        }
      }
    },
    methods: {},
  }
</script>

<style lang="scss">



</style>
