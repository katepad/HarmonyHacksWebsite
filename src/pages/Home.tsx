import '../styles/Global.css';
import '../styles/Home.css';
import { FC } from "react";

const Home = () => {
    return (
      <div>
        <PhotoGallery />
        <ClubOverview />
        <MissionStatement />
        <RecentEvents />
        <JoinUs />
      </div>
    );
  };

  const PhotoGallery: FC = () => {
    const images = [
      "../assets/firstGbm7.jpg",
      "../assets/firstGbm7.jpg",
      "../assets/firstGbm7.jpg",
      "../assets/firstGbm7.jpg",
      "../assets/firstGbm7.jpg",
      "../assets/firstGbm7.jpg",
    ];
  
    return (
      <div className="photo-gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    );
  };

const ClubOverview = () => {
    return (
        <section className="club-overview">
            <div className="club-overview-container">
                <div className="club-overview-content-div">
                    <h2 className="page-h1 color-green">Club Overview</h2>
                    <p className="page-p color-white">
                    In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own.
                    </p>
                    <p className="page-p color-white">
                    One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. 
                    </p>
                </div>
                <div>
                    <img className="club-overview-img" src="/assets/firstGbm7.jpg" />
                </div>
            </div>
        </section>
    );
};

const MissionStatement = () => {
  return (
    <section className= {"mission-statement"} >
      <div className= "mission-statement-container">
        <div className="mission-statement-content-div">
          <div>
            <img className="mission-statement-img" src="/assets/firstGbm7.jpg" />
          </div>
        <h2 className = "mission-statement-h1 "> Mission Statement </h2>
        <p className = "mission-statement-p"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
        <p className = "mission-statement-p">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
        </div>
      </div>
    </section>
  );
};

const RecentEvents = () => {
  return (
      <section className="recent-events-section">
          <div className="recent-events-container">
              <div className="recent-events-content-div">
                  <h2 className="page-h2 color-green">Recent Events</h2>
                  <p className="page-p color-white">
                  In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own.
                  </p>
                  <p className="page-p color-white">
                  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. 
                  </p>
              </div>
              <div>
                  <img className="club-overview-img" src="/assets/firstGbm7.jpg" />
              </div>
          </div>
      </section>
  );
};

const JoinUs = () => {
  return (
    <section className= {"join-us"} >
      <div className = "join-us-content-div">
        <br/>
        <h2 className = "page-h2 color-green"> Join Us </h2>
        <p className = "page-p color-white"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
        <br/>
        <p className = "page-p color-white">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
      </div>
      <div>
        <img className = "club-overview-img" src="../assets/firstGbm7.jpg" />
      </div>
    </section>
  );
};
  
export default Home;