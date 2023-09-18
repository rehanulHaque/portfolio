import React from "react";
import { Logo, Links } from "../Data/NavData";
import NavBarLink from "../Components/NavbarLink";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar w-full flex items-center">
      <Link to={Logo.link}><img src={Logo.srcPath} alt={Logo.altTitle} className="w-60"/></Link>
      {Links.map((e) => {
        return <NavBarLink {...e} key={e.id} />;
      })}
    </nav>
  );
};

export default Navbar;
