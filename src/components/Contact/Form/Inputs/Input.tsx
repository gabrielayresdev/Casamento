import { ChangeEvent } from "react";
import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({
  label,
  type = "text",
  name,
  value,
  onBlur,
  onChange,
  ...rest
}: IInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
