import React from 'react';
import classNames from 'classnames';
import { hasChildrenFunc, hasRenderFunc } from '../../utils';

type FormRenderApi<T> = ReturnType<Form<T>['renderApi']>;
type FormSubmitApi<T> = ReturnType<Form<T>['submitApi']>;

type RenderProps<T> =
  | { children: (api: FormRenderApi<T>) => React.ReactNode }
  | { render: (api: FormRenderApi<T>) => React.ReactNode };

type Props<T> = {
  className?: string;
  header?: string;
  subheader?: string;
  compact?: boolean;
  initialForm: T;
  onSubmit?: (props: FormSubmitApi<T>) => void;
  onValidate?: (name: keyof T, value: any, values: T) => Promise<string | void>;
} & RenderProps<T>;

type StateFormDirty<T> = Partial<{ [key in keyof T]: boolean }>;
type StateFormErrors<T> = Partial<{ [key in keyof T]: string }>;

interface State<T> {
  submitting: boolean;
  form: {
    data: T;
    dirty: StateFormDirty<T>;
    errors: StateFormErrors<T>;
  };
}

class Form<T> extends React.Component<Props<T>, State<T>> {
  readonly state: State<T> = {
    submitting: false,
    form: {
      data: this.props.initialForm,
      dirty: {} as StateFormDirty<T>,
      errors: {} as StateFormErrors<T>,
    },
  };

  ['renderApi'] = () => ({
    data: this.state.form.data,
    dirty: this.state.form.dirty,
    errors: this.state.form.errors,
    submitting: this.state.submitting,
    handleInputBlur: this.handleInputBlur,
    handleInputChange: this.handleInputChange,
  });

  ['submitApi'] = () => ({
    data: this.state.form.data,
    resetForm: this.resetForm,
    setSubmitting: this.setSubmitting,
  });

  ['handleInputBlur'] = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = parseInput<T>(e);

    const { onValidate = () => Promise.resolve() } = this.props;
    const { form } = this.state;

    onValidate(name, value, form.data).catch(err =>
      this.setFormState({}, {} as StateFormDirty<T>, { [name]: err.message } as StateFormErrors<T>)
    );
  };

  ['handleInputChange'] = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = parseInput<T>(e);
    this.setFormState(
      { [name]: value } as Partial<T>,
      { [name]: true } as StateFormDirty<T>,
      { [name]: '' } as StateFormErrors<T>
    );
  };

  ['handleSubmit'] = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { onSubmit = () => {} } = this.props;

    onSubmit(this.submitApi());
  };

  ['setFormState'] = (data = {} as Partial<T>, dirty = {} as StateFormDirty<T>, errors = {} as StateFormErrors<T>) => {
    this.setState(({ form }: State<T>) => ({
      form: {
        data: { ...form.data, ...data },
        dirty: { ...form.dirty, ...dirty },
        errors: { ...form.errors, ...errors },
      },
    }));
  };

  ['resetForm'] = (
    newData = {} as Partial<T>,
    newDirty = {} as StateFormDirty<T>,
    newErrors = {} as StateFormErrors<T>
  ) =>
    this.setState(({ form }: State<T>) => ({
      form: {
        data: { ...form.data, ...newData },
        dirty: { ...newDirty },
        errors: { ...newErrors },
      },
    }));

  ['setSubmitting'] = (submitting?: boolean) => this.setState(() => ({ submitting: !!submitting }));

  render() {
    const { className, header, subheader, compact } = this.props;
    return (
      <>
        {header && <h1 className="form-header">{header}</h1>}
        {subheader && <h2 className="form-subheader">{subheader}</h2>}
        <form className={classNames('form', className, { 'form-compact': compact })} onSubmit={this.handleSubmit}>
          <this.renderChildren />
        </form>
      </>
    );
  }

  ['renderChildren'] = () => (
    <>
      {hasChildrenFunc(this.props) && this.props.children(this.renderApi())}
      {hasRenderFunc(this.props) && this.props.render(this.renderApi())}
    </>
  );
}

const parseInput = <T extends {}>(e: React.ChangeEvent<HTMLInputElement>): { name: keyof T; value: any } => {
  const { target } = e;

  const name = target.name as keyof T;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  return { name, value };
};

export default Form;
