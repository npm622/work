import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { Form, FormGroup, FormRow, FormLabel, FormInput, FormSubmit, FormTextInput } from 'makes-apps';
import { emailValidator, passwordValidator, urls } from '../../utils';
import { EmailPassword, login } from '../../state';
import { Links, LinkItem } from '..';

interface DispatchProps {
  gotoHome: () => void;
  gotoWaitingRoom: () => void;
  login: (creds: EmailPassword) => Promise<void>;
}

type Props = DispatchProps;

const initialForm = { email: '', password: '' };

const handleValidate = (name: string, value: string) => {
  switch (name) {
    case 'email':
      return emailValidator.validate(value);
    case 'password':
      return passwordValidator.validate(value);
  }
  return Promise.resolve();
};

class Login extends React.Component<Props> {
  render() {
    const { gotoHome, gotoWaitingRoom, login } = this.props;
    return (
      <div className="login">
        <Form
          compact
          initialForm={initialForm}
          onValidate={handleValidate}
          onSubmit={({ data, setSubmitting, resetForm }) => {
            setSubmitting(true);
            login(data)
              .then(gotoHome)
              .catch(err => {
                const { message: errMsg } = err;

                if (errMsg.includes('confirmation required')) {
                  gotoWaitingRoom();
                  return;
                }

                if (errMsg.includes('invalid username/password')) {
                  resetForm({ password: '' });
                } else {
                  resetForm();
                }
                setSubmitting();
              });
          }}
        >
          {({ data, errors, submitting, handleInputBlur, handleInputChange }) => (
            <>
              <FormGroup title="login">
                <FormRow first>
                  <FormLabel id="email" title="email" />
                  <FormInput error={errors.email}>
                    <FormTextInput
                      type="email"
                      id="email"
                      name="email"
                      placeholder="liam@gmail.com"
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
              </FormGroup>
              <FormSubmit submitting={submitting} data={data} errors={errors} />
            </>
          )}
        </Form>
        <Links>
          <LinkItem text="register here" to={urls.register()} />
          <LinkItem text="reset password" to={urls.passwordResetEmail()} />
          <LinkItem text="resend confirmation" to={urls.confirmationEmail()} />
        </Links>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoHome: () => dispatch(push(urls.home())),
  gotoWaitingRoom: () => dispatch(push(urls.waitingRoom().confirmationEmail())),
  login: (creds: EmailPassword) => dispatch<any>(login.action(creds)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login);
