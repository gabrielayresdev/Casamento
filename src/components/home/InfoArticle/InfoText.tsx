import styles from "./InfoText.module.sass";

interface IInfoText {
  title: string;
  text: string;
}

const InfoText = ({ title, text }: IInfoText) => {
  return (
    <div className={styles.text}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};

export default InfoText;
