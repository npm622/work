import React from 'react';
import classNames from 'classnames';
import { Classer } from '../utils';

const defaultProps = {
  className: ''
};
type Props = {
  classer: Classer;
  legend: string;
  children: React.ReactNode;
} & typeof defaultProps;

const FormFieldset = ({ children, className, classer: parentClasser, legend }: Props) => {
  const classer = parentClasser.new('fieldset');
  return (
    <fieldset className={classNames(className, classer.name())}>
      <legend className={classNames(classer.name('legend'), { [classer.name('legend-visible')]: legend })}>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};

FormFieldset.defaultProps = defaultProps;

export default FormFieldset;
