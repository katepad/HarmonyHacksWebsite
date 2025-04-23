import '../styles/Global.css'; 
import '../styles/AboutMusic.css';

const AboutMusic = () => {
    return (
        <>
        <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> About The Music </h1>
        <AboutMusicInfo />
        </>
    );
};

const AboutMusicInfo = () => {
    return (
        <>
        <div className = "about-music-div">
            <div className = "about-music-left-div">
                <img className="about-music-img" src="/assets/pictures/firstHackathon/firstWomensHackathonKickoff8.jpg" alt= "1st Harmony Hackathon Picture" />
            </div>
            <div className = "about-music-right-div">
                <h2 className = "page-h2 color-purple"> Curious about where this music is from? </h2>
                <br/>
                <p className = "page-p color-darkpurple"> The music featured on this website was created by high school women who participated in previous Harmony Hackathons. These compositions are more than just melodies; They are encrypted messages coded in Python via Tunepad, a programming music tool. Each piece is a creative expression of empowerment, resilience, and innovation, encoded with powerful phrases such as:
                </p>
                <p className = "page-p color-darkpurple"> “Girls who innovate, inspire the future. Girls who create, transform the world. Girls who connect, empower one another.” — and much more!
                </p>
                <p className = "page-p color-darkpurple"> Drawing inspiration from Dr. Merryl Goldberg’s real-life story of using music to encrypt secret messages during the Cold War, high school participants did the same! These musical works are a lasting tribute to the voices of young women in tech that Harmony Hacks seeks to amplify, inspire, and celebrate!
                </p>
            </div>
        </div>
        </>
    );
};
  
export default AboutMusic;