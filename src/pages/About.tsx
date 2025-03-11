
import '../styles/Global.css'; 
import '../styles/About.css';

const About = () => {
    return (
        <>
        <h1 className="page-h1"> About Us </h1>
        <History />
        <Founders />
        </>
    );
  };

const History = () => {
  return (
    <section className = "about-history-section">
      <div className = "about-history-img-div">
      </div>
      <div className = "about-history-content-div">
        <h2 className = "page-h2"> History </h2>
        <p className = "page-p"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
        <br/>
        <p className = "page-p">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
      </div>
    </section>
  );
};

const Founders = () => {
  return (
    < section className= {'about-founders-section div-purple'} >
      <div>

      </div>
    </section>
  );
};
  
  export default About;