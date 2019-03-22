import React, { useState } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import PropTypes from 'prop-types';
import MenuContent from './MenuContent';


const Hamburger = ({ changeClassName }) => {
  const [menuOpen, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="slide-menu">
      <CheeseburgerMenu
        isOpen={menuOpen}
        closeCallback={() => closeMenu()}
      >
        <MenuContent
          changeClassName={changeClassName}
          closeCallback={() => closeMenu()}
          click={closeMenu}
        />
      </CheeseburgerMenu>
      <HamburgerMenu
        isOpen={menuOpen}
        menuClicked={() => openMenu()}
        width={32}
        height={24}
        strokeWidth={4}
        rotate={0}
        color="white"
        borderRadius={5}
        animationDuration={0.5}
      />
    </div>
  );
};

Hamburger.propTypes = {
  changeClassName: PropTypes.func.isRequired,
};

export default Hamburger;
