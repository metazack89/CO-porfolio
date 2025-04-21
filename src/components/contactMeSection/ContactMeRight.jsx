import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <motion.img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
