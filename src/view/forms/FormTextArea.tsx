import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: never;
  className?: string;
  id: string;
  name: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class FormTextArea extends React.Component<Props> {
  render() {
    const { className, id, name, placeholder, rows = 3, value, onBlur, onChange } = this.props;
    return (
      <textarea
        className={classNames(className)}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  }
}

export default FormTextArea;
