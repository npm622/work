import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: never;
  className?: string;
  id: string;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class FormTextInput extends React.Component<Props> {
  static defaultProps = {
    type: 'text',
  };

  render() {
    const { className, id, name, type, placeholder, value, onBlur, onChange } = this.props;
    return (
      <input
        className={classNames(className)}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  }
}

export default FormTextInput;
