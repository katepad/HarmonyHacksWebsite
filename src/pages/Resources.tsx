import React, { useState } from "react";
import "../styles/Resources.css"; 
import resourceData from "../Data/Resources.json"; 

interface Resource {
  id: number;
  resource_image: string;
  resource_title: string;
  resource_description: string;
  resource_link: string;
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
              <p className="card-description">{resource.resource_description}</p>
              <a
                href={resource.resource_link}
                className="card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;
