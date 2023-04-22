import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper/Wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu/Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./Menu/MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  const handleNav = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setShow("-translate-y-[100px]");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };
  // console.log(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, [lastScrolly]);

  return (
    <header
      className={`bg-gray-50 w-full h-[50px] md:h-[80px] flex items-center justify-center sticky z-20 top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link className="w-[40px] md:w-[80px]" href="/">
          <Image
            src="/assets/icon/logo.svg"
            alt=""
            width={80}
            height={80}
          ></Image>
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}></Menu>
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          ></MenuMobile>
        )}

        <div className="flex items-center gap-2 text-black">
          {/* icon heart */}
          <div className=" w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px] mr-1 text-red-500"></IoMdHeartEmpty>

            <div className="bg-blue-400 rounded-full w-[14px] md:w-[18px] h-[14px] md:h-[18px] absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-1">
              21
            </div>
          </div>
          {/* icon Cart */}
          <div className=" w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[16px] md:text-[22px] mr-1"></BsCart>
            <div className="bg-blue-400 rounded-full w-[14px] md:w-[18px] h-[14px] md:h-[18px] absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-1">
              10
            </div>
          </div>
          {/* icon End */}

          {/* Mobile menu start */}
          <div className="w-8 flex md:hidden  justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
            {mobileMenu ? (
              <>
                <VscChromeClose
                  onClick={() => setMobileMenu(false)}
                  className="text-[16px]"
                ></VscChromeClose>
              </>
            ) : (
              <>
                <BiMenuAltRight
                  onClick={() => setMobileMenu(true)}
                  className="text-[16px]"
                ></BiMenuAltRight>
              </>
            )}
          </div>
          {/* Mobile menu end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
