import React, { useState, useEffect } from "react";
import "../styles/Resources.css"; 

interface CardProps {
  id?: number;
  resource_image?: string;
  resource_title?: string;
  resource_description?: string;
  resource_link?: string;
  tag?: string;
}

const Filters: React.FC<{ setFilter: (filter: string) => void }> = ({ setFilter }) => {
  return (
    <div className="filter-search">
      {["All", "New", "Trending", "Coming Soon", "Seasonal"].map((tag) => (
        <button key={tag} className="tag" onClick={() => setFilter(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

const Resources: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [resources, setResources] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("/data/Resources.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded JSON:", data);
        setResources(data);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  const filteredResources = resources.filter((resource) =>
    filter === "All" || resource.tag === filter
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
          filteredResources.map((resource, index) => (
            <div key={index} className="card">
              {resource.resource_image && (
                <img src={resource.resource_image} alt="Resource" className="card-img" />
              )}
              {resource.resource_title && <h1 className="card-title">{resource.resource_title}</h1>}
              {resource.resource_description && <p className="card-description">{resource.resource_description}</p>}
              {resource.resource_link && (
                <a href={resource.resource_link} className="card-btn">
                  Learn More
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
