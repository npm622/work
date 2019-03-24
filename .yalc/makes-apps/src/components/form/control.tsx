import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Classer } from '../utils';

const defaultProps = {
  className: ''
};
type Props = {
  children: React.ReactElement<any>;
  classer: Classer;
  label: string;
  description?: string;
  dirty?: boolean;
  error?: string;
} & typeof defaultProps;

const FormControl = ({ children: child, className, classer: parentClasser, label, description, dirty, error }: Props) => {
  const classer = parentClasser.new('control');
  return (
    <label className={classNames(className, classer.name(), { [classer.name('is-dirty')]: dirty })}>
      <p className={classer.name('label')}>
        <span className={classer.name('label-title')}>{label}</span>&nbsp;
        {description && <FontAwesomeIcon className={classer.name('label-description')} icon="info" title={description} />}
      </p>
      {React.cloneElement(child, {
        className: classNames(child.props.className, classer.name('input'), { [classer.name('input-error')]: error }),
      })}
      <p className={classNames(classer.name('error'), { [classer.name('error-is-visible')]: error })}>{error}</p>
    </label>
  );
};

FormControl.defaultProps = defaultProps;

export default FormControl;
