import React from "react";
import Form from "../components/Contact/Form/FormIndex";
import emailjs from "@emailjs/browser";

import WhatsappIcon from "/src/assets/shared/whatsapp.png";
import EmailIcon from "/src/assets/shared/envelope-regular.svg";

import styles from "./Contact.module.sass";
import useForm from "../hooks/useForm";

const Contact = () => {
  const nome = useForm("notNull");
  const email = useForm("email");
  const message = useForm(false);
  const date = useForm("date");
  const [showErrors, setShowErrors] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    if (
      !nome.validate() ||
      !email.validate() ||
      !message.validate() ||
      !date.validate()
    ) {
      setShowErrors(true);
      setSending(false);
      return;
    }
    if (formRef.current)
      emailjs
        .sendForm(
          "service_nypjud5",
          "template_3ueonbx",
          formRef.current,
          "LGzh_069h3ckxc6iB"
        )
        .then(
          (result) => {
            nome.setValue("");
            email.setValue("");
            message.setValue("");
            date.setValue("");
            setShowErrors(false);
            setSending(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.leftSide}>
          <div className={styles.text}>
            <h2 className={styles.title}>Solicite um orçamento</h2>
            <p className={styles.paragraph}>
              Suas respostas vão nos ajudar a entender um pouco do que estão
              idealizando para o Grande Dia!
            </p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.info}>
              <img src={WhatsappIcon} />
              (21) 90123-4567
            </div>
            <div className={styles.info}>
              <img src={EmailIcon} />
              contato@lesnoces.com.br
            </div>
          </div>
        </div>
        <Form.Form
          className={styles.Form}
          ref={formRef}
          handleSubmit={handleSubmit}
        >
          <Form.Input
            label="nome"
            name="from_name"
            value={nome.value}
            onChange={nome.onChange}
          />
          {showErrors && <span className={styles.error}>{nome.error}</span>}

          <Form.Input
            label="email"
            type="email"
            name="from_email"
            value={email.value}
            onChange={email.onChange}
          />
          {showErrors && <span className={styles.error}>{email.error}</span>}
          <Form.Date
            value={date.value}
            setValue={date.setValue}
            validate={date.validate}
            name="date"
          />
          {showErrors && <span className={styles.error}>{date.error}</span>}
          <Form.Textarea
            label="Mensagem"
            name="message"
            value={message.value}
            onChange={message.onChange}
          />
          <Form.Button disabled={sending} />
          {showErrors && <span className={styles.error}>{message.error}</span>}
        </Form.Form>
      </div>
    </div>
  );
};

export default Contact;
