import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  gotoLogin: () => void;
}

const defaultState = {
  listVisible: false,
};

type State = typeof defaultState;

class UserMenu extends React.Component<Props, State> {
  state: State = defaultState;
  dropdownMenu: HTMLDivElement | null = null;

  showList = (e: any) => {
    e.preventDefault();
    this.setState(
      () => ({ listVisible: true }),
      () => {
        document.addEventListener('click', this.closeList);
      }
    );
  };

  closeList = (e: any) => {
    if (this.dropdownMenu && !this.dropdownMenu.contains(e.target)) {
      this.setState(
        () => ({ listVisible: false }),
        () => {
          document.removeEventListener('click', this.closeList);
        }
      );
    }
  };

  render() {
    const { gotoLogin } = this.props;
    const { listVisible } = this.state;
    return (
      <div className="app-header-user-menu">
        <div className="app-header-user-menu-icon" onClick={this.showList}>
          <FontAwesomeIcon icon="user-circle" size="2x" />
          <FontAwesomeIcon icon="caret-down" />
        </div>
        {listVisible && (
          <div
            className="app-header-user-menu-list"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button className="app-header-user-menu-link" onClick={gotoLogin}>login</button>
          </div>
        )}
      </div>
    );
  }
}

export default UserMenu;
