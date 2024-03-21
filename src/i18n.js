import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import English from "../i18n/en/resource.json";
import Thai from "../i18n/th/resource.json";


const getLangCookieValue = () => {
  const lang = localStorage.getItem("lang");

  if (lang) {
    return lang;
  } else {
    return "en";
  }
};

const langCookieValue = getLangCookieValue();


if (process.env.NODE_ENV === "production") {



  i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      lng: langCookieValue || "en",
      fallbacklng: "en",
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "https://files.waanverse.com/i18n/{{lng}}/resource.json",
      },
    });
} else {
  
const resources = {
  en: {
    translation: English,
  },
  th: {
    translation: Thai,
  },
};


i18n
  .use(initReactI18next)
    .init({
      resources,
    lng: langCookieValue || "en",
    fallbacklng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    
  });


}




export default i18n;
