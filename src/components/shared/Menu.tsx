import NavLi from "./NavLi";
import Logo from "/src/assets/logo.png";

const Menu = () => {
  return (
    <div className="flex items-center justify-between w-full lg:px-containerDesktop bg-c1 h-[5.8rem] ">
      <h1 className="h-full py-1">
        <img src={Logo} alt="Logo da empresa" className="h-full" />
      </h1>
      <nav className="h-full">
        <ul className="flex gap-10 h-full">
          <NavLi address="/">Inicio</NavLi>
          <NavLi address="/local">local</NavLi>
          <NavLi address="/fotos">Fotos</NavLi>
          <NavLi address="/videos">Vídeos</NavLi>
          <NavLi address="/" section="depoimentos">
            Depoimentos
          </NavLi>
          <NavLi address="/contato">Contato</NavLi>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
