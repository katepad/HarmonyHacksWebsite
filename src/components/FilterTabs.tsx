import React, {useState, useEffect } from "react";
import "../styles/Calendar.css";

// Define available filter types
const filters = ["All", "GBM Events", "Workshops", "Fundraisers", "Socials", "Hackathons", "Misc"];

// Background highllight color mapping for each filter
const colorMap: Record<string, string> = {
    "All": "#D02F9E",
    "GBM Events": "#e2f5e9",
    "Workshops": "#ecdff1",
    "Fundraisers": "#fbe9e7",
    "Socials": "#fef3c7",
    "Hackathons": "#dbeafe",
    "Misc": "#e5e7eb",
};
  
// Text color mapping for each filter
const textColorMap: Record<string, string> = {
    "All": "white",
    "GBM Events": "#5d7a24",
    "Workshops": "#994e98",
    "Fundraisers": "#bf360c",
    "Socials": "#d97706",
    "Hackathons": "#2563eb",
    "Misc": "#4b5563",
};

// Define props for the FilterTabs component
interface FilterTabsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

// Filter tabs component: Displays a filter navigation or dropdown based on screen size
const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => {

  // State to detect if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1160);

  // Update isMobile state on window resie
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1160);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="filter-tabs-container">

      {/* Dropdown menu on mobile, tab buttons on desktop */}
      {isMobile ? (
        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {/* Dropdown options */}
          {filters.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      ) : (
        <div className="tabs">
          {/* Tab buttons */}
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
                color:
                  filter === type && textColorMap[type]
                    ? textColorMap[type]
                    : "black",
                fontWeight: "600",
              }}
              >
              {type}
            </label>
            </React.Fragment>
          ))}

          {/* Animated glider showing the highlighted tab */}
          <span
            className="glider"
            style={{
              transform: `translateX(${filters.indexOf(filter) * 100}%)`,
              backgroundColor: colorMap[filter] || "e6eef9",
              transition: "all 0.25s ease-out",
            }}
          />
        </div>
      )}
    </div>
  );
};


export default FilterTabs;