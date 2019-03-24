import React from 'react';
import classNames from 'classnames';
import { Classer } from '../utils';

const defaultProps = {
  className: ''
};
type Props = {
  classer: Classer;
  header: string | React.ReactElement<{ className?: string }>;
  children: React.ReactNode;
} & typeof defaultProps;

const FormSection = ({ children, className, classer: parentClasser, header }: Props) => {
  const classer = parentClasser.new('section');
  return (
    <section className={classNames(className, classer.name())}>
      {typeof header === 'string' ? (
        <h2 className={classer.name('header')}>{header}</h2>
      ) : (
        React.cloneElement(header, { className: classNames(header.props.className, classer.name('header')) })
      )}
      <div className={classer.name('content')}>
        {React.Children.map(children, child => {
          if (React.isValidElement<{ className?: string }>(child)) {
            return React.cloneElement(child, {
              className: classNames(child.props.className, classer.name('content-child')),
            });
          }
          return null;
        })}
      </div>
    </section>
  );
};

FormSection.defaultProps = defaultProps;

export default FormSection;
