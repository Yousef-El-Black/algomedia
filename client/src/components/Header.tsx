import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import MenuPopUp from "./MenuPopUp";
import { HashLink } from "react-router-hash-link";

const menuLinks = [
  {
    title: "الرئيسية",
    link: "/#home",
  },
  {
    title: "خدماتنا",
    link: "/#services",
  },
  {
    title: "من نحن",
    link: "/#about",
  },
  {
    title: "أعمالنا",
    link: "/#works",
  },
  {
    title: "اتصل بنا",
    link: "/#contact",
  },
];

type MenuLinkType = {
  title: string;
  link: string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-3 fixed top-0 left-0 w-full z-90">
      <div className="container h-18 relative z-90">
        <div className="w-full h-full shadow-2xl shadow-shadow rounded-[35px] flex justify-between items-center px-5 bg-card">
          <div className="left">
            <div
              className="menu-icon rounded-full bg-soft p-2 cursor-pointer lg:hidden"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? (
                <MenuIcon fontSize="large" />
              ) : (
                <CloseIcon fontSize="large" />
              )}
            </div>
            <ul className="hidden lg:flex flex-row-reverse gap-4 font-bold">
              {menuLinks.map((item: MenuLinkType, index: number) => {
                return (
                  <li key={"menuLink-" + index} className=" ">
                    <HashLink
                      to={item.link}
                      className="h-14 py-2 px-4 rounded-full bg-linear-to-br hover:from-primary hover:to-secondary hover:text-white duration-300"
                    >
                      {item.title}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            to="/"
            className="right h-full flex justify-center items-center"
          >
            <img src="/assets/circle-logo.png" alt="" className="h-4/5" />
          </Link>
        </div>
      </div>
      <MenuPopUp
        setIsOpen={setIsMenuOpen}
        isOpen={isMenuOpen}
        menu={menuLinks}
      />
    </header>
  );
};

export default Header;
