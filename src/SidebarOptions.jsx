import React from "react";

const SidebarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`${selected && "sidebarOption--active"} sidebarOption`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
