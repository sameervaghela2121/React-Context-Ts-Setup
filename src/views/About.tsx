import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about.title')}</h1>
      <h6>{t('about.heading')}</h6>
    </div>
  )
}

export default About