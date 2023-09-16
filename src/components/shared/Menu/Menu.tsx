import React from "react";
import NavLi from "./NavLi";

import Logo from "/src/assets/logo.png";
import bars from "/src/assets/icons/bars-solid.svg";

import styles from "./Menu.module.sass";

const Menu = () => {
  const [active, setActive] = React.useState<boolean>(false);

  const handleMenu: React.MouseEventHandler<HTMLElement> = ({
    target,
    currentTarget,
  }) => {
    if (target === currentTarget) setActive(false);
  };

  const closeMenu = () => {
    setActive(false);
  };

  React.useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else document.body.removeAttribute("style");
  }, [active]);

  return (
    <header className={styles.header}>
      <h1>
        <img src={Logo} alt="Logo da empresa" />
      </h1>
      <nav>
        <div
          className={styles.menuControlls}
          onClick={() => setActive((current) => !current)}
        >
          <img src={bars} alt="Abrir modal" className="" />
        </div>
        <div
          onClick={handleMenu}
          className={`${styles.navListContainer} ${
            active ? styles.active : ""
          }`}
        >
          <ul className={styles.navList}>
            <NavLi address="/" handleClick={closeMenu}>
              Inicio
            </NavLi>
            <NavLi address="/local" handleClick={closeMenu}>
              local
            </NavLi>
            <NavLi address="/fotos" handleClick={closeMenu}>
              Fotos
            </NavLi>
            <NavLi address="/videos" handleClick={closeMenu}>
              Vídeos
            </NavLi>
            <NavLi address="/" section="depoimentos" handleClick={closeMenu}>
              Depoimentos
            </NavLi>
            <a href="#depoimentos">Dep</a>
            <NavLi address="/contato" handleClick={closeMenu}>
              Contato
            </NavLi>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;