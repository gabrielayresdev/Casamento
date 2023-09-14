import { NavLink } from "react-router-dom";
import styles from "./NavLi.module.sass";

interface INavLi extends React.PropsWithChildren {
  address: string;
  section?: string;
  handleClick?: VoidFunction;
}

const NavLi = ({ children, address, section, handleClick }: INavLi) => {
  return (
    <li className={styles.listItem}>
      <NavLink
        to={`${address}${section ? `#${section}` : ""}`}
        className={({ isActive }) => {
          return `${styles.NavLi} ${isActive && !section ? styles.active : ""}`;
        }}
        onClick={handleClick}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavLi;
