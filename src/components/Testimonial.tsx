import { useState } from "react";
import contactData from "../Data/Testimonials.json";

type Testimonial = {
  testimonial_id: number;
  testimonial_firstName: string;
  testimonial_lastName: string;
  testimonial_description: string;
  testimonial_image: string;
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contactData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contactData.length - 1 : prevIndex - 1
    );
  };

  const member = contactData[currentIndex];

  return (
    <section className="contact-testimonial-section section-purple">
      <div className="button-div">
        <button className="arrow-button-left" onClick={handlePrev}> ♡ </button>
      </div>

      <div className="contact-testimonial-content-div">
        <div className="contact-testimonial-text-div">
          <h2 className="contact-h2 color-green"> Member Testimonials </h2>
          <h3 className="page-h3 color-white">{member.testimonial_firstName} {member.testimonial_lastName}</h3>
          <p className="contact-testimonial-p color-white">{member.testimonial_description}</p>
        </div>
        <div className="contact-testimonial-div">
          <img 
            className="contact-testimonial-img" 
            src={member.testimonial_image || "/assets/temp.png"} 
            alt={`${member.testimonial_firstName} ${member.testimonial_lastName}`} 
          />
        </div>
      </div>

      <div className="button-div">
        <button className="arrow-button-right" onClick={handleNext}> ♡ </button>
      </div>
    </section>
  );
};

export default Testimonial;
