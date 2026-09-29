import { Link } from "react-router-dom";

const MenuPopUp = ({
  setIsOpen,
  isOpen,
  menu,
}: {
  setIsOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
  isOpen: boolean;
  menu: { title: string; link: string }[];
}) => {
  return (
    <div
      className={`z-89 lg:hidden fixed w-screen h-screen top-0 left-0 ${isOpen ? "" : "hidden"}`}
    >
      <div
        className="overlay bg-[#00000080] w-full h-full"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="container absolute top-25">
        <ul className="menu bg-white  w-full rounded-lg text-center p-4">
          {menu.map(
            (menuItem: { title: string; link: string }, index: number) => {
              return (
                <li
                  key={"menuitem-" + index}
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    to={menuItem.link}
                    className="p-4 block w-full my-3 font-bold hover:text-soft hover:bg-linear-to-br from-primary to-secondary rounded-full cursor-pointer duration-300"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuPopUp;
