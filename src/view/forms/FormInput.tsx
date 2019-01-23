import React from 'react';
import classNames from 'classnames';
import { FormInputError } from '.';

interface Props {
  children: React.ReactElement<any>;
  className?: string;
  controlClassName?: string;
  error?: string;
}

const FormInput = ({ children, className, controlClassName, error }: Props) => (
  <div className={classNames('form-input', className, { 'form-input-error': error })}>
    {React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement<any>, {
        className: classNames('form-input-control', controlClassName),
      })
    )}
    <FormInputError error={error} />
  </div>
);

export default FormInput;
