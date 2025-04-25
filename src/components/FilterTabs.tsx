import React from "react";
import "../styles/Calendar.css";

const filters = ["All", "GBM Events", "Workshops", "Fundraisers", "Socials", "Hackathons", "Misc"];

const colorMap: Record<string, string> = {
    "All": "#D02F9E",
    "GBM Events": "#e2f5e9",
    "Workshops": "#ecdff1",
    "Fundraisers": "#fbe9e7",
    "Socials": "#fef3c7",
    "Hackathons": "#dbeafe",
    "Misc": "#e5e7eb",
  };
  
  const textColorMap: Record<string, string> = {
    "All": "white",
    "GBM Events": "#5d7a24",
    "Workshops": "#994e98",
    "Fundraisers": "#bf360c",
    "Socials": "#d97706",
    "Hackathons": "#2563eb",
    "Misc": "#4b5563",
  };

interface FilterTabsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => {
  return (
    <div className="filter-tabs-container">
      <div className="tabs">
        {filters.map((type, index) => (
          <React.Fragment key={type}>
            <input
              type="radio"
              id={`radio-${index}`}
              name="tabs"
              checked={filter === type}
              onChange={() => setFilter(type)}
            />
            <label
                className="tab"
                htmlFor={`radio-${index}`}
                style={{
                    color: filter === type && textColorMap[type]
                    ? textColorMap[type]
                    : "black",
                    fontWeight: "600"
                    }}
                >
                {type}
            </label>


          </React.Fragment>
        ))}
        <span
          className="glider"
          style={{ 
            transform: `translateX(${filters.indexOf(filter) * 100}%)`,
            backgroundColor: colorMap[filter] || "e6eef9",
            transition: "all 0.25s ease-out",
        }}
        />
      </div>
    </div>
  );
};

export default FilterTabs;