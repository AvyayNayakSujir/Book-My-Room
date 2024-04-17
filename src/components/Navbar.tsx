import { AuthShowcase } from "./Auth";
const Navbar = () => {
  return (
    <div className="navbar flex h-[50px] justify-center bg-[#003580]">
      <div className="nav-container flex w-full max-w-[1024px] items-center justify-between text-white">
        <span className="logo font-[500]">BookMyRoom</span>
        <div className="navItems">
          <AuthShowcase />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
