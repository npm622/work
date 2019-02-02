import React from 'react';
import { SidebarItem } from '.';

interface Props {
  activePath: string;
  gotoAbout: () => void;
  gotoContact: () => void;
  gotoHome: () => void;
}

const Sidebar = ({ activePath, /*gotoAbout, */gotoContact, gotoHome }: Props) => {
  return (
    <div className="app-sidebar">
      <SidebarItem active={activePath} target="home" icon="home" text="Home" handleClick={gotoHome} />
      <SidebarItem active={activePath} target="contact" icon="beer" text="Contact" handleClick={gotoContact} />
    </div>
  );
};

export default Sidebar;
