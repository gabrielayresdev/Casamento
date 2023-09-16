/* import { NavLink } from "react-router-dom"; */
import { NavHashLink } from "react-router-hash-link";
import styles from "./NavLi.module.sass";

interface INavLi extends React.PropsWithChildren {
  address: string;
  section?: string;
  handleClick?: VoidFunction;
}

const NavLi = ({ children, address, section, handleClick }: INavLi) => {
  console.log(`${address}${section ? `#${section}` : ""}`);
  return (
    <li className={styles.listItem}>
      <NavHashLink
        to={`${address}${section ? `#${section}` : ""}`}
        className={({ isActive }: { isActive: boolean }) => {
          return `${styles.NavLi} ${isActive && !section ? styles.active : ""}`;
        }}
        smooth
        onClick={handleClick}
      >
        {children}
      </NavHashLink>
    </li>
  );
};

export default NavLi;
