import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial
        link="https://github.com/metazack89"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.facebook.com/share/18p6BkwmAt/"
        Icon={FaFacebook}
      />
      <SingleContactSocial link="https://t.me/@Derick280" Icon={FaTelegram} />
      <SingleContactSocial
        link="https://wa.me/573026171193?text=Hola%20quiero%20hablar%20contigo"
        Icon={FaWhatsapp}
      />
    </div>
  );
};

export default ContactSocial;
