import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact-banner">contact me</h1>
        <div className="contact-form">
          <input type="email" placeholder="liam@example.com" size={50} />
          <textarea className="contact-form-message" rows={5} cols={50} placeholder="Let's talk!" />
          <button className="contact-form-send">send</button>
        </div>
      </div>
    );
  }
}

export default Contact;
