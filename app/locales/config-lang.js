import merge from 'lodash/merge';
import {
  fr as frFRAdapter,
  es as esESAdapter,
  vi as viVNAdapter,
  enUS as enUSAdapter,
  zhCN as zhCNAdapter,
  arSA as arSAAdapter,
} from 'date-fns/locale';

// date-pickers
import {
  enUS as enUSDate,
  esES as esESDate,
  frFR as frFRDate,
  viVN as viVNDate,
  zhCN as zhCNDate,
} from '@mui/x-date-pickers/locales';
// core
import {
  enUS as enUSCore,
  esES as esESCore,
  frFR as frFRCore,
  viVN as viVNCore,
  zhCN as zhCNCore,
  arSA as arSACore,
} from '@mui/material/locale';
// data-grid
import {
  enUS as enUSDataGrid,
  esES as esESDataGrid,
  frFR as frFRDataGrid,
  viVN as viVNDataGrid,
  zhCN as zhCNDataGrid,
  arSD as arSDDataGrid,
} from '@mui/x-data-grid';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'Español',
    value: 'es',
    systemValue: merge(esESDate, esESDataGrid, esESCore),
    adapterLocale: esESAdapter,
    icon: 'flagpack:es',
  },
  {
    label: 'Français',
    value: 'fr',
    systemValue: merge(frFRDate, frFRDataGrid, frFRCore),
    adapterLocale: frFRAdapter,
    icon: 'flagpack:fr',
  },
  {
    label: 'Tiếng Việt',
    value: 'vi',
    systemValue: merge(viVNDate, viVNDataGrid, viVNCore),
    adapterLocale: viVNAdapter,
    icon: 'flagpack:vn',
  },
  {
    label: '中文',
    value: 'cn',
    systemValue: merge(zhCNDate, zhCNDataGrid, zhCNCore),
    adapterLocale: zhCNAdapter,
    icon: 'flagpack:cn',
  },
  {
    label: 'العربية',
    value: 'ar',
    systemValue: merge(arSDDataGrid, arSACore),
    adapterLocale: arSAAdapter,
    icon: 'flagpack:sa',
  },
];

export const defaultLang = allLangs[0]; // English

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0
