import React from 'react';
import classNames from 'classnames';

type RenderApi = ReturnType<Dropdown['renderApi']>;

type Props = {
  alignRight?: boolean;
  className?: string;
  menuClassName?: string;
  children: (api: RenderApi) => React.ReactNode;
  renderToggle: (api: RenderApi) => React.ReactNode;
  vertical?: boolean;
};

const State = () => ({
  visible: false,
});

interface State extends ReturnType<typeof State> {}

class Dropdown extends React.Component<Props, State> {
  readonly state = State();

  private menu = null as HTMLElement | null;

  ['open'] = (e: any) => {
    e.preventDefault();
    this.setState(
      () => ({ visible: true }),
      () => {
        document.addEventListener('click', this.close);
      }
    );
  };

  ['close'] = (e: any) => {
    if (this.menu && !this.menu.contains(e.target)) {
      this.setState(
        () => ({ visible: false }),
        () => {
          document.removeEventListener('click', this.close);
        }
      );
    }
  };

  ['renderApi'] = () => ({
    visible: this.state.visible,
    handleToggle: this.open,
  });

  render() {
    const { alignRight, className, menuClassName, children, renderToggle, vertical } = this.props;
    const { visible } = this.state;
    const renderApi = this.renderApi();
    return (
      <div className={classNames('dropdown', className)}>
        {renderToggle(renderApi)}
        {visible && (
          <div
            className={classNames('dropdown-menu', menuClassName, {
              'dropdown-menu-align-right': alignRight,
              'dropdown-menu-vertical': vertical,
            })}
            ref={element => {
              this.menu = element;
            }}
          >
            {children(renderApi)}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
