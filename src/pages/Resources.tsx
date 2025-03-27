import React, { useState } from "react";
import resourcesData from "../data/resources.json"; 
import "../styles/Resources.css"; 

interface CardProps {
  resource_id?: number,
  resource_image?: string;
  resource_imgAlt?: string;
  resource_title?: string;
  resource_description?: string;
  buttonText?: string;
  resource_link?: string;
  tag?: string;
}

const Filters: React.FC<{ setFilter: (filter: string) => void }> = ({ setFilter }) => {
  return (
    <div className="filter-search">
      {["All", "New", "Trending", "Coming Soon", "Seasonal"].map((tag) => (
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
  const [resources] = useState<CardProps[]>(resourcesData);

  // Filter logic
  const filteredResources = resources.filter((resource) => 
    filter === "All" || resource.tag === filter
  );

  return (
    <div>
      <Filters setFilter={setFilter} />
      <div className="card-container">
        {filteredResources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          filteredResources.map((resource, index) => (
            <div key={index} className="card">
              {resource.resource_image && resource.resource_imgAlt && (
                <img src={resource.resource_image} alt={resource.resource_imgAlt} className="card-img" />
              )}
              {resource.resource_title && <h1 className="card-title">{resource.resource_title}</h1>}
              {resource.resource_description && <p className="card-description">{resource.resource_description}</p>}
              {resource.buttonText && resource.resource_link && (
                <a href={resource.resource_link} className="card-btn">
                  {resource.buttonText}
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;
