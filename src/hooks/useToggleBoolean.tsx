import { useState } from "react";

export default function useToggleBoolean(state = false) {
  const [isOpen, setIsOpen] = useState(state);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, handleOpen, handleClose };
}
