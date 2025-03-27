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
              {resource.imgSrc && resource.imgAlt && (
                <img src={resource.imgSrc} alt={resource.imgAlt} className="card-img" />
              )}
              {resource.title && <h1 className="card-title">{resource.title}</h1>}
              {resource.description && <p className="card-description">{resource.description}</p>}
              {resource.buttonText && resource.link && (
                <a href={resource.link} className="card-btn">
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
