import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Dropdown = ({ option, menuName, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${className}`}>
      <button onClick={handleDropdown} className="buttonDropdown">
        <span className="buttonText">{menuName}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={isOpen ? "faChevronDown rotate" : "faChevronDown"}
        />
      </button>
      {isOpen && <p className="dropdownContent">{option}</p>}
    </div>
  );
};
