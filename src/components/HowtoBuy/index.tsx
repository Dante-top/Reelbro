import React from "react";
import styles from "./howToBuy.module.scss";
import { BuyContent } from "../../constant/utils";

const HowToBuy: React.FC = () => {
  return (
    <div className={`${styles.buy} container-lg`}>
      <h1 className="mb-5">HOW TO BUY</h1>
      <div className={styles.buy_main}>
        <div className={styles.buy_desc}>
          {BuyContent.map((item, index) => {
            return (
              <div className={styles.buy_desc_content} key={index}>
                <h3>{item.title}</h3>
                <p className={styles.buy_desc_text}>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="d-flex w-100">
          <img
            className={styles.buy_gif}
            src="/assets/img/illu_draft.png"
            alt="HowToBuy"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
