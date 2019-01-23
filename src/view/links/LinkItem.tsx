import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  className?: string;
  pretext?: string;
  text: string;
  to: string;
}

class LinkItem extends React.Component<Props> {
  render() {
    const { className, pretext, text, to } = this.props;
    return (
      <p className={classNames(className)}>
        {pretext && `${pretext} `}
        <Link className="links-link" to={to}>
          {text}
        </Link>
      </p>
    );
  }
}

export default LinkItem;
