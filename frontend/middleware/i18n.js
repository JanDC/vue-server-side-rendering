import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from '@/constants/i18n'
import {getPreferredLanguage} from "@/helpers/i18n";

export default function ({isHMR, env, req, app, store, route, params, error, redirect}) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return;
  /*
  * Get preferred language.
  *
  * Priority:
  * 1) by url
  * 2) by accept-languag header
  * 3) by default site language
   */
  let locale = getPreferredLanguage({params, req});

  // Check if the language is recognized. If not redirect to 404.
  if (store.state.i18n.locales.indexOf(locale) === -1) {
    return error({message: 'This page could not be found.', statusCode: 404})
  }

  // Update store to use the preferred language.
  store.commit('i18n/SET_LOCALE', locale);

  // Update i18n (translations) to use the preferred language.
  app.i18n.locale = store.state.i18n.locale;

  // If root url has no language redirect to our preferred language.
  if (route.fullPath === '/') {
    redirect(`/${locale}`)
  }

}
