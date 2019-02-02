import React from 'react';
import { Form, FormLabel, FormInput, FormRow, FormSubmit, FormTextArea, FormTextInput } from '..';

class Contact extends React.Component {
  render() {
    return (
      <Form initialForm={{ email: '', subject: '', body: '' }} header="contact me" compact>
        {({
          data,
          errors,
          submitting,
          handleInputBlur,
          handleInputChange,
          handleTextAreaBlur,
          handleTextAreaChange,
        }) => (
          <>
            <FormRow first>
              <FormLabel id="email" title="from" />
              <FormInput>
                <FormTextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="liam@gmail.com"
                  value={data.email}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                />
              </FormInput>
            </FormRow>
            <FormRow>
              <FormLabel id="subject" title="subject" />
              <FormInput>
                <FormTextInput
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={data.subject}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                />
              </FormInput>
            </FormRow>
            <FormRow>
              <FormInput>
                <FormTextArea
                  id="body"
                  name="body"
                  value={data.body}
                  placeholder="What's on your mind?"
                  rows={10}
                  onBlur={handleTextAreaBlur}
                  onChange={handleTextAreaChange}
                />
              </FormInput>
            </FormRow>
            <FormSubmit data={data} errors={errors} submitting={submitting} />
          </>
        )}
      </Form>
    );
  }
}

export default Contact;
