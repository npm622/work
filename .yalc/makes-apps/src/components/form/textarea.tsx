import React from 'react';

const defaultProps = {
  className: 'textarea-input',
  rows: 5,
  onBlur: (_value: string) => {},
};
type Props = {
  placeholder?: string;
  onChange: (v: string) => void;
} & typeof defaultProps;

const TextareaInput = ({ onChange, onBlur, ...rest }: Props) => {
  return <textarea {...rest} onChange={e => onChange(e.target.value)} onBlur={e => onBlur(e.target.value)} />;
};

TextareaInput.defaultProps = defaultProps;

export default TextareaInput;
