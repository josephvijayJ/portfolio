import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="headings">CONTACT</h1>
        <form action="" className="form">
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Enter your email"
          />
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            placeholder="Enter your Message"
          ></textarea>
          <input type="submit" value="SEND" id="send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
