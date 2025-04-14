
import { useState, useEffect } from "react";
import '../styles/AdminResources.css';

const AdminResources = () => {
  return (
    <>
      <h2 className = "page-h2 color-purple">Manage Resources</h2> ;
      <Form />
      <Resources />
    </>
  );
};


type Resources = {
  "id": number;
  "resource_image": string;
  "resource_title": string;
  "resource_description": string;
  "resource_link": string;
  "resource_tag": string;
};

const Form = () => {
  return (        
    <form method="POST" className = "admin-resource-form">

      <div>

        <h2 className = "color-darkpurple"> Add Resource: </h2>
        <br />

        <p className = "color-purple"> Title: </p>
        <input type = "text" name = "title" className = "contact-inputs" required/>

        <p className = "color-purple"> Description: </p>
        <textarea name="description" className="contact-inputs" required></textarea>

        <p className = "color-purple"> Link: </p>
        <input type = "text" name = "link" className = "contact-inputs" required/>

        <p className = "contact-p color-purple"> Tag: </p>
          <select name = "tag" className = "contact-inputs">
            <option value = "Tag 1"> Tag 1 </option>
            <option value = "Tag 2"> Tag 2 </option>
            <option value = "Tag 3"> Tag 3 </option>
          </select>

      </div>

      <button className = "add-button" type = "submit"> Add </button>

    </form>
  );
};


const Resources = () => {

  const [resource, setResources] = useState<Resources[]>([]);
    
  useEffect(() => {
    fetch("/data/Resources.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded Resources JSON:", data);
        setResources(data);
      })
      .catch((err) => console.error("Failed to load Resources JSON:", err));
  }, []);

  return (
    
    <section className="admin-resource-section">

      <h2 className="page-h2 color-purple">Current Resources</h2>

      <div className="admin-resource-cards-container">
        {resource.map((resource: Resources) => (
          <div key={resource.id} className="admin-resource-card">
            <div>
              <img className="admin-resource-img" src={resource.resource_image || "/assets/temp.png"} alt={`${resource.resource_title}`} />
            </div>
            <div>
              <p className="color-pink"> Title: {resource.resource_title}</p>
              <p className="color-darkpurple"> Decription: {resource.resource_description}</p>
              <p className="color-pink"> Link: <a href = {resource.resource_link} target="_blank"> <span> {resource.resource_link} </span> </a> </p>
              <p className="color-darkpurple"> Tag: {resource.resource_tag} </p>
            </div>
            <div className = "admin-board-buttons">
              <button className = "admin-board-delete-button" type = "submit"> Delete </button>
              <button className = "admin-board-edit-button" type = "submit"> Edit </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default AdminResources;
