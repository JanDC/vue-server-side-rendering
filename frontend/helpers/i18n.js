import {DEFAULT_LANGUAGE} from '@/constants/i18n'

export const getClientBrowserLanguage = () => {
  return (navigator.languages && navigator.languages[0] ||
    navigator.language ||
    navigator.userLanguage).slice(0, -3);
};

export const getPreferredLanguage = ({params, req}) => {
  if (process.server) {
    return params.lang || req.locale.language || DEFAULT_LANGUAGE;
  }

  if (process.client) {
    console.log(getClientBrowserLanguage());
    return params.lang || getClientBrowserLanguage() || DEFAULT_LANGUAGE;
  }
};
