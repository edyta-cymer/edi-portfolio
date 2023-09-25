import React from "react";
import phototwo from "../photos/DSC_5661b.jpeg";
import emailjs from "@emailjs/browser";

import EmailIcon from "@mui/icons-material/Email";
import { useRef } from "react";
const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wyy7u8",
        "template_8lt98zm",
        form.current,
        "VXLQ1xs4e6WL8_N_I"
      )
      .then(
        (result) => {
          alert("Wysłano!");
        },
        (error) => {
          alert("Coś poszło nie tak 🥲. Spróbuj ponownie!");
        }
      );
    e.target.reset();
  };

  return (
    <section className="section-cta" id="getintouch">
      <div className="cta">
        <img src={phototwo} alt="profile " className="photo-two"></img>

        <div className="text-box">
          <h3> Say Hello 📨 </h3>
          <form ref={form} onSubmit={sendEmail} className="cta-form" action="#">
            <div>
              <label for="full name"></label>
              <input
                id="full name"
                type="text"
                placeholder="Enter your name"
                name="user_name"
                required
              ></input>
            </div>

            <div>
              <label for="email"></label>
              <input
                id="email"
                type="email"
                placeholder="Enter your e-mail"
                name="user_email"
                required
              ></input>
            </div>
            <label for="message"></label>
            <input
              id="message"
              placeholder="Enter your message..."
              className="message"
              required
              name="message"
            ></input>

            <button className="btn-form" type="submit">
              Get in Touch <EmailIcon fontSize="large" />{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
