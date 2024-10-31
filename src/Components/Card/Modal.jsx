import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

const Modal = ({ data, close }) => {
  const {
    imageUrl,
    link,
    title,
    techStack,
    description,
    numBedroom,
    githubLink,
    numWashrooms,
    livingSpace,
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={imageUrl}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__title">{title}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="">Tech Stack: {
            techStack.map((tech, id)=>{
              return <>
                <span key={id}>{tech} {id<techStack.length-1 && ", "}</span>
              </>
            })
          }</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <Feature link={githubLink} iconName={"FaGithub"} iconLabel={FaGithub} iconType="fontAwesome" name="Github"/>
          <Feature link={link}  iconName={"MdPreview"} iconLabel={MdPreview} iconType="materialDesign" name="Preview"/> 
          {/* <Feature  iconName={"FaRuler"} iconLabel={livingSpace} />  */}
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">{description}</p>
        </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
