import React from 'react';
import { Link } from 'react-router-dom';
import { Classer } from '../../components/utils';

const defaultProps = {
  links: {} as { [key: string]: string },
};
type Props = {
  classer: Classer;
} & typeof defaultProps;

const StackedPageLinks = ({ classer: parentClasser, links }: Props) => {
  const classer = parentClasser.new('links');
  return (
    <div className={classer.name()}>
      {Object.entries(links).map(([to, display]) => (
        <Link key={to} to={to} className={classer.name('item')}>
          {display}
        </Link>
      ))}
    </div>
  );
};

StackedPageLinks.defaultProps = defaultProps;

export default StackedPageLinks;
