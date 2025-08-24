import { useTranslation } from 'react-i18next';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';

const ContactMeMain = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center hover:bg-cyan-200 hover:bg-opacity-50 transition-all duration-300">
        {t('contact.title')}
      </h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
