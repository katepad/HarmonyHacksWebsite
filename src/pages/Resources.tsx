import React, { useState, useEffect } from "react";
import "../styles/Resources.css";
import resourceData from "../Data/Resources.json";
import { FaArrowLeft } from "react-icons/fa";

interface Resource {
  id: number;
  resource_image: string;
  resource_title: string;
  resource_summary: string;
  resource_description: string;
  resource_tag: string;
  resource_link: string;
}

const Filters: React.FC<{ filter: string; setFilter: (filter: string) => void }> = ({ filter, setFilter }) => {
  const filters = ["All", "Harmony Hacks", "Student Resources", "Financial Aid", "Academic", "Food", "Career"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize(); // initialize on first load
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderTabs = () => (
    <>
      <div className="filters-tabs">
        {filters.map((type, index) => (
          <React.Fragment key={type}>
            <input
              type="radio"
              id={`radio-${index}`}
              name="tabs-filter"
              checked={filter === type}
              onChange={() => setFilter(type)}
              style={{ display: "none" }}
            />
            <label
              className={`filters-tab ${filter === type ? "selected" : ""}`}
              htmlFor={`radio-${index}`}
              data-type={type.replace(/\s+/g, "-").toLowerCase()}
            >
              {type}
            </label>
          </React.Fragment>
        ))}
      </div>
      <div className="tab-indicator" />
    </>
  );

  const renderDropdown = () => (
    <select
      className="filters-dropdown"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      {filters.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );

  return (
    <div
      className="filters-container"
      style={
        {
          "--tab-index": filters.indexOf(filter),
        } as React.CSSProperties
      }
    >
      {isMobile ? renderDropdown() : renderTabs()}
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
      <div className="resources-header">
        <h1 className="resources-page-h1 color-purple">Resources</h1>
        <Filters filter={filter} setFilter={setFilter} />
      </div>

      <div className="resources-card-container">
        {filteredResources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="resources-card"
              onClick={() => setSelectedResource(resource)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={resource.resource_image}
                alt={resource.resource_title}
                className="resources-card-img"
              />
              <h1 className="resources-card-title">{resource.resource_title}</h1>
              <p className="resources-card-description">{resource.resource_summary}</p>
              <a
                href={resource.resource_link}
                target="_blank"
                rel="noopener noreferrer"
                className="resources-card-btn"
                onClick={(e) => e.stopPropagation()} // Prevent modal from opening
              >
                Learn More
              </a>
            </div>
          ))
        )}
      </div>

      {/* Modal Overlay */}
      {selectedResource && (
        <div className="modal-backdrop" onClick={() => setSelectedResource(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
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