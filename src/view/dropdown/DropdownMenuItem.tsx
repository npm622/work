import React from 'react';
import classNames from 'classnames';

interface Props {
  children: React.ReactElement<any>;
  className?: string;
}

class DropdownMenuItem extends React.Component<Props> {
  render() {
    const { className } = this.props;
    return React.cloneElement(this.props.children, { className: classNames('dropdown-menu-item', className) });
  }
}

export default DropdownMenuItem;
