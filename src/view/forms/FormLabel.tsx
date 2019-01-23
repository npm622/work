import React from 'react';
import classNames from 'classnames';
import { FormLabelTitle, FormLabelDescription } from '.';

interface Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  description?: string;
}

const FormLabel = ({ children, className, id, title, description }: Props) => {
  if (title) {
    children = (
      <>
        <FormLabelTitle id={id}>{title}</FormLabelTitle>
        {description && <FormLabelDescription>{description}</FormLabelDescription>}
      </>
    );
  }
  return <div className={classNames('form-label', className)}>{children}</div>;
};

export default FormLabel;
