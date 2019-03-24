import React from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Classer } from '../utils';

const defaultProps = {
  rightAligned: false,
  rootClass: 'menu',
};
type Props = {
  children: (toggle: () => void) => React.ReactNode;
  icon: (showing: boolean) => IconProp;
} & typeof defaultProps;

const initialState = { showing: false };
const toggleShowing = ({ showing }: typeof initialState) => ({ showing: !showing });

const Menu = ({ children, icon, rightAligned, rootClass }: Props) => {
  const [{ showing }, setState] = React.useState(initialState);

  const toggle = () => setState(toggleShowing);

  const classer = new Classer(rootClass);
  return (
    <div className={classer.name()}>
      <button className={classer.name('toggle')} onClick={toggle}>
        <FontAwesomeIcon icon={icon(showing)} fixedWidth size="2x" />
      </button>
      {showing && (
        <div className={classNames(classer.name('contents'), { [classer.name('contents-is-right')]: rightAligned })}>
          {React.Children.map(children(toggle), child => {
            if (React.isValidElement<{ className: string }>(child)) {
              return React.cloneElement(child, { className: classer.name('contents-item') });
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = defaultProps;
Menu.displayName = 'Menu';

export default Menu;
