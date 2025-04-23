import React, { useState } from "react";
import "../styles/Resources.css"; 
import "../styles/Global.css"; 
import resourceData from "../Data/Resources.json"; 
import { FaArrowLeft } from "react-icons/fa";

interface Resource {
  id: number;
  resource_image: string;
  resource_title: string;
  resource_summary: string;
  resource_description: string;
  resource_tag: string;
}

const Filters: React.FC<{ setFilter: (filter: string) => void }> = ({ setFilter }) => {
  return (
    <div className="filter-search">
      {["All", "Harmony Hacks", "Student Resources", "Financial Aid", "Academic", "Food", "Career"].map((tag) => (
        <button
          key={tag}
          className="tag"
          onClick={() => setFilter(tag)}
          aria-label={`Filter by ${tag}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

const Resources: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [resources] = useState<Resource[]>(resourceData);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const filteredResources = resources.filter(
    (resource) => filter === "All" || resource.resource_tag === filter
  );

  return (
    <div>
      <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}>
        Resources
      </h1>
      <Filters setFilter={setFilter} />
      <div className="card-container">
        {filteredResources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          filteredResources.map((resource) => (
            <div key={resource.id} className="card">
              <img
                src={resource.resource_image}
                alt={resource.resource_title}
                className="card-img"
              />
              <h1 className="card-title">{resource.resource_title}</h1>
              <p className="card-description">{resource.resource_summary}</p>
              <button
                className="card-btn"
                onClick={() => setSelectedResource(resource)}
              >
                Learn More
              </button>
            </div>
          ))
        )}
      </div>

{/* Modal Overlay */}
{selectedResource && (
  <div className="modal-backdrop" onClick={() => setSelectedResource(null)}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      
      {/* Back Arrow Button on Top Left */}
      <button
        className="modal-back-btn"
        onClick={() => setSelectedResource(null)}
        style={{ marginTop: "1rem" }}
      >
        <FaArrowLeft style={{ marginRight: "0.5rem" }} />
        Back
      </button>

      <div className="modal-content">
        <div className="modal-content-section">
          <h2 className="modal-title">{selectedResource.resource_title}</h2>
          <p className="modal-description">{selectedResource.resource_description}</p>
        </div>
        <div className="modal-image-section">
          <img
            src={selectedResource.resource_image}
            className="modal-img"
            alt={selectedResource.resource_title}
          />
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Resources;
