import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xm5grx6", "template_6dcqhg9", form.current, {
        publicKey: "4_cmrmGAdZemEyVpq",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess(t("contact.leftSection.successMessage")); // Corregido para traducción
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-cyan text-center">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <input
          type="text"
          name="from_name"
          placeholder={t("contact.leftSection.namePlaceholder")} // Traducido
          required
          className="h-12 rounded-lg bg-lightBrown px-4"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder={t("contact.leftSection.emailPlaceholder")} // Traducido
          required
          className="h-12 rounded-lg bg-lightBrown px-4"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder={t("contact.leftSection.messagePlaceholder")} // Traducido
          required
          className="rounded-lg bg-lightBrown p-4"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          {t("contact.leftSection.sendButton")} {/* Traducido */}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
