import { NavLink } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import Logo from "../../assets/logo.png";

function DesktopNav() {
  return (
    <header className="py-6 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 mb-10 md:px-16 md:mb-28 ">
      <nav className="flex items-center justify-between text-sm max-w-6xl mx-auto">
        <NavLink to="/" className="text-slate-600 font-bold text-lg">
          <img className="w-[44px] h-auto" src={Logo} alt="My Logo" />
        </NavLink>
        <ul className="flex items-center gap-x-8">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/photos">Photos</NavLink>
          </li>
        </ul>
        <button className="text-xl dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform group: -rotate-180">
          <MdOutlineWbSunny />
        </button>
      </nav>
    </header>
  );
}
export default DesktopNav;
