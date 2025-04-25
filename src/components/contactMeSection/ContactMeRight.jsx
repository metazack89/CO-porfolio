import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactMeRight = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <motion.img
        src="/email-image.png"
        alt="email image"
        className="max-w-[300px]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <h3 className="text-4xl text-cyan">{t("contact.rightSection.title")}</h3>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
