// TODO: Add a 'click to copy' function on top of the email address
// TODO: Add a tooltip to indicate the function above
// TODO: Add Twitter to social medias
// TODO: Disable button after sending email

import React, { ReactElement, useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import styles from '../styles/components/ContactSection.module.scss';

import Button from './Button';
import SectionHeader from './SectionHeader';

interface Props {
  setContactRef: (arg0: any) => void;
}

function ContactSection({ setContactRef }: Props): ReactElement {
  const contactRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function textAreaAdjust({ target }) {
    target.style.height = '1px';
    target.style.height = 16 + target.scrollHeight + 'px';
  }

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        'template_web6r4l',
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
      )
      .then(
        () => {
          alert(
            'Thank you! Your message was sent and will be replied shortly.'
          );
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          alert(
            'Unfortunately there was an unexpected error. Please try again later or write directly to the provided email on the site footer.'
          );
          setIsSubmitting(false);
        }
      );
  }

  useEffect(() => {
    setContactRef(contactRef);
  }, [contactRef]);

  return (
    <div ref={contactRef} className={styles.container}>
      <SectionHeader title="Contact" align="center" />

      <div className={styles.content}>
        {/* <form onSubmit={sendEmail} className={styles.form} autoComplete="on">
          <p className={styles.formIntro}>
            Leave a message and I'll get back to you as soon as I can.
          </p>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={styles.form__field}
              placeholder="Name"
              name="name"
              id="name"
              autoComplete="name"
              required
            />
            <label htmlFor="name" className={styles.form__label}>
              Name
            </label>
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="email"
              className={styles.form__field}
              placeholder="E-mail"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
            <label htmlFor="email" className={styles.form__label}>
              E-mail
            </label>
          </div>

          <div className={styles.inputWrapper}>
            <textarea
              onKeyDown={textAreaAdjust}
              className={styles.form__field}
              placeholder="Type here your message"
              name="message"
              id="message"
              required
            />
            <label htmlFor="message" className={styles.form__label}>
              Message
            </label>
          </div>

          <Button
            text="Send"
            type="submit"
            isPrimary
            disabled={isSubmitting}
          ></Button>
        </form> */}

        <div className={styles.linksContainer}>
          {/* <h2 className={`${styles.separator} ${styles.first}`}>
            You can also
          </h2> */}
          <div className={styles.emailWrapper}>
            <p>Write me an e-mail at:</p>
            <h1>pedro.klepa+contact@gmail.com</h1>
          </div>

          <h2 className={styles.separator}>Or</h2>

          <div className={styles.socialMediaContainer}>
            <p>Reach me through social media:</p>

            <div>
              <a
                href="https://github.com/pklepa"
                rel="noreferrer"
                target="_blank"
                className={styles.iconWrapper}
              >
                <img src="/icons/icon_github.svg" alt="Github" />
                <img
                  className={styles.colorfulIcon}
                  src="/icons/icon_githubWhite.svg"
                  alt="Github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-klepa/"
                rel="noreferrer"
                target="_blank"
                className={styles.iconWrapper}
              >
                <img src="/icons/icon_linkedin.svg" alt="Linkedin" />
                <img
                  className={styles.colorfulIcon}
                  src="/icons/icon_linkedinColor.svg"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
