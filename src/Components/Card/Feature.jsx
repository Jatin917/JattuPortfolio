import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as MaterialIcons from "react-icons/md";
import "./Feature.css";

const Feature = ({ iconName, iconLabel, link, iconType, name }) => {
  let Icon;
  if (iconType === "fontAwesome") {
    Icon = FontAwesome[iconName];
  } else if (iconType === "materialDesign") {
    Icon = MaterialIcons[iconName];
  }
  return (
    <div className="feature">
      <a href={link} target="_blank" rel="noreferrer" className="feature__circle">
        {Icon && <Icon className="feature__icon" />}
      </a>
      <a className="feature__label">{iconLabel} {name}</a>
    </div>
  );
};

export default Feature;