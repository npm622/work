import React from 'react';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const FormGroup = ({ children, className, title }: Props) => (
  <fieldset className={classNames('form-group', className)}>
    {title && <legend className="form-group-title">{title}</legend>}
    {children}
  </fieldset>
);

export default FormGroup;
