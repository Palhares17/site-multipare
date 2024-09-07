import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoMultipare from '../../assets/multipare.png';

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <header className="flex flex-col items-center gap-4 md:flex-row justify-between">
      <NavLink to="/">
        <img src={LogoMultipare} alt="logo" className="h-16" />
      </NavLink>
      <nav className="relative">
        <ul className="flex gap-3">
          <NavLink
            to="/"
            className="font-medium hover:text-indigo-600 duration-75"
          >
            Início
          </NavLink>
          <Link
            className="font-medium cursor-pointer hover:text-indigo-600 duration-75"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre
          </Link>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              className="font-medium cursor-pointer hover:text-indigo-600 duration-75"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Produto
            </Link>
            {dropdown && (
              <ul
                className="absolute left-0 top-full  w-48 bg-white shadow-md rounded-lg p-2"
                onMouseEnter={handleMouseEnter}
              >
                <li className="py-1">
                  <NavLink
                    to="e-valet"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded"
                  >
                    e-valet
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink
                    to="e-pare"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded"
                  >
                    e-pare
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              className="font-medium cursor-pointer hover:text-indigo-600 duration-75"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
