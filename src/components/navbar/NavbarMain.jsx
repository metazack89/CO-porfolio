import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import NavbarToggler from './NavbarToggler';
import LanguageSwitcher from './LanguageSwitcher';
import { useSelector } from 'react-redux';

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="relative">
      {/* Language Switcher en la esquina superior izquierda */}
      <LanguageSwitcher />

      {/* Contenedor principal del navbar */}
      <div className="max-w-[750px] mx-auto w-full px-2 sm:px-4 fixed left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-4 mt-2">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
          <NavbarLogo />
          <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
            <NavbarLinks />
          </div>
          <NavbarBtn />
        </div>

        {/* Botón hamburguesa visible solo en mobile */}
        <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
