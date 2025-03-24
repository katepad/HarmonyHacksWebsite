import '../styles/Global.css';
import '../styles/Home.css';
import React, { useState, useEffect } from "react";


const Home = () => {
    return (
      <div>
        <PhotoGalleryHeader />
        <ClubOverview />
        <MissionStatement />
        <RecentEvents />
        <JoinUs />
      </div>
    );
  };

  const images = [
    "../assets/firstGbm2.jpg",
    "../assets/firstGbm7.jpg",
    "../assets/firstStudentOrgFair5.jpg",
    "../assets/firstGbm7.jpg",
    "../assets/temp.png",
    "../assets/firstGbm7.jpg",
  ];

  const PhotoGalleryHeader: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
      return () => clearInterval(interval);
    }, []);
  
    const goToImage = (index: number) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="photo-gallery-header">
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : "hidden"}
            />
          ))}
        </div>
        <div className="navigation">
          {images.map((_, index) => (
            <div
              key={index}
              className={`heart ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToImage(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  };

const ClubOverview = () => {
  return (
    <section className="club-overview">
      <div className="club-overview-container">
        <div className="club-overview-content-div">
          <h2 className="page-h1">Club Overview</h2>
            <p className="page-p color-darkpurple">
              In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own.
            </p>
            <p className="page-p color-darkpurple">
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
      <img className="mission-statement-img" src="/assets/firstGbm7.jpg" />
        <div className="mission-statement-content-div">
          <div>
            <h2 className = "mission-statement-h1 "> Mission Statement </h2>
            <p className = "mission-statement-p"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
            <p className = "mission-statement-p">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

const cards: Card[] = [
  { id: 1, image: "../assets/firstGbm2.jpg", title: "GBM 1", description: "GBM 1 was super cool" },
  { id: 2, image: "../assets/firstGbm7.jpg", title: "Event Name Here", description: "Event description here" },
  { id: 3, image: "../assets/currentBoard/kate.png", title: "Kate !!", description: "the goat 🐐" },
  { id: 4, image: "../assets/firstStudentOrgFair5.jpg", title: "GBM 1", description: "GBM 1 was super cool" },
  { id: 5, image: "../assets/currentBoard/rosemary.png", title: "Event Name Here", description: "Event description here" },
  { id: 6, image: "../assets/currentBoard/estrella.png", title: "Kate !!", description: "the goat 🐐" },
  { id: 7, image: "../assets/currentBoard/erica.png", title: "GBM 1", description: "GBM 1 was super cool" },
  { id: 8, image: "../assets/currentBoard/taylor.png", title: "Event Name Here", description: "Event description here" },
  { id: 9, image: "../assets/currentBoard/robbi.png", title: "Kate !!", description: "the goat 🐐" },
];

const RecentEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + cards.length) % cards.length);
  };

  return (
    <div className="recent-events-container">
        <div className="recent-events-content-div">
          <br></br>
        <h2 className="recent-events-h1">Recent Events</h2>
        <div className="carousel-container">
          <button className="heart left" onClick={prevCard}></button>
          <div className="cards-display">
          {cards.slice(currentIndex, currentIndex + 3).map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
            <button className="heart right" onClick={nextCard}></button>
        </div>
        </div>
    </div>
  );
};

const JoinUs = () => {
  return (
    <section className= {"join-us"} >
      <div className="join-us-container">
          
        <div className="join-us-content-div">
        <div>
          <img className = "join-us-img" src="../assets/firstGbm7.jpg" />
        </div>
        <br></br>
          <div className="join-statement-div"></div>
          <div>
            <h2 className = "join-us-h1"> Join Us </h2>
            <p className = "join-us-p "> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
            <p className = "join-us-p">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Home;