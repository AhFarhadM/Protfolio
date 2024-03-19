import { useEffect, useState } from "react";
import MobileNav from "../components/Navbar/MobileNav";
import DesktopNav from "../components/Navbar/DesktopNav";

export default function Navbar() {
  const [mobileScreenSize, setMobileScreenSize] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    function handleResize() {
      setMobileScreenSize(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{mobileScreenSize ? <MobileNav /> : <DesktopNav />}</>;
}
