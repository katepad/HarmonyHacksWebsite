import '../styles/Global.css'; 
import '../styles/Contact.css';

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
                <option value = "Submit Testimonial" > Submit Testimonial</option>
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

      <div className = "contact-testimonial-content-div">
        <div className = "contact-testimonial-text-div">
          <h2 className = "contact-h2 color-green"> Member Testimonials </h2>
          <h3 className = "page-h3 color-white"> FirstName LastName </h3>
          <p className = "contact-testimonial-p color-white"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
          <br/>
          <p className = "contact-testimonial-p color-white">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
        </div>
        <div className = "contact-testimonial-div">
          <img className = "contact-testimonial-img" src="/assets/titocTemp.jpg" alt="First GBM with Harmony Hacks Founders" />
        </div>
      </div>

      <div className="button-div">
        <button className = "arrow-button-right"> ♡ </button>
      </div>

    </section>
  );
}

export default Contact;
  