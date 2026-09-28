import { Link } from "react-router-dom";

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
  return (
    <header className="py-3 fixed top-0 left-0 w-full z-90">
      <div className="container h-18">
        <div className="w-full h-full shadow-2xl shadow-shadow rounded-[35px] flex justify-between items-center px-5">
          <div className="left">
            <ul className="flex flex-row-reverse gap-4 font-bold">
              {menuLinks.map((item: MenuLinkType, index: number) => {
                return (
                  <li key={"menuLink-" + index} className=" ">
                    <Link
                      to={item.link}
                      className="h-14 py-2 px-4 rounded-full bg-linear-to-br hover:from-primary hover:to-secondary hover:text-white hover:translate-y-10 relative transition-transform duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            to="/"
            className="right h-full flex justify-center items-center"
          >
            <img
              src="/public/assets/circle-logo.png"
              alt=""
              className="h-4/5"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
