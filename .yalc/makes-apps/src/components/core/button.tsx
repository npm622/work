import React from 'react';

const defaultProps = {
  className: 'btn',
};
type Props = {
  children: React.ReactNode;
} & typeof defaultProps;

const Button = ({ children, className }: Props) => <button className={className}>{children}</button>;

Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export default Button;
