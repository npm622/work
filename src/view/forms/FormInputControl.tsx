import React from 'react';
import classNames from 'classnames';

interface Props {
  children: React.ReactElement<any>;
  className?: string;
}

const FormInputControl = ({ children: child, className }: Props) =>
  React.cloneElement(child, { className: classNames('form-input-control', className) });

export default FormInputControl;
