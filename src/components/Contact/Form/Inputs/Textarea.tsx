import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Textarea = ({ label, name, value, setValue, ...rest }: IInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <textarea
        className={styles.input}
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
