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
  return (
    <section className = "contact-us-section">

      <div>
        <img className = "contact-form-img" src="/assets/pictures/firstStudentOrgFair/firstStudentOrgFair5.jpg" alt="Contact Us Form Picture" />
      </div>

      <div className = "contact-form-div">
        
        <h3 className = "contact-h3 color-darkpurple">♡ We’d love to hear from you! We welcome every conversation with open ears, open hearts, and open minds. </h3>
        
        <form action="https://api.web3forms.com/submit" method="POST" className = "contact-form">
          
          <input type="hidden" name="access_key" value="37a2d8e8-b510-4f39-b7d3-0348970fd5f3"/>

          <div className = "contact-form-fields-div">

            <div className = "form-left-div">
              <p className = "contact-p color-purple"> Name: </p>
              <input type = "text" name = "name" className = "contact-inputs" required/>

              <p className = "contact-p color-purple"> E-mail: </p>
              <input type = "email" name = "email" className = "contact-inputs" required/>

            </div>

            <div className = "form-right-div">
              <p className = "contact-p color-purple"> Subject / Reason: </p>
              <select name = "subject" className = "contact-inputs" required>
                <option value = "General Inquiry"> General Inquiry </option>
                <option value = "Event Inquiry"> Event Inquiry </option>
                <option value = "Collab Inquiry"> Collaboration Inquiry </option>
                <option value = "Submit Testimonial" > Submit Testimonial </option>
                <option value = "Submit Feedback" > Submit Feedback </option>
                <option value = "Submit Club Idea" > Submit Club Idea </option>
                <option value = "Other"> Other </option>
              </select>

              <p className = "contact-p color-purple"> Message: </p>
              <textarea name = "Message" className = "contact-inputs msg-input" required></textarea>
            </div>
          </div>

          <button className = "contact-submit-button" type = "submit"> Submit </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;