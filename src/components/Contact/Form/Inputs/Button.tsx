import React from "react";
import styles from "./Button.module.sass";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      Enviar pedido
    </button>
  );
};

export default Button;
