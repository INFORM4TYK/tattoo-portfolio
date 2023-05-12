import { FormElement } from "../utils/FormInput";
import styles from "./Contact.module.scss";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Tiktok from "../../images/tiktok.svg";
import Phone from "../../images/phone.svg";
const Contact = () => {
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errormessage: "To pole jest wymagane",
      label: "Imię",
      required: true,
      maxLength: "50",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      errormessage: "Wpisz poprawny numer",
      label: "Numer telefonu",
      pattern: "^[0-9]+$",
      required: true,
      maxLength: 9,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      errormessage: "Wpisz poprawny email",
      label: "Email",
      required: true,
      maxLength: "50",
    },
    {
      id: 4,
      name: "subject",
      type: "text",
      errormessage: "To pole jest wymagane",
      label: "Tytuł",
      maxLength: "50",
    },
    {
      id: 5,
      name: "message",
      errormessage: "To pole jest wymagane",
      label: "Twoja wiadomość",
      required: true,
      maxLength: "1000",
      as: "textarea",
    },
  ];
  const [error, setError] = useState(false);
  const onClick = () => {
    setError(true);
  };
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = async (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    const hasEmptyInput = inputs.some((input) => {
      return input.required && !form[input.id].value;
    });
    if (hasEmptyInput) {
      setError(true);
      return;
    } else if (ok) {
      setError(false);
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    let hasError = false;
    for (let [name, value] of formData.entries()) {
      const input = inputs.find((input) => input.name === name);
      data[name] = value;
      if (input.pattern && !new RegExp(input.pattern).test(value)) {
        hasError = true;
      } else if (input.required && !value) {
        hasError = true;
      } else {
        input.errormessage = "";
      }
    }
    if (!hasError) {
      setServerState({ submitting: true });

      axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
        data: formData,
      })
        .then((r) => {
          handleServerResponse(true, "Dziękuje za wiadomość!", form);
          setError(false);
          hasError = false;
          form.reset();
        })
        .catch((r) => {
          handleServerResponse(false, r.response.data.error, form);
          setError(true);
        });
    } else {
      handleServerResponse(false, "Proszę uzupełnić wymagane pola", form);
    }
  };
  const disable = (e) => {
    setTimeout(() => {
      if (error === true) {
        disable(e);
      }
    }, 2000);
  };
  return (
    <div id="contact" className={styles.container}>
    
      <section className={styles.secForm}>
        <h1>Skontaktuj się ze mną</h1>
        <form
          noValidate
          onSubmit={handleOnSubmit}
          className={styles.form}
          method="POST"
        >
          {inputs.map((input) => {
            return (
              <FormElement
                onInvalid={(e) => e.preventDefault()}
                key={input.id}
                {...input}
                className={styles.input}
                error={error}
                focused={error}
              />
            );
          })}
          <div>
            <button type="submit" disabled={disable()} onClick={onClick}>
             Wyślij
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </div>
        </form>
      </section>
      <section className={styles.secContact}>
        
      <div>
          <Link href="tel:516598487" target="_blank">
            <Image src={Phone} alt="telefon" />
          <p>516 598 487</p>
          </Link>
        </div>
        <div>
          {" "}
          <Link
            href="https://www.facebook.com/wiktoria.woznicka.52"
            target="_blank"
          >
            <Image src={Facebook} alt="facebook" />
          <p>Facebook</p>
          </Link>
        </div>
        <div>
          <Link
            href="https://www.instagram.com/victoriu.tattoo/"
            target="_blank"
          >
            <Image src={Instagram} alt="instagram" />
          <p>Instagram</p>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank">
            <Image src={Tiktok} alt="tiktok" />
          <p>TikTok</p>
          </Link>
        </div>
        
      </section>
    </div>
  );
};

export default Contact;
