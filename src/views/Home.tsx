
import { useTranslation } from "react-i18next";
import { useAppState } from "../context"

const Home = () => {
  const { isDarkTheme, toggleTheme } = useAppState("global");
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <div>
        <h6>{t('home.heading')}</h6>
        <p>{isDarkTheme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  )
}

export default Home