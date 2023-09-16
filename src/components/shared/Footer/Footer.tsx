import Logo from "/src/assets/logo.png";
import styles from "./Footer.module.sass";

import WhatsappIcon from "/src/assets/shared/whatsapp.png";
import YouTubeIcon from "/src/assets/shared/youtube.png";
import InstagramIcon from "/src/assets/shared/instagram.png";
import FacebookIcon from "/src/assets/shared/facebook.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={Logo} />
      </div>
      <div className={styles.contact}>
        <div className={styles.whatsapp}>
          <p>Vamos falar sobre a sua festa?</p>
          <p>Mande uma mensagem</p>
          <div className={styles.number}>
            <img src={WhatsappIcon} />
            (21) 98704-3948
          </div>
        </div>
        <span className={styles.detail}></span>
        <div className={styles.socialNetwork}>
          <p>Acesse nossas redes</p>
          <div className={styles.socialNetworkIcons}>
            <a href="">
              <img src={FacebookIcon} />
            </a>
            <a href="">
              <img src={InstagramIcon} />
            </a>
            <a href="">
              <img src={YouTubeIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
