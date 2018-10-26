import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from '@/constants/i18n';

Vue.mixin({
  data: () => ({
    locales: SUPPORTED_LANGUAGES
  }),
  computed: {
    ...mapState('i18n', ['locale'])
  },
  methods: {
    ...mapActions({
      setLocale: 'i18n/setLocale'
    }),
    getLocalizedRoute(route){
      return route;
    }
  }
});
