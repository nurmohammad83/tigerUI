import React, { useState } from "react";

interface NavLink {
  title: string;
  url: string;
  submenu?: NavLink[];
}

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-blue-500 text-white">
      <div>
        <h1 className="text-xl font-bold">TigerUI</h1>
      </div>
      <div
        className={`mobile-menu-button ${showMobileMenu ? "active" : ""} block sm:hidden`}
        onClick={handleMobileMenuToggle}
      >
        ☰
      </div>
      <ul
        className={`menu ${showMobileMenu ? "show" : ""}group hidden sm:flex gap-4 items-center`}
        data-testid="desktop-menu"
      >
        {links.map((link) => (
          <li key={link.url} className="relative">
            <a
              href={link.url}
              className="hover:text-gray-200"
              data-testid={link.title.toLowerCase() + "-link"}
            >
              {link.title}
            </a>
            {link.submenu && (
              <ul className="absolute top-full group-hover:block hidden left-0 bg-blue-500 text-white p-2 space-y-2">
                {link.submenu.map((sublink) => (
                  <li key={sublink.url}>
                    <a
                      href={sublink.url}
                      className="hover:text-gray-200"
                      data-testid={sublink.title.toLowerCase() + "-link"}
                    >
                      {sublink.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <ul
        className={`menu-mobile ${showMobileMenu ? "show" : ""} block sm:hidden bg-blue-500 text-white p-2 space-y-2`}
        data-testid="mobile-menu"
      >
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url} className="hover:text-gray-200">
              {link.title}
            </a>
            {link.submenu && (
              <ul className="space-y-2">
                {link.submenu.map((sublink) => (
                  <li key={sublink.url}>
                    <a href={sublink.url} className="hover:text-gray-200">
                      {sublink.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
