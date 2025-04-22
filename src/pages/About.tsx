import contactData from "../data/Board.json"; 
import '../styles/Global.css'; 
import '../styles/About.css';
import { Link } from 'react-router-dom';

type BoardMember = {
  "id": number;
  "board_name": string;
  "board_position": string;
  "board_email": string;
  "board_image": string;
};

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
      <div>
        <img className = "about-history-img " src="/assets/pictures/firstGbm/firstGbm2.jpg" alt="First GBM with Harmony Hacks" />
      </div>
      <div className = "about-history-content-div">
        <h2 className = "page-h2 color-purple"> History </h2>
        <p className = "page-p color-darkpurple"> Harmony Hacks was inspired by the sense of community experienced during a women’s hackathon held at CSUSM. The event demonstrated the importance of creating inclusive environments in the tech industry and sparked a collective effort to expand these opportunities for others. With support from faculty advisors Youwen Ouyang and Jing Hou, the founding team began planning a hackathon designed for high school students—providing college students with a platform to gain mentorship experience and build professional connections. This initiative led to the official launch of Harmony Hacks in Fall 2024.
        </p>
        <p className = "page-p color-darkpurple"> Click below to see our early milestones from our founding year.
        </p>
        <br/>
        <Link to="/earlyMilestones">
            <button className = "about-early-milestones-button"> Early Milestones </button>
        </Link>
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
        <p className = "page-p color-white"> Harmony Hacks was founded by a group of seven driven women brought together by Dr. Ouyang and Dr. Hou, who shared a vision to increase the representation of women in computing. United by a shared passion for creating meaningful change, the founding members laid the foundation for a community centered on <span className = "bold">leadership, connection, and inclusivity.</span>.
        </p>
        <p className = "page-p color-white"> The founding team collaborated to define the club’s identity — developing its mission, designing impactful events, and laying the groundwork for a supportive and empowering environment for women in tech. Through collaboration, creativity, and perseverance, they transformed an idea into a thriving community.
        </p>
        <p className = "page-p color-white"> What started as a small initiative has grown into a vibrant community where young women are supported, inspired, and empowered to lead in the world of technology.
        </p>
      </div>
      <div>
        <img className = "about-founders-img" src="/assets/pictures/firstGbm/firstGbm7.jpg" alt="First GBM with Harmony Hacks Founders" />
      </div>
    </section>
  );
};

const Board = () => {
  return (
    <section className="about-board-section">
      <h2 className="page-h2 color-purple">Meet the Current Board</h2>

      <div className="about-board-cards-container">
        {contactData.map((member: BoardMember) => (
          <div key={member.id} className="about-board-card">
            <img className="about-board-card-img" src={member.board_image || "/assets/temp.png"} alt={`${member.board_name}`} />
            <h3 className="about-h3 color-darkpurple">{member.board_name}</h3>
            <h3 className="about-h3 color-darkpurple">{member.board_position}</h3>
            <p className="page-p color-pink">{member.board_email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
  
  export default About;