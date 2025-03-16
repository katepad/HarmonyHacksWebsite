import '../styles/Global.css'; 
import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> Contact Us </h1>
      <Form />
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
        
        <h3 className = "page-h3 color-darkpurple"> We’d love to hear from you! We welcome every conversation with open ears, open hearts, and open minds. </h3>
        
        <form action="https://api.web3forms.com/submit" method="POST" className = "contact-block">
          
          <input type="hidden" name="access_key" value="37a2d8e8-b510-4f39-b7d3-0348970fd5f3"/>

          <p className = "contact-p color-purple"> Name: </p>
          <input type = "text" name = "name" className = "contact-inputs" required/>

          <p className = "contact-p color-purple"> E-mail: </p>
          <input type = "email" name = "email" className = "contact-inputs" required/>

          <p className = "contact-p color-purple"> Subject / Reason: </p>
          <select name = "subject" className = "contact-inputs" required>
            <option value="volvo">Question</option>
            <option value="fiat">Event</option>
            <option value="audi">Collaboration</option>
          </select>

          <p className = "contact-p color-purple"> Message: </p>
          <textarea name = "Message" className = "contact-inputs" required></textarea>

          <br/>
          <button className = "contact-submit-button" type = "submit"> Submit </button>
        </form>
      </div>
    </section>
  );
};

  
export default Contact;
  