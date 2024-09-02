import './Contact.css';
import LinkedIn from './linkedin.png';
import GitHub from './github.png';
import Resume from './resume.png';
import emailjs from "@emailjs/browser";
import React, { useRef, useEffect, useState } from "react";
import Resume2 from './Fall2024Resume.pdf';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_e0whgtk";
    const templateId = "template_h8n0ajw";

    emailjs
    .sendForm(serviceId, templateId, form.current, {
      publicKey: 'wksmAgc6viijdQQok',
    })
    .then(
      () => {
        alert("Email sent successfully. I will get back to you as soon as possible!");
        window.location.reload();
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <div className='contactMe'>
    <h1 className='contactHeader'>Contact Me</h1>
    <div className='contactArea'>
      <div className='contactFormContainer'>
        <form ref={form} className='contactForm' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows='4' required></textarea>

          <button type='submit'>Send</button>
      </form>
    </div>
  <div className='logosContainer'>
    <div className='logoContainer'>
      <a href={Resume2} className="appLogo">
        Take a look at my resume! <img src={Resume} alt="Resume" />
      </a>
    </div>
    <div className='logoContainer'>
      <a href="https://www.linkedin.com/in/zachary-girouard-85832525a/" className="appLogo">
        Connect with me on LinkedIn! <img src={LinkedIn} alt="Linkedin" />
      </a>
    </div>
    <div className='logoContainer'>
      <a href="https://github.com/ZGirouard" className="appLogo">
        Check out my GitHub! <img src={GitHub} alt="GitHub" />
      </a>
    </div>
  </div>
</div>
</div>
);
}

export default Contact;
