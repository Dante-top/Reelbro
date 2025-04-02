import React from "react";
import styles from "./tokenomics.module.scss";

const Tokenomics: React.FC = () => {
  return (
    <div
      className={`${styles.tokenomics} d-flex justify-content-center align-items-center`}
    >
      <img
        className={styles.tokenomics_img}
        src="/assets/img/Artboard 5.png"
        alt=""
      />
    </div>
  );
};

export default Tokenomics;
