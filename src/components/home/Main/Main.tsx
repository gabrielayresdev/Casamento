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
        No Les Noces, estamos dedicados a tornar o dia mais importante da sua
        vida verdadeiramente inesquecível. Com uma combinação de elegância
        atemporal, instalações de classe mundial e uma equipe experiente e
        apaixonada, nosso salão de festas para casamentos é o local ideal para
        celebrar o amor e o compromisso.
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
