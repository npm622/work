import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { emailValidator, urls } from '../../utils';
import { resendConfirmationEmail } from '../../state';
import { Form, FormGroup, FormRow, FormLabel, FormInput, FormSubmit, FormTextInput } from '..';

interface DispatchProps {
  gotoWaitingRoom: () => void;
  resendConfirmationEmail: (email: string) => Promise<void>;
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

class ConfirmationEmail extends React.Component<Props> {
  render() {
    const { gotoWaitingRoom, resendConfirmationEmail } = this.props;
    return (
      <div className="confirmation-email">
        <Form
          compact
          initialForm={initialForm}
          onValidate={handleValidate}
          onSubmit={({ data, setSubmitting }) => {
            setSubmitting(true);
            resendConfirmationEmail(data.email)
              .then(gotoWaitingRoom)
              .catch(() => setSubmitting());
          }}
        >
          {({ data, errors, submitting, handleInputBlur, handleInputChange }) => (
            <>
              <FormGroup title="confirm email">
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
  gotoWaitingRoom: () => dispatch(push(urls.waitingRoom().confirmationEmail())),
  resendConfirmationEmail: (email: string) => dispatch<any>(resendConfirmationEmail.action(email)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(ConfirmationEmail);
