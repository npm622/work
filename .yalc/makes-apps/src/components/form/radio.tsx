import React from 'react';

const defaultProps = {
  className: 'radio-input',
};
type Props = {
  name: string;
  options: { [key: string]: string };
  value: string;
  placeholder?: string;
  onChange: (v: keyof Props['options']) => void;
} & typeof defaultProps;

const TextInput = ({ className, name, options, value: checkedValue, onChange }: Props) => {
  return (
    <div>
      {Object.entries(options).map(([key, value]) => (
        <label className={className} key={value}>
          <input
            className={`${className}-option`}
            type="radio"
            name={name}
            value={key}
            checked={key === checkedValue}
            onChange={e => onChange(e.target.value)}
          />
          &nbsp;{value}
        </label>
      ))}
    </div>
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
