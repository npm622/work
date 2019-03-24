import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '../../components';
import { Classer } from '../../components/utils';

interface Props {
  children?: never;
  classer: Classer;
  currentRoute: string;
  links: { [key: string]: string };
  loggedIn: boolean;
  userMenu: { loggedIn: UserMenuLink[]; loggedOut: UserMenuLink[] };
  working: number;
}

const StackedNav: React.FC<Props> = ({ classer: parentClasser, currentRoute, links, loggedIn, userMenu, working }) => {
  const classer = parentClasser.new('nav');

  return (
    <div className={classer.name()}>
      <Links classer={classer.new('links')} currentRoute={currentRoute} links={links} />
      <Spinner classer={classer.new('spinner')} working={working} />
      <UserMenu classer={classer.new('user')} menu={userMenu} loggedIn={loggedIn} />
    </div>
  );
};

const Links: React.FC<{
  classer: Classer;
  currentRoute: string;
  links: { [key: string]: string };
}> = ({ classer, currentRoute, links }) => (
  <div className={classer.name()}>
    {Object.entries(links).map(([to, display]) => (
      <Link
        key={to}
        to={to}
        className={classNames(classer.name('item'), { [classer.name('item-active')]: currentRoute === to })}
      >
        {display}
      </Link>
    ))}
  </div>
);

const Spinner: React.FC<{
  classer: Classer;
  working: number;
}> = ({ classer, working }) => (
  <div className={classNames(classer.name(), { [classer.name('showing')]: working })}>
    <FontAwesomeIcon icon="baseball-ball" fixedWidth size="2x" spin />
  </div>
);

type UserMenuLink =
  | { type: 'link'; to: string; display: string }
  | { type: 'button'; onClick: (e: React.MouseEvent<HTMLButtonElement>) => any; display: string };

const UserMenuLinkComponent = (toggle: () => void, link: UserMenuLink) =>
  link.type === 'link' ? (
    <Link key={link.to} to={link.to} onClick={toggle}>
      {link.display}
    </Link>
  ) : (
    <button key={link.display} onClick={e => Promise.resolve(link.onClick(e)).then(toggle)}>
      {link.display}
    </button>
  );

const defaultUserMenuProps = {
  loggedIn: false,
};
type UserMenuProps = {
  classer: Classer;
  menu: { loggedIn: UserMenuLink[]; loggedOut: UserMenuLink[] };
} & typeof defaultUserMenuProps;
const UserMenu = ({ classer, loggedIn, menu }: UserMenuProps) => (
  <div className={classer.name()}>
    <Menu icon={showing => (showing ? 'times' : 'user')} rightAligned rootClass={classer.name('menu')}>
      {toggle =>
        loggedIn
          ? menu.loggedIn.map(link => UserMenuLinkComponent(toggle, link))
          : menu.loggedOut.map(link => UserMenuLinkComponent(toggle, link))
      }
    </Menu>
  </div>
);
UserMenu.defaultProps = defaultUserMenuProps;

StackedNav.displayName = 'StackedNav';

export default StackedNav;
