import React, { useEffect, useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      // Disable background scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable background scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <Listing data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
