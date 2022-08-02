import React, { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const validateEmail = (email) => {
    var regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleValidate = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`Your ${event.target.name} is a required field.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({ name: "", email: "", message: "" });
    
    console.log(name);

    // window.alert("Message submitted. Thank you!");
    // send(
    //   REACT_APP_EMAILJS_SERVICE_ID,
    //   REACT_APP_EMAILJS_TEMPLATE_ID,
    //   formState,
    //   REACT_APP_EMAILJS_USER_ID
    // )
    //   .then((response) => {
    //     window.alert("Message submitted. Thank you!")
    //   })
    //   .catch(err => {
    //     window.alert("Something went wrong, please see contact details on resume!")
    //     console.log(err);
    //   });
  };

  return (
    <section className="container pt-4">
      <h1 className="text-center">Contact Form</h1>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="d-flex flex-column m-auto w-50"
      >
        <div>
          <label className="p-1" htmlFor="name">
            Name:
          </label>
          <input
            className="w-100"
            name="name"
            defaultValue={name}
            onBlur={handleValidate}
          />
        </div>
        <div>
          <label className="p-1" htmlFor="email">
            Email:
          </label>
          <input
            className="w-100"
            name="email"
            defaultValue={email}
            onBlur={handleValidate}
          />
        </div>
        <div>
          <label className="p-1" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-100"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleValidate}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="mt-2 btn btn-dark col-2" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
