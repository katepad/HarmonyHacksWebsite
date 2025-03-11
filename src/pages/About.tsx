
import '../styles/Global.css'; 
import '../styles/About.css';

const About = () => {
    return (
      <div>
        <h1 className = "page-h1"> About Us </h1>
        <History />
      </div>
    );
  };

const History = () => {
  return (
    <section className = "about-history-section">
      <div className = "about-history-picture">
      </div>
      <div className = "about-history-content">
        <h2 className = "page-h2"> History </h2>
        <p className = "page-p"> Blah blah blah. </p>
      </div>
    </section>
  );
};
  
  export default About;