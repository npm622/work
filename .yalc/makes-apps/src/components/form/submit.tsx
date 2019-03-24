import React from 'react';

const defaultProps = {
  className: 'form-submit',
  display: 'submit',
};
type Props = {
  submittable: boolean;
} & typeof defaultProps;

const FormSubmit = ({ className, display, submittable }: Props) => {
  return (
    <button className={className} type="submit" disabled={!submittable}>
      {display}
    </button>
  );
};

FormSubmit.defaultProps = defaultProps;

export default FormSubmit;
