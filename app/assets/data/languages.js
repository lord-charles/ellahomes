export const languages = [
  {code: 'UK', label:'English', lang:'en'},
  {code: 'ES', label:'Español', lang:'es'},
  {code: 'FR', label:'Français', lang:'fr'},
  {code: 'VN', label:'Tiếng Việt', lang:'vi'},
  {code: 'CN', label:'中文', lang:'zh'},
  {code: 'SA', label:'العربية', lang:'ar'},
]

export const mapLabelToLang = (label) => {
  const selectedLanguage = languages.find((l) => l.label === label);
  return selectedLanguage ? selectedLanguage.lang : label;
};
export const mapLangToLabel = (lang) => {
  const language = languages.find((l) => l.lang === lang);
  return language ? language.label : lang; 
}