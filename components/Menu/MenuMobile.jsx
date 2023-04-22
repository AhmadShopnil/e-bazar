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
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black ">
      {menuData?.map((menuItem) => {
        return (
          <React.Fragment key={menuItem?.id}>
            {menuItem?.subMenu ? (
              <>
                <li
                  onClick={() => setShowCatMenu(!showCatMenu)}
                  className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                >
                  <div className="flex justify-between items-center">
                    {menuItem?.name}
                    <BsChevronDown size={14}></BsChevronDown>
                  </div>
                  {showCatMenu && (
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                      {subMenuData?.map((submenuItem) => {
                        return (
                          <Link
                            onClick={() => {
                              setShowCatMenu(false);
                              setMobileMenu(false);
                            }}
                            key={submenuItem?.id}
                            href="/"
                          >
                            <li className="py-4 px-8 border-t flex justify-between">
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
                <li className="cursor-pointer py-4 px-5 border-b ">
                  <Link
                    onClick={() => setMobileMenu(false)}
                    href={menuItem?.url}
                  >
                    {menuItem?.name}
                  </Link>
                </li>
              </>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
