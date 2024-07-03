import React, { useState } from "react";

interface HandleModal {
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (): [boolean, HandleModal] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const handleModal: HandleModal = {
    openModal,
    closeModal,
  };
  return [isOpen, handleModal];
};

export default useModal;
