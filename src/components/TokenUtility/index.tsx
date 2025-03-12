import React from "react";
import styles from "./token.module.scss";
import { tokenUtilityContent } from "../../constant/utils";

const TokenUtility: React.FC = () => {
  return (
    <div className={`${styles.token} container-lg`}>
      <h1 className="mb-5">REELNOMICS: The token Plan</h1>
      <div className={styles.token_main}>
        <div className="d-flex w-100">
          <img
            className={styles.token_gif}
            src="/assets/img/illu_draft.png"
            alt="token"
          />
        </div>
        <div className={styles.token_desc}>
          {tokenUtilityContent.map((item, index) => {
            return (
              <div className={styles.token_desc_content} key={index}>
                <h3>{item.title}</h3>
                <p className={styles.token_desc_text}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TokenUtility;
