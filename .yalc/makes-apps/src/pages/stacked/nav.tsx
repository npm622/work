import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Classer } from '../../components/utils';

interface Props {
  classer: Classer;
  links: NavLink[];
}

export type NavLink =
  | { type: 'link'; to: string; display: string }
  | { type: 'button'; onClick: (e: React.MouseEvent<HTMLButtonElement>) => any; display: IconProp; active: boolean };

const navLinkProps = (classer: Classer, key: string, active?: boolean) => ({
  key,
  className: classNames(classer.name('item'), { [classer.name('item-active')]: active }),
});

const NavLinkComponent = (classer: Classer, link: NavLink) =>
  link.type === 'link' ? (
    <Link {...navLinkProps(classer, link.to)} to={link.to}>
      {link.display}
    </Link>
  ) : (
    <button {...navLinkProps(classer, link.display as string, link.active)} onClick={link.onClick}>
      <FontAwesomeIcon icon={link.display} />
    </button>
  );

const StackedPageNav = ({ classer: parentClasser, links }: Props) => {
  const classer = parentClasser.new('nav');
  return <div className={classer.name()}>{links.map(link => NavLinkComponent(classer, link))}</div>;
};

export default StackedPageNav;
