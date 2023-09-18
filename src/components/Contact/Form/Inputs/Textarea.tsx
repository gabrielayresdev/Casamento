import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: () => boolean | undefined;
}

const Textarea = ({ label, name, value, onChange, ...rest }: IInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <textarea
        className={styles.input}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
