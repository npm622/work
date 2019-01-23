import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: never;
  className?: string;
  submitting: boolean;
  data: { [key: string]: any };
  errors: { [key: string]: string | undefined };
}

class FormSubmit extends React.Component<Props> {
  render() {
    const { className, submitting, data, errors } = this.props;
    return (
      <button
        type="submit"
        className={classNames('form-submit', className)}
        disabled={
          // form is submitting or...
          submitting ||
          // form is missing some value or...
          Object.keys(data)
            .map(name => data[name])
            .some(value => !value) ||
          // form has an error
          Object.keys(errors)
            .map(name => errors[name])
            .some(error => !!error)
        }
      >
        submit
      </button>
    );
  }
}

export default FormSubmit;
