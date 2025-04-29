import '../styles/Global.css';
import '../styles/Home.css';
import React, { useState, useEffect } from "react";
import eventData from "../data/RecentEvents.json";

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
  "/assets/pictures/firstHackathon/firstWomensHackathonShowcase4.jpg",
  "/assets/pictures/firstStudentOrgFair/firstStudentOrgFair4.jpg",
  "/assets/pictures/firstGbm/firstGbm2.jpg",
  "/assets/pictures/superStemSaturday/superStemSaturday3.jpg",
  "/assets/pictures/galentines/galentines5.jpg",
  "/assets/pictures/firstGbm/firstGbm7.jpg",
];

const PhotoGalleryHeader: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef<number | null>(null);

  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
    };
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
    }
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
          />
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
          <h2 className="page-h2">♡ Club Overview</h2>
          <p className="page-p color-darkpurple">
            Harmony Hacks is a student-led organization at California State University San Marcos devoted to empowering women and underrepresented students in computing. We’re passionate about creating a supportive, inclusive space where anyone curious about technology can connect, learn, and grow—regardless of experience level.
          </p>
          <p className="page-p color-darkpurple">
            Our club hosts a wide range of events each semester, including creative hackathons, technical workshops, social bonding nights, and outreach initiatives like community tabling and STEM education activities. We meet bi-weekly—usually in the Viasat building—and welcome all students who want to explore computing through collaboration and creativity.
          </p>
          <p className="page-p color-darkpurple">
            Members of Harmony Hacks gain leadership experience, build confidence through peer mentorship, and often work with other student orgs to create hands-on, small-scale tech projects. What makes us unique is our signature blend of music and coding—a theme that inspires many of our events—and our strong commitment to mentoring high school students, helping bridge the gap between early education and tech careers.
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
    <section className="mission-statement">
      <div className="mission-statement-container">
        <div>
          <img className="mission-statement-img" src="/assets/pictures/firstHackathon/firstWomensHackathonKickoff4.jpg" />
        </div>
        <div className="mission-statement-content-div">
          <h2 className="page-h2 mission-statement-h2">♡ Mission Statement</h2>
          <p className="page-p mission-statement-p">
            At Harmony Hacks, our mission is to create an inclusive and empowering community where women in computing can thrive. We aim to cultivate confidence, creativity, and curiosity—not perfection—through meaningful experiences that encourage personal growth and technical exploration.
          </p>
          <p className="page-p mission-statement-p">
            Through workshops, events, and outreach, we challenge outdated stereotypes and amplify diverse voices in tech. While our focus is on uplifting women and underrepresented groups in computing, we welcome all students who believe in building a more inclusive, collaborative, and inspiring future.
          </p>
          <p className="page-p mission-statement-p">
            Together, we’re not just learning to code; We’re creating a culture of support, leadership, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

type Card = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const cards: Card[] = eventData.map((event, index) => ({
  id: index + 1,
  image: event.eventpic,
  title: event.eventname,
  description: event.eventdesc,
}));

const RecentEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + cards.length) % cards.length);
  };

  return (
    <section className="recent-events-container section-green">
      <h2 className="page-h2 recent-events-h2"> ₊˚✧ ━━━━⊱ Recent Events ⊰━━━━ ✧₊˚ </h2>
  
      <div className="button-div">
        <button 
          className="arrow-left" 
          onClick={prevCard} 
          disabled={currentIndex === 0}
        >
          ♡
        </button>
      </div>

        <div className="recent-events-cards-div">
          {cards.slice(currentIndex, currentIndex + 3).map((card) => (

            <div key={card.id} className="recent-events-card">
              <div className="recent-events-img-div">
                <img className = "recent-events-img" src={card.image} alt={card.title} />
              </div>
              <div className = "recent-events-text-div">
                <h3 className="recent-events-card-title">{card.title}</h3>
                <p className="recent-events-card-description">{card.description}</p>
              </div>
            </div>

          ))}
        </div>
  
      <div className="button-div">
        <button 
          className="arrow-right" 
          onClick={nextCard} 
          disabled={currentIndex + 3 >= cards.length}
        >
          ♡
        </button>
      </div>
    </section>
  );
};
  

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="join-us-container section-purple">
        <div>
          <img className="join-us-img" src="/assets/misc/viasatMapView.png" />
        </div>
        <div className="join-statement-div">
          <h2 className="join-us-h2 page-h2 color-green">♡ Join Us</h2>
          <p className="join-us-p page-p color-white">
            We have biweekly meetings on Tuesdays during U-Hour in VEP 5107. In these meetings, we go over important information, upcoming events, and opportunities to get involved! Become an official member <a href="https://csusm.presence.io/organization/harmony-hacks" className="bold-link" target="_blank" rel="noopener noreferrer">here</a>!
          </p>
          <p className="join-us-p page-p color-white">
            Join our Discord and follow our Instagram using the footer links below for any meeting updates and announcements of upcoming events!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;