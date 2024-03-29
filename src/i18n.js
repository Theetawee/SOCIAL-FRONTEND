import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";


const getLangCookieValue = () => {
  const lang = localStorage.getItem("lang");

  if (lang) {
    return lang;
  } else {
    return "en";
  }
};

const langCookieValue = getLangCookieValue();


  i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      lng: langCookieValue || "en",
      fallbacklng: "en",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "https://files.waanverse.com/i18n/{{lng}}/resource.json",
      },
    });


export default i18n;
