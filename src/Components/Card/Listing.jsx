import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, title, Status, link,  numBedroom, numWashrooms, livingSpace } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          {/* <a href={link} target="_blank" className="listing__type" rel="noreferrer">Preview</a> */}
          <div className="listing__row">
            <span className="listing__title">{title}</span>
          </div>
          <div className="listing__row">
            <span className="listing__Status">{Status}</span>
          </div>
          {/* <div className="listing__row">
            <Feature iconName={"FaBed"} iconLabel={numBedroom} />
            <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
            <Feature iconName={"FaRuler"} iconLabel={livingSpace} />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
