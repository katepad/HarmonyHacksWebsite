import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import '../styles/Global.css';  
import '../styles/Contact.css';
import Testimonial from "../components/Testimonial.tsx";

const Contact = () => {
  return (
    <>
      <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> Contact Us </h1>
      <Form />
      <Testimonial />
    </>
  );
};

const Form = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result] = useState(null);

  const accessKey = "37a2d8e8-b510-4f39-b7d3-0348970fd5f3";

  const name = watch("name"); //watch for when the name field gets changed

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: name,
      subject: "New Contact Message from your Website",
    },
    onSuccess: () => {;
      setIsSuccess(true);
      reset(); //reset form after submission
    },
    onError: () => {
      setIsSuccess(false);
    },
  });

  return (
    <section className="contact-us-section">
      <div>
        <img className="contact-form-img" src="/assets/pictures/firstStudentOrgFair/firstStudentOrgFair5.jpg" alt="Contact Us Form Picture" />
      </div>

      <div className="contact-form-div">
        <h3 className="contact-h3 color-darkpurple">
          ♡ We’d love to hear from you! We welcome every conversation with open ears, open hearts, and open minds.
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          {/* Hidden fields */}
          <input type="hidden" name="access_key" value={accessKey} />
          <input type="hidden" name="redirect" value="https://HarmonyHacksCSUSM.github.io/website/contact" />

          <div className="contact-form-fields-div">
            <div className="form-left-div">
              <p className="contact-p color-purple"> Name: </p>
              <input
                type="text"
                className="contact-inputs"
                {...register("name", { required: true })}
              />

              <p className="contact-p color-purple"> E-mail: </p>
              <input
                type="email"
                className="contact-inputs"
                {...register("email", { required: true })}
              />
            </div>

            <div className="form-right-div">
              <p className="contact-p color-purple"> Subject / Reason: </p>
              <select
                className="contact-inputs"
                {...register("subject", { required: true })}
              >
                <option value="General Inquiry"> General Inquiry </option>
                <option value="Event Inquiry"> Event Inquiry </option>
                <option value="Collab Inquiry"> Collaboration Inquiry </option>
                <option value="Submit Testimonial"> Submit Testimonial </option>
                <option value="Submit Feedback"> Submit Feedback </option>
                <option value="Submit Club Idea"> Submit Club Idea </option>
                <option value="Other"> Other </option>
              </select>

              <p className="contact-p color-purple"> Message: </p>
              <textarea
                className="contact-inputs msg-input"
                {...register("message", { required: true })}
              ></textarea>
            </div>
          </div>

          <button className="contact-submit-button" type="submit">Submit</button>
        </form>

        {/* Display result message */}
        <div className="result-message">
          {isSuccess ? <p className="page-p color-darkpurple"> Thank you for your message! We'll get back to you soon! ♡ </p> : <p className="error-msg">{result}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;

