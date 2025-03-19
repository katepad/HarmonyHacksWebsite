
import contactData from "../data/Testimonials.json";
import '../styles/Global.css'; 
import '../styles/Contact.css';

type Testimonial = {
  "id": number;
  "firstName": string;
  "lastName": string;
  "description": string;
  "image": string;
};

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
        <img className = "contact-form-img" src="/assets/firstStudentOrgFair5.jpg" alt="Contact Us Form Picture" />
      </div>

      <div className = "contact-form-div">
        
        <h3 className = "contact-h3 color-darkpurple"> We’d love to hear from you! We welcome every conversation with open ears, open hearts, and open minds. </h3>
        
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

const Testimonial = () => {
  return (
    <section className= {"contact-testimonial-section section-purple"} >

      <div className="button-div">
        <button className = "arrow-button-left"> ♡ </button>
      </div>

      {contactData.map((member: Testimonial) => (
        <div key={member.id} className = "contact-testimonial-content-div">
          <div className = "contact-testimonial-text-div">
            <h2 className = "contact-h2 color-green"> Member Testimonials </h2>
            <h3 className = "page-h3 color-white">{member.firstName} {member.lastName}</h3>
            <p className = "contact-testimonial-p color-white"> {member.description} </p>
          </div>
          <div className = "contact-testimonial-div">
            <img className = "contact-testimonial-img" src={member.image || "/assets/temp.png"} alt={`${member.firstName} ${member.lastName}`} />
          </div>
        </div>
      ))}

      <div className="button-div">
        <button className = "arrow-button-right"> ♡ </button>
      </div>

    </section>
  );
}

export default Contact;
  