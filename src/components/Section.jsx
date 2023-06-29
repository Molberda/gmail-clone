import React from "react";
import "../CSS/Section.css";

const Section = ({ icon, title, color, selected }) => {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `.2em solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <figure>{icon}</figure>
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
