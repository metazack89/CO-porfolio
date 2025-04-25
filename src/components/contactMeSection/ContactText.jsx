import { useTranslation } from "react-i18next";

const ContactText = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-orange text-3xl mb-4">
        {t("contact.leftSection.getInTouchTitle")}
      </h2>
      <p>
        {t("contact.leftSection.getInTouchText1")}
        <br />
        {t("contact.leftSection.getInTouchText2")}
      </p>
    </div>
  );
};

export default ContactText;
