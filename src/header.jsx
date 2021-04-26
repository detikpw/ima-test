import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NavItem from "./nav-item";
import search from './search.svg';
import cart from './cart.svg';
import Menu from "./menu";

const header = ({ isMenuOpen, toggleMenu }) => (
  <header className="shadow sticky top-0 z-20 bg-white lg:block">
    <div className="flex py-2">
      <nav
        className={cx("lg:flex flex-grow", {
          hidden: !isMenuOpen,
          flex: isMenuOpen,
        })}
      >
        <div className="flex items-center ml-auto font-bold">
          <NavItem>Demos</NavItem>
          <NavItem className="ml-2">Pages</NavItem>
          <NavItem className="ml-2">Portofolios</NavItem>
        </div>
      </nav>
      <div className="flex-grow" />
      <div
        className={cx("lg:flex flex-grow justify-end lg:justify-start", {
          hidden: isMenuOpen,
          flex: !isMenuOpen,
        })}
      >
        <img src={search} />
        <img className="ml-2" src={cart} />
        <input className="hidden lg:block ml-4 p-1 border border-black rounded-md" />
      </div>
      <button className="px-4 lg:hidden" onClick={toggleMenu}>
        <Menu />
      </button>
    </div>
  </header>
);

header.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default header;
