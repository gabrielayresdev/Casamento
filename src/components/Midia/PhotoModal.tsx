import React from "react";
import styles from "./PhotoModal.module.sass";
import CloseIcon from "/src/assets/icons/xmark-solid.svg";

const PhotoModal = ({
  link,
  changeStatus,
}: {
  link: string;
  changeStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={styles.modalContainer}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          changeStatus(false);
        }
      }}
      style={{ top: `${window.scrollY}px` }}
    >
      <div className={styles.modalContent}>
        <div className={styles.close} onClick={() => changeStatus(false)}>
          <img src={CloseIcon} alt="Fechar modal" />
        </div>
        <img src={link} />
      </div>
    </div>
  );
};

export default PhotoModal;
