import '../styles/Global.css';
import { useState, useEffect } from "react";

type Testimonial = {
  testimonial_id: number;
  testimonial_name: string;
  testimonial_description: string;
  testimonial_image: string;
};

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/data/Testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded Board JSON:", data);
        setTestimonial(data);
      })
      .catch((err) => console.error("Failed to load testimonial JSON:", err));
  }, []);

  if (testimonial.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1
    );
  };

  const member = testimonial[currentIndex];

  return (
    <section className="contact-testimonial-section section-purple">
      <div className="button-div">
        <button className="arrow-button-left" onClick={handlePrev}> ♡ </button>
      </div>

      <div className="contact-testimonial-content-div">
        <div className="contact-testimonial-text-div">
          <h2 className="contact-h2 color-green"> Member Testimonials </h2>
          <h3 className="page-h3 color-white">{member.testimonial_name}</h3>
          <p className="contact-testimonial-p color-white">{member.testimonial_description}</p>
        </div>
        <div className="contact-testimonial-div">
          <img 
            className="contact-testimonial-img" 
            src={member.testimonial_image || "/assets/temp.png"} 
            alt={`${member.testimonial_name}`} 
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
