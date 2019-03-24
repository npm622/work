import React from 'react';
import { Link } from 'react-router-dom';
import { Classer } from '../../components/utils';

interface Props {
  classer: Classer;
  to: string;
}

const StackedLogo: React.FC<Props> = ({ children, classer: parentClasser, to }) => (
  <Link to={to} className={parentClasser.name('logo')}>
    {children}
  </Link>
);

export default StackedLogo;
