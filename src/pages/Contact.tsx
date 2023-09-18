import React, { FormEventHandler } from "react";
import Form from "../components/Contact/Form/FormIndex";
import emailjs from "@emailjs/browser";

import WhatsappIcon from "/src/assets/shared/whatsapp.png";
import EmailIcon from "/src/assets/shared/envelope-regular.svg";

import styles from "./Contact.module.sass";

const Contact = () => {
  const [nome, setNome] = React.useState<string>("");

  const handleSubmit = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
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
            console.log(result.text);
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
              (21) 98704-3948
            </div>
            <div className={styles.info}>
              <img src={EmailIcon} />
              contato@lefesty.com.br
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
            value={nome}
            setValue={setNome}
          />
          <Form.Input
            label="email"
            type="email"
            name="from_email"
            value={nome}
            setValue={setNome}
          />
          <Form.Date />
          <Form.Textarea
            label="Mensagem"
            name="from_message"
            value={nome}
            setValue={setNome}
          />
          <Form.Button />
        </Form.Form>
      </div>
    </div>
  );
};

export default Contact;
