import { useTranslation } from "react-i18next";

const SecuredPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('secured-page.title')}</h1>
      <h6>{t('secured-page.heading')}</h6>
    </div>
  )
}

export default SecuredPage