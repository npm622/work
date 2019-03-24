import React from 'react';

const defaultProps = {
  className: 'text-input',
  type: 'text' as 'text' | 'email' | 'password',
};
type Props = {
  placeholder?: string;
  defaultValue?: string;
  onChange: (v: string) => void;
  onBlur?: (v: string) => void;
} & typeof defaultProps;

const TextInput = ({ type, onChange, onBlur = () => {}, ...rest }: Props) => {
  return <input {...rest} type={type} onChange={e => onChange(e.target.value)} onBlur={e => onBlur(e.target.value)} />;
};

TextInput.defaultProps = defaultProps;

export default TextInput;
