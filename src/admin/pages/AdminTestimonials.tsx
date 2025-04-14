
import { useState, useEffect } from "react";
import '../styles/AdminTestimonials.css'; 


const AdminTestimonials = () => {

  return (
    <>
      <h2 className = "page-h2 color-purple">Manage Testimonials</h2> ;
      <Form />
      <Testimonials />
    </>
  );
};

type TestimonialsMember = {
  "id": number;
  "testimonial_name": string;
  "testimonial_description": string;
  "testimonial_image": string;
};

const Form = () => {
  return (        
    <form method="POST" className = "admin-testimonial-form">

      <div>

        <h2 className = "color-darkpurple"> Add Testimonial: </h2>
        <br />

        <p className = "color-purple"> Name: </p>
        <input type = "text" name = "name" className = "contact-inputs" required/>

        <p className = "color-purple"> Testimonial: </p>
        <textarea name="position" className="contact-inputs" required></textarea>

      </div>

      <button className = "add-button" type = "submit"> Add </button>

    </form>
  );
};

const Testimonials = () => {

  const [testimonial, setTestimonial] = useState<TestimonialsMember[]>([]);
    
  useEffect(() => {
    fetch("/data/Testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded Testimonials JSON:", data);
        setTestimonial(data);
      })
      .catch((err) => console.error("Failed to load Testimonials JSON:", err));
  }, []);

  return (
    
    <section className="admin-testimonial-section">

      <h2 className="page-h2 color-purple">Current Testimonials</h2>

      <div className="admin-testimonial-cards-container">
        {testimonial.map((member: TestimonialsMember) => (
          <div key={member.id} className="admin-testimonial-card">
            <div>
              <img className="admin-testimonial-img" src={member.testimonial_image || "/assets/temp.png"} alt={`${member.testimonial_name}`} />
            </div>
            <div>
              <p className="color-pink">Name: {member.testimonial_name}</p>
              <p className="color-darkpurple">Testimonial: {member.testimonial_description}</p>
            </div>
            <div className = "admin-testimonial-buttons">
              <button className = "admin-testimonial-delete-button" type = "submit"> Delete </button>
              <button className = "admin-testimonial-edit-button" type = "submit"> Edit </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminTestimonials;
