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
    "../assets/pictures/firstHackathon/firstWomensHackathonShowcase4.jpg",
    "../assets/pictures/firstStudentOrgFair/firstStudentOrgFair4.jpg",
    "../assets/pictures/firstGbm/firstGbm2.jpg",
    "../assets/pictures/superStemSaturday/superStemSaturday3.jpg",
    "../assets/pictures/galentines/galentines5.jpg",
    "../assets/pictures/firstGbm/firstGbm7.jpg",
  ];

  const PhotoGalleryHeader: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = React.useRef<number | null>(null);
  
    const startAutoSlide = () => {
      // Clear any existing interval
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Start a new interval
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
    };
  
    useEffect(() => {
      startAutoSlide(); // Start on mount
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current); // Clean up on unmount
      };
    }, []);
  
    const goToImage = (index: number) => {
      setCurrentIndex(index);
      startAutoSlide(); // Reset the timer on click
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
              Harmony Hacks is a student led organization at California State University San Marcos.We are dedicated to empowering women in computing and fostering a supportive community for those that are interested in technology. We host a variety of events throughout the semester, including hackathons,social bonding activities, tabling for outreach, and technical workshops to come. Our club meets bi-weekly, usually in the ViaSat building and is open to all students.
            </p>
            <p className="page-p color-darkpurple">
              Members can expect to gain leadership experience, engage in peer mentoring, and collaboration between different clubs to create small scale projects. What sets Harmony hacks apart is our unique theme of integration of music and coding and our commitment to mentoring high school students to bridge the gap between education and industry at every level.
            </p>
        </div>
      <div>
        <img className="club-overview-img" src="/assets/pictures/firstStudentOrgFair/firstStudentOrgFair4.jpg" />
      </div>
      </div>
    </section>
  );
};

const MissionStatement = () => {
  return (
    <section className= {"mission-statement"} >
      <div className= "mission-statement-container">
      <img className="mission-statement-img" src="/assets/pictures/firstHackathon/firstWomensHackathonKickoff4.jpg" />
        <div className="mission-statement-content-div">
          <div>
            <h2 className = "page-h2 mission-statement-h2 "> Mission Statement </h2>
            <p className = "page-p mission-statement-p"> At Harmony Hacks, our mission is to create an inclusive and empowering community where women in computing can thrive. We aim to cultivate confidence, creativity, and curiosity—not perfection—through meaningful experiences that encourage personal growth and technical exploration.
            </p>
            <p className = "page-p mission-statement-p"> Through workshops, events, and outreach, we challenge outdated stereotypes and amplify diverse voices in tech. While our focus is on uplifting women and underrepresented groups in computing, we welcome all students who believe in building a more inclusive, collaborative, and inspiring future.
            </p>
            <p className = "page-p mission-statement-p"> Together, we’re not just learning to code; We’re creating a culture of support, leadership, and innovation.
            </p>
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
  { id: 1, image: "../assets/pictures/superStemSaturday/superStemSaturday3.jpg", title: "Super Stem Saturday!", description: "Description here." },
  { id: 2, image: "../assets/pictures/galentines/galentines3.jpg", title: "Galentines GBM!", description: "Description here." },
  { id: 3, image: "../assets/pictures/firstStudentOrgFair/firstStudentOrgFair4.jpg", title: "1st Org Fair!", description: "Description here." },
  { id: 4, image: "../assets/pictures/galentines/galentines3.jpg", title: "Galentines GBM!", description: "Description here." },
  { id: 5, image: "../assets/pictures/firstStudentOrgFair/firstStudentOrgFair4.jpg", title: "1st Org Fair!", description: "Description here." },
  { id: 6, image: "../assets/pictures/firstGbm/firstGbm2.jpg", title: "First GBM!", description: "Description here." },
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
          <img className = "join-us-img" src="../assets/pictures/firstGbm/firstGbm10.jpg" />
        </div>
        <br></br>
          <div className="join-statement-div"></div>
          <div>
            <h2 className = "join-us-h2 page-h2 color-green"> Join Us </h2>
            <p className = "join-us-p page-p color-white"> We have biweekly meetings on Tuesdays during U-Hour in VEP 5107. In these meetings, we go over important information, upcoming events, and opportunities to get involved! Become an official member here!
            </p>
            <p className = "join-us-p page-p color-white"> Join our Discord and follow our Instagram using the footer links below for any meeting updates and announcements of upcoming events!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Home;