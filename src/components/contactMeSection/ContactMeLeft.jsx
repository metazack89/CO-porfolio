import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import { useTranslation } from "react-i18next";

const ContactMeLeft = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 w-full">
      <h3 className="text-4xl text-cyan">{t("contact.leftSection.title")}</h3>
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
