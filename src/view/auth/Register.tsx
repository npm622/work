import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { Form, FormGroup, FormRow, FormLabel, FormInput, FormSubmit, FormTextInput } from 'makes-apps';
import { emailValidator, passwordValidator, urls } from '../../utils';
import { EmailPassword, register } from '../../state';
import { Links, LinkItem } from '..';

interface DispatchProps {
  gotoWaitingRoom: () => void;
  gotoLogin: () => void;
  register: (creds: EmailPassword) => Promise<void>;
}

type Props = DispatchProps;

const initialForm = { email: '', password: '', confirmPassword: '' };

const handleValidate = (name: string, value: string, values: typeof initialForm) => {
  switch (name) {
    case 'email':
      return emailValidator.validate(value);
    case 'password':
      return passwordValidator.validate(value);
    case 'confirmPassword':
      if (value !== values.password) {
        return Promise.reject(new Error('must specify the same password'));
      }
      return passwordValidator.validate(value);
  }
  return Promise.resolve();
};

class Register extends React.Component<Props> {
  render() {
    const { gotoWaitingRoom, gotoLogin, register } = this.props;
    return (
      <div className="login">
        <Form
          compact
          initialForm={initialForm}
          onValidate={handleValidate}
          onSubmit={({ data, setSubmitting, resetForm }) => {
            setSubmitting(true);
            register(data)
              .then(gotoWaitingRoom)
              .catch(err => {
                const { message: errMsg } = err;

                if (errMsg.includes('name already in use')) {
                  gotoLogin();
                  return;
                }

                resetForm();
                setSubmitting();
              });
          }}
        >
          {({ data, errors, submitting, handleInputBlur, handleInputChange }) => (
            <>
              <FormGroup title="register">
                <FormRow first>
                  <FormLabel id="email" title="email" />
                  <FormInput error={errors.email}>
                    <FormTextInput
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abigail@gmail.com"
                      value={data.email}
                      onBlur={handleInputBlur}
                      onChange={handleInputChange}
                    />
                  </FormInput>
                </FormRow>
                <FormRow>
                  <FormLabel id="password" title="password" />
                  <FormInput error={errors.password}>
                    <FormTextInput
                      type="password"
                      id="password"
                      name="password"
                      placeholder="enter your password here"
                      value={data.password}
                      onBlur={handleInputBlur}
                      onChange={handleInputChange}
                    />
                  </FormInput>
                </FormRow>
                <FormRow>
                  <FormLabel id="confirmPassword" title="confirm password" />
                  <FormInput error={errors.confirmPassword}>
                    <FormTextInput
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="enter your password here"
                      value={data.confirmPassword}
                      onBlur={handleInputBlur}
                      onChange={handleInputChange}
                    />
                  </FormInput>
                </FormRow>
              </FormGroup>
              <FormSubmit submitting={submitting} data={data} errors={errors} />
            </>
          )}
        </Form>
        <Links>
          <LinkItem text="login here" to={urls.login()} />
          <LinkItem text="resend confirmation" to={urls.confirmationEmail()} />
        </Links>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoLogin: () => dispatch(push(urls.login())),
  gotoWaitingRoom: () => dispatch(push(urls.waitingRoom().confirmationEmail())),
  register: (creds: EmailPassword) => dispatch<any>(register.action(creds)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Register);
