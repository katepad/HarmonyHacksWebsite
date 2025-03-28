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
    "../assets/firstStudentOrgFair4.jpg",
    "../assets/firstGbm2.jpg",
    "../assets/superStemSaturday3.jpg",
    "../assets/galentines5.jpg",
    "../assets/firstGbm7.jpg",
    "../assets/firstGbm1.jpg",
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
          <h2 className="page-h2">Club Overview</h2>
            <p className="page-p color-darkpurple">
              In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own.
            </p>
            <p className="page-p color-darkpurple">
              One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. 
            </p>
        </div>
      <div>
        <img className="club-overview-img" src="/assets/firstStudentOrgFair4.jpg" />
      </div>
      </div>
    </section>
  );
};

const MissionStatement = () => {
  return (
    <section className= {"mission-statement"} >
      <div className= "mission-statement-container">
      <img className="mission-statement-img" src="/assets/galentines5.jpg" />
        <div className="mission-statement-content-div">
          <div>
            <h2 className = "page-h2 mission-statement-h2 "> Mission Statement </h2>
            <p className = "page-p mission-statement-p"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
            <p className = "page-p mission-statement-p">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
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
  { id: 1, image: "../assets/superStemSaturday3.jpg", title: "Super Stem Saturday!", description: "Description here." },
  { id: 2, image: "../assets/galentines3.jpg", title: "Galentines GBM!", description: "Description here." },
  { id: 3, image: "../assets/firstStudentOrgFair4.jpg", title: "1st Org Fair!", description: "Description here." },
  { id: 4, image: "../assets/galentines3.jpg", title: "Galentines GBM!", description: "Description here." },
  { id: 5, image: "../assets/firstStudentOrgFair4.jpg", title: "1st Org Fair!", description: "Description here." },
  { id: 6, image: "../assets/firstGbm2.jpg", title: "First GBM!", description: "Description here." },
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
          <h2 className="page-h2 recent-events-h2">Recent Events</h2>
          <div className="carousel-container">
            <button className="arrow-left" onClick={prevCard}> ♡ </button>
            <div className="cards-display">
            {cards.slice(currentIndex, currentIndex + 3).map((card) => (
              <div key={card.id} className="card">
                <img src={card.image} alt={card.title} />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
            <button className="arrow-right" onClick={nextCard}> ♡ </button>
          </div>
        </div>
    </div>
  );
};

const JoinUs = () => {
  return (
    <section className= {"join-us"} >
      <div className="join-us-container section-purple">
          
        <div className="join-us-content-div">
        <div>
          <img className = "join-us-img" src="../assets/firstGbm10.jpg" />
        </div>
        <br></br>
          <div className="join-statement-div"></div>
          <div>
            <h2 className = "join-us-h2 page-h2 color-green"> Join Us </h2>
            <p className = "join-us-p page-p color-white"> In the heart of London, in a cozy little town called Sanrioville, there lived a bright and curious kitten named Hello Kitty. From a young age, she was fascinated by puzzles, patterns, and how things worked. While her friends enjoyed baking and playing outside, Kitty spent hours tinkering with her toy robot, trying to make it walk on its own. </p>
            <p className = "join-us-p page-p color-white">  One day, her school announced a coding competition where students had to create a program that solved a real-world problem. Kitty was thrilled! She had never written a single line of code before, but that didn’t stop her. Determined, she rushed home and searched for beginner coding tutorials on her computer. </p>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Home;