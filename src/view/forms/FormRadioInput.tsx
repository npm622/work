import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: never;
  className?: string;
  name: string;
  options: { id: string; value: string; display: string }[];
  checkedValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class FormRadioInput extends React.Component<Props> {
  render() {
    const { className, options, checkedValue, name, onChange } = this.props;
    return (
      <div className="form-input-radio">
        {options.map(({ id, value, display }) => (
          <label htmlFor={id} className={classNames(className)} key={id}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              checked={checkedValue === value}
              onChange={onChange}
            />
            &nbsp;{display}
          </label>
        ))}
      </div>
    );
  }
}

export default FormRadioInput;
