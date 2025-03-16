
import '../styles/Global.css'; 
import '../styles/About.css';

const About = () => {
    return (
        <>
        <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> About Us </h1>
        <History />
        <Founders />
        <Board />
        </>
    );
  };

const History = () => {
  return (
    <section className = "about-history-section">
      <div className = "about-history-img-div" />
      <div className = "about-history-content-div">
        <h2 className = "page-h2 color-purple"> History </h2>
        <p className = "page-p color-darkpurple"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
        <br/>
        <p className = "page-p color-darkpurple">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
      </div>
    </section>
  );
};

const Founders = () => {
  return (
    <section className= {"about-founders-section section-purple"} >
      <div className = "about-founders-content-div">
        <br/>
        <h2 className = "page-h2 color-green"> Meet the Founders </h2>
        <p className = "page-p color-white"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
        <br/>
        <p className = "page-p color-white">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
      </div>
      <div className = "about-founders-img-div" />
    </section>
  );
};

const Board = () => {
  return (
    <section className = "about-board-section">

      <br/> <h2 className = "page-h2 color-purple indent"> Meet the '24-'25 Board </h2>

      {/* I would have to use JS to generate the correc amount of cards and rows for every year */}

      <div className = "about-board-cards-row indent">
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
      </div>

      <div className = "about-board-cards-row indent">
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
        <div className = "about-board-card">
          <div className = "about-board-card-img" />
          <h3 className = "about-h3 color-darkpurple"> FirstName LastName </h3>
          <h3 className = "about-h3 color-darkpurple"> Position </h3>
          <p className = "page-p color-pink"> A lil bio here. </p>
        </div>
      </div>

    </section>
  );
};
  
  export default About;