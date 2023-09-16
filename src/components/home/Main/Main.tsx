import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import Arrow from "/src/assets/icons/arrow-right-solid.svg";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Venha comemorar o seu grande dia conosco!
      </h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo
      </p>

      <Link to="/contato" className={styles.button}>
        <span className={styles.text}>Faça sua reserva</span>
        <div className={styles.squareDetail}>
          <img src={Arrow} alt="" />
        </div>
      </Link>
    </main>
  );
};

export default Main;
