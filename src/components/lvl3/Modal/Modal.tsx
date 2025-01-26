import React, { useRef } from 'react';
import styles from './modal.module.css';
import { IoCloseSharp } from "react-icons/io5";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={isOpen ? styles.modal : styles.modalClose}>

      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}><IoCloseSharp className={styles.icon} /></button>
        {children}
      </div>
    </dialog>
  );
};
