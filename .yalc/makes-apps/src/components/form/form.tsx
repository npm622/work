import React from 'react';
import classNames from 'classnames';
import { Classer } from '../utils';

type FormStrings<T extends {}, K extends keyof T> = Partial<{ [key in K]: string }>;
type FormBooleans<T extends {}, K extends keyof T> = Partial<{ [key in K]: boolean }>;

type RenderApi<T extends {}> = ReturnType<Form<T>['renderApi']>;
type SubmitApi<T extends {}> = ReturnType<Form<T>['submitApi']>;

type FieldCleanChecker<T extends {}, K extends keyof T> = (value: T[K], clean: T[K]) => boolean;
type FieldValidChecker<T extends {}, K extends keyof T> = (
  value: T[K],
  data: T
) => undefined | FormStrings<T, K> | Promise<FormStrings<T, K>>;

interface Validator<T extends {}, K extends keyof T> {
  isClean?: FieldCleanChecker<T, K>;
  isValid?: FieldValidChecker<T, K>;
}

type ValidationSchema<T extends {}> = { [key in keyof T]: Validator<T, key> };

type ChildElement = React.ReactElement<{ className?: string }>;

interface Props<T extends {}> {
  initialForm: T;
  onSubmit?: (api: SubmitApi<T>) => void | Promise<void>;
  validation?: ValidationSchema<T>;
  children: (api: RenderApi<T>) => ChildElement | ChildElement[];
  rootClass: string;
}

interface State<T extends {}> {
  status: {
    pristine: boolean;
    submitting: boolean;
  };
  clean: T;
  data: T;
  dirty: FormBooleans<T, keyof T>;
  errors: FormStrings<T, keyof T>;
  touched: FormBooleans<T, keyof T>;
}

const checkIsClean = <T extends {}, K extends keyof T>(
  key: K,
  value: T[K],
  clean: T,
  validation?: ValidationSchema<T>
) => {
  let isClean = (v: T[K], c: T[K]) => v === c;
  if (validation) {
    const validator = validation[key];
    if (validator && validator.isClean) {
      isClean = validator.isClean;
    }
  }
  return isClean(value, clean[key]);
};

const getInitialForm = <T extends {}>({ initialForm }: Props<T>) => initialForm;

class Form<T extends {}> extends React.Component<Props<T>, State<T>> {
  static defaultProps = {
    rootClass: 'form',
  };

  readonly state: State<T> = {
    status: {
      pristine: true,
      submitting: false,
    },
    clean: getInitialForm(this.props),
    data: getInitialForm(this.props),
    dirty: {},
    errors: {},
    touched: {},
  };

  constructor(props: Props<T>) {
    super(props);
  }

  ['submitApi'] = () => {
    return {
      data: this.state.data,
      reset: this.reset,
    };
  };

  ['renderApi'] = (classer: Classer) => {
    const { status, data, dirty, errors, touched } = this.state;

    return {
      classer,
      status,
      data,
      dirty,
      errors,
      touched,
      reset: this.reset,
      setFormKey: this.setFormKey,
      setFormData: this.setFormData,
      validateForm: this.validateForm,
      submittable: !status.pristine && Object.values(errors).filter(e => !!e).length === 0,
    };
  };

  ['reset'] = (data = this.state.clean) => {
    this.setState(() => ({ clean: data, data, dirty: {}, errors: {}, touched: {} }));
  };

  ['submit'] = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { onSubmit = () => {} } = this.props;

    this.setState(
      ({ status }) => ({ status: { ...status, submitting: true } }),
      () =>
        Promise.resolve(onSubmit(this.submitApi())).then(() =>
          this.setState(({ status }) => ({ status: { ...status, submitting: false } }))
        )
    );
  };

  ['setFormKey'] = <K extends keyof T>(key: K, value: T[K]) => {
    const { validation } = this.props;
    const { clean } = this.state;

    this.setState(state => ({
      ...state,
      status: { ...state.status, pristine: false },
      data: { ...state.data, [key]: value },
      dirty: { ...state.dirty, [key]: !checkIsClean(key, value, clean, validation) },
      errors: { ...state.errors, [key]: '' },
      touched: { ...state.errors, [key]: true },
    }));
  };

  ['setFormData'] = (newData: Partial<T>) => {
    const { validation } = this.props;
    const { clean } = this.state;

    const dirty = Object.keys(newData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: !checkIsClean(key as keyof T, (newData as any)[key], clean, validation),
      }),
      { ...this.state.dirty }
    );

    const errors = Object.keys(newData).reduce((acc, key) => ({ ...acc, [key]: '' }), { ...this.state.errors });

    const touched = Object.keys(newData).reduce((acc, key) => ({ ...acc, [key]: true }), { ...this.state.touched });

    this.setState(state => ({
      ...state,
      status: { ...state.status, pristine: Object.values(dirty).every(d => !d) },
      data: { ...state.data, ...newData },
      dirty,
      errors,
      touched,
    }));
  };

  ['validateForm'] = (key: keyof T) => {
    const { validation } = this.props;
    const { data } = this.state;

    if (validation) {
      const validator = validation[key];
      if (validator && validator.isValid) {
        const response = validator.isValid(data[key], data);
        if (response) {
          Promise.resolve(response).then(newErrors => {
            if (Object.keys(newErrors).length > 0) {
              this.setState(state => ({ errors: { ...state.errors, ...newErrors } }));
            }
          });
        }
      }
    }
  };

  /*
  when debugging why the form looks funny, don't forget you removed a top level wrapper here

  --    <div class=`${rootClass}-layout` />    --
   */
  render() {
    const { children, rootClass } = this.props;

    const classer = new Classer(rootClass);
    return (
      <form className={classer.name()} onSubmit={this.submit}>
        {React.Children.map(children(this.renderApi(classer)), child =>
          React.cloneElement(child, { className: classNames(child.props.className, classer.name('child')) })
        )}
      </form>
    );
  }
}

export default Form;
