import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import queryString from 'query-string';
import { Form, FormGroup, FormRow, FormLabel, FormInput, FormSubmit, FormTextInput } from 'makes-apps';
import { passwordValidator, urls } from '../../utils';
import { AppState, VerifiedTokenData, resetPassword } from '../../state';

interface StateProps {
  search: string;
}

interface DispatchProps {
  gotoWelcome: () => void;
  resetPassword: (data: VerifiedTokenData) => Promise<void>;
}

type Props = StateProps & DispatchProps;

const initialForm = { password: '', confirmPassword: '' };

const handleValidate = (name: string, value: string, values: typeof initialForm) => {
  switch (name) {
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

class ResetPassword extends React.Component<Props> {
  ['parseTokenData'] = () => {
    const { token, tokenId } = queryString.parse(this.props.search);
    return { token: token as string, tokenId: tokenId as string };
  };

  render() {
    return (
      <div className="login">
        <Form
          compact
          initialForm={initialForm}
          onValidate={handleValidate}
          onSubmit={({ data: { password }, setSubmitting, resetForm }) => {
            const { gotoWelcome, resetPassword } = this.props;

            setSubmitting(true);
            resetPassword({ password, ...this.parseTokenData() })
              .then(gotoWelcome)
              .catch(() => {
                resetForm();
                setSubmitting();
              });
          }}
        >
          {({ data, errors, submitting, handleInputBlur, handleInputChange }) => (
            <>
              <FormGroup title="reset password">
                <FormRow first>
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
      </div>
    );
  }
}

const mapStateToProps = ({ router }: AppState) => ({
  search: router.location.search,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoWelcome: () => dispatch(push(urls.welcome())),
  resetPassword: (data: VerifiedTokenData) => dispatch<any>(resetPassword.action(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
