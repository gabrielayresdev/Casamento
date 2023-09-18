import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({
  label,
  type = "text",
  name,
  value,
  setValue,
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
        onChange={({ target }) => setValue(target.value)}
        {...rest}
      />
    </div>
  );
};

export default Input;
