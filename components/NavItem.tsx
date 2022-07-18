import { Link } from "react-scroll";
import React, { type PropsWithChildren } from "react";

interface Props {
  to: string;
}

const NavItem: React.FC<PropsWithChildren<Props>> = ({ to, children }) => {
  return (
    <li>
      <Link className="" to={to}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
