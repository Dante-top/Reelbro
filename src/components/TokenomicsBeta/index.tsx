import React from "react";
import styles from "./tokenomicsbeta.module.scss";

const TokenomicsBeta: React.FC = () => {
  return (
    <div
      className={`${styles.tokenomicsbeta} d-flex justify-content-center align-items-center`}
    >
      <img
        className={styles.tokenomicsbeta_img}
        src="/assets/img/Artboard 6.png"
        alt=""
      />
    </div>
  );
};

export default TokenomicsBeta;
