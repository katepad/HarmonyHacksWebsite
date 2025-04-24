import hackathonGuide from "../data/HackathonGuide.json";
import hackathonGallery from "../data/HackathonGallery.json";
import '../styles/Global.css'; 
import '../styles/Hackathon.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from "react";

type HackathonSteps = {
    "id": number,
    "hackathonStep_title": string,
    "hackathonStep_description": string,
    "hackathonStep_image": string
}

type HackathonImages = {
    "hackathon_image": string
}

const Hackathon = () => {
    return (
        <>
        <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> Harmony Hackathons </h1>
        <Guide />
        <Gallery />
        </>
    );
};

const Guide = () => {
    return (
      <section className= "hackathon-guide-section" >
        <div>
            <h2 className = "page-h2 color-purple"> Our Process </h2>
            <h3 className = "page-h3 color-darkpurple"> Creating a Hackathon event was no easy task... add more here </h3>
            
            <VerticalTimeline lineColor = "#633160" layout ={'1-column-left'}>

            {hackathonGuide.map((member: HackathonSteps) => (

                <VerticalTimelineElement className = "vertical-timeline-element"
                
                contentStyle={{ background: "#fff2fe", color: '#633160' }}
                iconStyle={{background:"#633160", color:"#fff2fe"}}
                >
                <div className = "hackathon-guide-content-div">
                    <div>
                    <h3 className = "page-h3 color-darkpurple"> {member.hackathonStep_title} </h3>
                    <p className = "page-p color-purple">{member.hackathonStep_description}</p>
                    </div>
                    <div>
                    <img className="hackathon-guide-img" src={member.hackathonStep_image || "/assets/temp.png"} alt={`${member.hackathonStep_title}`} />
                    </div>
                </div>
                </VerticalTimelineElement>
            ))}

            </VerticalTimeline>
            
        </div>
      </section>
    );
};

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedIndex === null) return;

        if (e.key === 'ArrowRight') {
            setSelectedIndex((prev) => prev !== null ? (prev + 1) % hackathonGallery.length : null);
        } else if (e.key === 'ArrowLeft') {
            setSelectedIndex((prev) => prev !== null ? (prev - 1 + hackathonGallery.length) % hackathonGallery.length : null);
        } else if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <section className="hackathon-gallery-section section-purple">
            <h2 className="page-h2 color-green"> Gallery </h2>

            <div className="hackathon-guide-content-div">
                <div className="hackathon-gallery-container">
                    {hackathonGallery.map((member: HackathonImages, index: number) => (
                        <div className="img-box" key={index}>
                            <img
                                className="hackathon-gallery-img"
                                src={member.hackathon_image || "/assets/temp.png"}
                                onClick={() => setSelectedIndex(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedIndex !== null && (
                <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
                    <img
                        src={hackathonGallery[selectedIndex].hackathon_image || "/assets/temp.png"}
                        alt="Enlarged"
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

  
export default Hackathon;