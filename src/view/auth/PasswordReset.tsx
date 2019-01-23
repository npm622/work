import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { emailValidator, urls } from '../../utils';
import { sendPasswordResetEmail } from '../../state';
import { Form, FormGroup, FormRow, FormLabel, FormInput, FormSubmit, FormTextInput } from '..';

interface DispatchProps {
  gotoWaitingRoom: () => void;
  sendPasswordResetEmail: (email: string) => Promise<void>;
}

type Props = DispatchProps;

const initialForm = { email: '', password: '' };

const handleValidate = (name: string, value: string) => {
  switch (name) {
    case 'email':
      return emailValidator.validate(value);
  }
  return Promise.resolve();
};

class PasswordReset extends React.Component<Props> {
  render() {
    const { gotoWaitingRoom, sendPasswordResetEmail } = this.props;
    return (
      <div className="password-reset">
        <Form
          compact
          initialForm={initialForm}
          onValidate={handleValidate}
          onSubmit={({ data, setSubmitting }) => {
            setSubmitting(true);
            sendPasswordResetEmail(data.email)
              .then(gotoWaitingRoom)
              .catch(() => setSubmitting());
          }}
        >
          {({ data, errors, submitting, handleInputBlur, handleInputChange }) => (
            <>
              <FormGroup title="reset password">
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
              </FormGroup>
              <FormSubmit submitting={submitting} data={data} errors={errors} />
            </>
          )}
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoWaitingRoom: () => dispatch(push(urls.waitingRoom().passwordResetEmail())),
  sendPasswordResetEmail: (email: string) => dispatch<any>(sendPasswordResetEmail.action(email)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(PasswordReset);
