import React from 'react';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  first?: boolean;
}

const FormRow = ({ children, className, first }: Props) => (
  <div className={classNames('form-row', className, { 'form-row-not-first': !first })}>{children}</div>
);

export default FormRow;
