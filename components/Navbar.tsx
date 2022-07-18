import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="w-screen h-16 flex justify-between">
      <ul>
        <NavItem to="#faq">FAQ</NavItem>
        <NavItem to="#events">Events</NavItem>
        <NavItem to=""></NavItem>
        <NavItem to=""></NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
