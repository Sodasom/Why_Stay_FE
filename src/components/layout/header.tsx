// import { useLocation } from "react-router-dom";
import MenuIcon from "../icons/menu_icon";
import ProfileIcon from "../icons/profile_icon";

export default function Header() {
  //   const { pathname } = useLocation();
  return (
    <header className="bg-[#20b2aa] fixed top-0 w-full h-[50px] lg:h-[80px] px-6 z-50">
      <div className="flex items-center justify-end h-full space-x-3">
        <ProfileIcon />
        <MenuIcon />
      </div>
    </header>
  );
}
