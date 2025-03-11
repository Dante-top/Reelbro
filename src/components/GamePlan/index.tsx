import React from "react";
import { gameplanContent } from "../../constant/utils";
import styles from "./gameplan.module.scss";

const GamePlan: React.FC = () => {
  return (
    <div className={`${styles.game}`}>
      <h1 className="mb-5">REELNOMICS: The Game Plan</h1>
      <div className={styles.game_main}>
        <div className={styles.game_desc}>
          {gameplanContent.map((item, index) => {
            return (
              <div className={styles.game_desc_content} key={index}>
                <h3>{item.title}</h3>
                <p className={styles.game_desc_text}>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="d-flex">
          <img
            className={styles.game_gif}
            src="/assets/img/illu_draft.png"
            alt="gameplan"
          />
        </div>
      </div>
    </div>
  );
};

export default GamePlan;
