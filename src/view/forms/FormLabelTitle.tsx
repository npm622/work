import React from 'react';
import classNames from 'classnames';

interface Props {
  children: string;
  className?: string;
  id?: string;
}

const FormLabelTitle = ({ children: child, className, id }: Props) => {
  const props = {} as { [key: string]: string };

  if (id) {
    props['htmlFor'] = id;
  }

  return (
    <label {...props} className={classNames('form-label-title', className)}>
      {child}
    </label>
  );
};

export default FormLabelTitle;
