import { useCallback } from "react";
import { useTranslation } from "react-i18next";

// import { useSettingsContext } from 'src/components/settings';

import { allLangs, defaultLang } from "./config-lang";
import { localStorageGetItem } from "../../utils/storage-available";

// ----------------------------------------------------------------------

export function useLocales() {
  const langStorage = localStorageGetItem("i18nextLng");

  const currentLang =
    allLangs.find((lang) => lang.value === langStorage) || defaultLang;

  return {
    allLangs,
    currentLang,
  };
}

// ----------------------------------------------------------------------

export function useTranslate() {
  const { t, i18n, ready } = useTranslation();

  // const settings = useSettingsContext();

  const onChangeLang = useCallback(
    (newlang) => {
      i18n.changeLanguage(newlang);
      // settings.onChangeDirectionByLang(newlang);
    },
    // [i18n, settings]
    [i18n]
  );

  return {
    t,
    i18n,
    ready,
    onChangeLang,
  };
}
