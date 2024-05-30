import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo-untitled-1-01-1_590x500_0_0_517739.jpg";
const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-700 py-6 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex items-center w-1/2 ">
          <Link
            to="/"
            className="px-10 font-bold tracking-tight text-orange-700"
          >
            <img src={logo} className=" w-20" />
          </Link>
          <Link
            to="/cinema"
            className=" px-2 text-xl font-bold tracking-tight text-orange-700"
          >
            Hệ thống rạp
          </Link>
          <Link
            to="/event"
            className="px-2 text-xl font-bold tracking-tight text-orange-700"
          >
            Khuyến mãi/Sự kiện
          </Link>
          <Link
            to="/booking"
            className="px-2 text-xl font-bold tracking-tight text-orange-700"
          >
            Test Đặt vé
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
