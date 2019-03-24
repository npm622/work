import React from 'react';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  onToggle: (e: any) => void;
}

class DropdownToggle extends React.Component<Props> {
  render() {
    const { children, className, onToggle } = this.props;
    if (React.isValidElement(children)) {
      return React.cloneElement<any>(children, {
        className: classNames('dropdown-toggle', className),
        onClick: onToggle,
      });
    }
    return null;
  }
}

export default DropdownToggle;
