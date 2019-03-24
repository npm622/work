import React from 'react';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownMenuItem, DropdownToggle } from '..';

interface Props {
  gotoHome: () => void;
  gotoWelcome: () => void;
  gotoLogin: () => void;
  logout: () => void;
  user?: StitchUser;
}

const Header = ({ gotoHome, gotoLogin, gotoWelcome, logout, user }: Props) => {
  const logoAction = user ? gotoHome : gotoWelcome;

  const userAction = user ? logout : gotoLogin;
  const userActionText = `Log ${user ? 'out' : 'in'}`;

  return (
    <div className="app-header">
      <img src="/static/logo.png" alt="makes.life" onClick={logoAction} />
      <Dropdown
        alignRight
        vertical
        className="app-header-user-menu"
        renderToggle={({ handleToggle }) => (
          <DropdownToggle className="app-header-user-menu-icon" onToggle={handleToggle}>
            <div>
              <FontAwesomeIcon icon="user-circle" size="2x" />
              <FontAwesomeIcon icon="caret-down" />
            </div>
          </DropdownToggle>
        )}
      >
        {() => (
          <>
            <DropdownMenuItem className="app-header-user-menu-link">
              <button onClick={userAction}>{userActionText}</button>
            </DropdownMenuItem>
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default Header;
