import React from 'react';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { UserMenu } from '.';

interface Props {
  gotoHome: () => void;
  gotoWelcome: () => void;
  gotoLogin: () => void;
  logout: () => void;
  user?: StitchUser;
}

const Header = ({ gotoHome, gotoLogin, gotoWelcome, logout, user }: Props) => {
  const logoAction = user ? gotoHome : gotoWelcome;
  return (
    <div className="app-header">
      <img src="/static/logo.png" alt="makes.life" onClick={logoAction} />
      <UserMenu gotoLogin={gotoLogin} logout={logout} user={user} />
    </div>
  );
};

export default Header;
