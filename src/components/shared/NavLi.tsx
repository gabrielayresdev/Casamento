import { NavLink, Link } from "react-router-dom";
import styles from "./NavLi.module.sass";

interface INavLi extends React.PropsWithChildren {
  address: string;
  section?: string;
}

const NavLi = ({ children, address, section }: INavLi) => {
  return (
    <li className="relative flex flex-col justify-center">
      {section ? (
        <Link
          to={`${address}${section ? `#${section}` : ""}`}
          className={`text-c2 hover:text-c3 duration-300 text-1.5 outline-none after:content-[''] after:w-[1px] after:h-[2px] after:opacity-0 after:bg-c2 after:block hover:after:opacity-100 hover:after:w-full after:duration-300 after:absolute after:bottom-0`}
        >
          {children}
        </Link>
      ) : (
        <NavLink
          to={`${address}${section ? `#${section}` : ""}`}
          className={({ isActive }) => {
            return `${`text-c2 hover:text-c3 duration-300 text-1.5 outline-none after:content-[''] after:w-[1px] after:h-[2px] after:opacity-0 after:bg-c2 after:block hover:after:opacity-100 hover:after:w-full after:duration-300 after:absolute after:bottom-0`} ${
              isActive ? `after:w-full after:opacity-100 after:bg-c3` : ""
            }`;
          }}
        >
          {children}
        </NavLink>
      )}
    </li>
  );
};

export default NavLi;
