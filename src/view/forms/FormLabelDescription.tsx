import React from 'react';
import classNames from 'classnames';

interface Props {
  children: string;
  className?: string;
}

const FormLabelDescription = ({ children: child, className }: Props) => {
  return <p className={classNames('form-label-description', className)}>{child}</p>;
};

export default FormLabelDescription;
