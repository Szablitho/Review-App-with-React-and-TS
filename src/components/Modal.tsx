import { ReactNode } from "react";
import styles from "./Modal.module.css";
interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Modal = ({ children, onClose }: Props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
