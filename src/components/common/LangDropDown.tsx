import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const LangDropDown = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      return lang;
    } else {
      return "en";
    }
  });

  const langsFlags: Record<string, string> = {
    en: "https://files.waanverse.com/flags/en.svg",
    th: "https://files.waanverse.com/flags/th.svg",
  };

  const handleLangChange = (code: string) => {
    setLang(code);
    localStorage.setItem("lang", code);
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex w-full justify-center rounded-md border border-gray-200 dark:border-gray-800   bg-white dark:bg-gray-800 dark:text-gray-100 px-4 py-2 text-sm  font-medium text-gray-900  hover:bg-gray-100 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <img
              src={langsFlags[lang]}
              alt={`${lang} flag`}
              className="w-4 h-4 object-cover mr-2"
            />
            {lang}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  onClick={() => handleLangChange("en")}
                  type="button"
                  className="flex p-2 dark:hover:bg-gray-700 hover:bg-gray-200 w-full items-center gap-1">
                  <img
                    src={langsFlags["en"]}
                    alt="en flag"
                    className="w-4 h-4 mr-2 object-cover"
                  />
                                  {t("English")}
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => handleLangChange("th")}
                  type="button"
                  className="flex p-2 dark:hover:bg-gray-700 hover:bg-gray-200 w-full items-center gap-1">
                  <img
                    src={langsFlags["th"]}
                    alt="th flag"
                    className="w-4 h-4 mr-2"
                  />
                                  {t("Thai")}
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LangDropDown;
