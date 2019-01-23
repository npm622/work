import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  active: string;
  handleClick: () => void;
  icon: 'beer' | 'home' | 'info';
  target: string;
  text: string;
}

const SidebarItem = ({ active, handleClick, icon, target, text }: Props) => {
  return (
    <button
      className={classNames('app-sidebar-item', { 'app-sidebar-item-is-active': active === target })}
      onClick={handleClick}
    >
      <FontAwesomeIcon className="app-sidebar-item-icon" icon={icon} />
      &nbsp;{text}
    </button>
  );
};

export default SidebarItem;
