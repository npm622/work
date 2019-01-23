import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
}

class Links extends React.Component<Props> {
  render() {
    const { className, children } = this.props;
    return (
      <div className={classNames('links', className)}>
        {React.Children.map(children, child => {
          if (typeof child === 'string' || typeof child === 'number') {
            child;
            return;
          }
          return React.cloneElement(child, { className: 'links-item' });
        })}
      </div>
    );
  }
}

export default Links;
