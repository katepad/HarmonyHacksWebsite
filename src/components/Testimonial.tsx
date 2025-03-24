import { useState } from "react";
import contactData from "../Data/Testimonials.json";

type Testimonial = {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  image: string;
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
          <h3 className="page-h3 color-white">{member.firstName} {member.lastName}</h3>
          <p className="contact-testimonial-p color-white">{member.description}</p>
        </div>
        <div className="contact-testimonial-div">
          <img 
            className="contact-testimonial-img" 
            src={member.image || "/assets/temp.png"} 
            alt={`${member.firstName} ${member.lastName}`} 
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
