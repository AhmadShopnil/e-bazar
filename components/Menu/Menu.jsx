import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const menuData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];
const Menu = ({ showCatMenu, setShowCatMenu }) => {
  //   const handleSubmenu = () => {
  //     setShowCatMenu(!showCatMenu);
  //   };

  return (
    <ul className="hidden md:flex items-center gap-4 font-medium text-black ">
      {menuData?.map((menuItem) => {
        return (
          <React.Fragment key={menuItem?.id}>
            {menuItem?.subMenu ? (
              <>
                <li
                  //   onClick={handleSubmenu}
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                  className="cursor-pointer flex gap-2 items-center relative "
                >
                  {menuItem?.name}
                  <BsChevronDown size={14}></BsChevronDown>
                  {showCatMenu && (
                    <ul className="absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg rounded-lg">
                      {subMenuData?.map((submenuItem) => {
                        return (
                          <Link
                            onClick={() => setShowCatMenu(false)}
                            key={submenuItem?.id}
                            href="/"
                          >
                            <li className="h-12 flex justify-between items-center hover:bg-black/[0.03] px-3 rounded-md">
                              {" "}
                              {submenuItem?.name}
                              <span className="opacity-50 text-sm">
                                {submenuItem?.doc_count}
                              </span>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              </>
            ) : (
              <>
                <li className="cursor-pointer ">
                  <Link href={menuItem?.url}>{menuItem?.name}</Link>
                </li>
              </>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
