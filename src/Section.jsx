import React from "react";

const Section = ({ color, title, selected, Icon }) => {
  return (
    <div
      className={`${selected && "section--selected"} section`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
