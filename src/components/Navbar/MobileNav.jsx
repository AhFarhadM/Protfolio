import { MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import { IoCloseSharp, IoPersonSharp, IoHome } from "react-icons/io5";
import { FaRegNewspaper, FaCamera } from "react-icons/fa6";
import { SlChemistry } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
  const body = document.querySelector("body");

  const handleItemClick = () => {
    setOpenNav(!openNav);
    if (!openNav) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  return (
    <nav className="flex items-center justify-between text-sm py-6 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 mb-10 md:px-16 md:mb-28">
      <NavLink to="/" className="text-slate-600 font-bold text-lg">
        <img className="w-[32px] h-auto" src={Logo} alt="My Logo" />
      </NavLink>
      <div className="flex items-center gap-x-4">
        <button className="text-xl dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform group: -rotate-180">
          <MdOutlineWbSunny />
        </button>
        <button
          type="button"
          onClick={handleItemClick}
          className="text-xl dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <div
        className={`${
          openNav ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 z-40 w-[100%] h-screen bg-white text-white transition-transform ease-in-out duration-500`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <NavLink to="/" className="text-slate-600 font-bold text-lg">
            Mahdi Noori
          </NavLink>
          <button
            className="text-black text-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 null"
            onClick={handleItemClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <ul className="flex flex-col mt-6">
          <li className="text-lg text-black flex items-center gap-x-2 font-semibold dark:shadow-line-dark shadow-line-light p-6 group">
            <IoHome />
            <NavLink to="/" onClick={handleItemClick}>
              Home
            </NavLink>
          </li>
          <li className="text-black flex items-center gap-x-2 font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group">
            <IoPersonSharp />
            <NavLink to="/about" onClick={handleItemClick}>
              About
            </NavLink>
          </li>
          <li className="text-black flex items-center gap-x-2 font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group">
            <SlChemistry />
            <NavLink to="/projects" onClick={handleItemClick}>
              Projects
            </NavLink>
          </li>
          <li className="text-black flex items-center gap-x-2 font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group">
            <FaRegNewspaper />
            <NavLink to="/blog" onClick={handleItemClick}>
              Blog
            </NavLink>
          </li>
          <li className="text-black flex items-center gap-x-2 font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group">
            <FaCamera />
            <NavLink to="/photos" onClick={handleItemClick}>
              Photos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
