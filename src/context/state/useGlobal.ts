import { useReducer } from 'react';
import { useTranslation } from 'react-i18next';

interface Global {
  isDarkTheme: string;
  lang: string;
}

const initialArgs: Global = {
  isDarkTheme: localStorage.getItem('theme') || "light",
  lang: localStorage.getItem('i18nextLng') || "en",
};

function reducer(state: Global, action: Global) {
  return { ...state, ...action };
}

const useGlobal = () => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const { i18n } = useTranslation();

  const toggleTheme = () => {
    localStorage.setItem('theme', state.isDarkTheme === "dark" ? "light" : "dark");

    setState({ ...state, isDarkTheme: state.isDarkTheme === "dark" ? "light" : "dark" });
  };

  const changeLanguage = (lang: string) => {
    localStorage.setItem('i18nextLng', lang);
    i18n.changeLanguage(lang)
    setState({ ...state, lang });
  };

  return {
    toggleTheme,
    changeLanguage,
    ...state,
  };
};

export default useGlobal;
