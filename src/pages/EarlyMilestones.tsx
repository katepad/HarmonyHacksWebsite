import contactData from "../data/Milestones.json"; 
import '../styles/Global.css'; 
import '../styles/EarlyMilestones.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Milestone = {
  "id": number,
  "milestone_date": string,
  "milestone_title": string,
  "milestone_description": string,
  "milestone_image": string
}

const EarlyMilestones = () => {
    return (
        <>
        <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}>♡ Early Milestones </h1>
        <EarlyMilestonesList />
        </>
    );
};

const EarlyMilestonesList = () => {
    return (
      <section className= "milestones-section" >
        <div>
          <h3 className = "page-h3 color-darkpurple"> From the very beginning, Harmony Hacks hit the ground running with events that embodied our mission and touched the community: </h3>
          <br/>
          <br/>

          <VerticalTimeline lineColor = "#633160" layout ={'1-column-left'}>

            {contactData.map((member: Milestone) => (
              <VerticalTimelineElement className = "vertical-timeline-element"
              contentStyle={{ background: "#fff2fe", color: '#633160' }}
              iconStyle={{background:"#633160", color:"#fff2fe"}}
              date = {member.milestone_date}
              dateClassName={ "date-text" }>
                <div className = "milestone-content-div">
                  <div>
                    <h3 className = "page-h3 color-darkpurple"> {member.milestone_title} </h3>
                    <p className = "page-p color-purple">{member.milestone_description}</p>
                  </div>
                  <div>
                    <img className="milestone-img" src={member.milestone_image || "/assets/temp.png"} alt={`${member.milestone_title}`} />
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}

          </VerticalTimeline>
        
          <br/>
          <br/>
          <p className = "page-p color-darkpurple"> Each of these early milestones was more than just an event; It was a statement of purpose. With every hackathon, club event, and collaboration, the founders reinforced what Harmony Hacks stood for. They built confidence in others and in themselves, proving that a supportive community can transform intimidation into inspiration. </p>
        </div>
      </section>
    );
};  
  
export default EarlyMilestones;