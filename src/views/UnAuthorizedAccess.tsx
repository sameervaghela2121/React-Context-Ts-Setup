import { useTranslation } from "react-i18next";

const UnAuthorizedAccess = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('unauthorized-access.title')}</h1>
      <h6>{t('unauthorized-access.heading')}</h6>
    </div>
  )
}

export default UnAuthorizedAccess