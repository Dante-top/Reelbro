import React from "react";
import styles from "./tokenomics.module.scss";
import { tokenListedContent } from "../../constant/utils";

const Tokenomics: React.FC = () => {
  return (
    <div
      className={`${styles.tokenomics} d-flex justify-content-center align-items-center`}
      id="tokenomics"
    >
      <div
        className={`${styles.tokenomics_title} justify-content-center align-items-center`}
      >
        <h1>$REELBRO TOKENOMICS</h1>
        <h3>TOTAL SUPPLY: 1,000,000,000</h3>
      </div>
      <h3 className="mt-2">Our Token Listed in </h3>
      <div className={styles.linksTokenListedContent}>
        {tokenListedContent.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                className={styles.tokenListedContent_img}
                src={item.imgSrc}
                alt={item.name}
              />
            </a>
          );
        })}
      </div>
      <div className={styles.tokenomics_img}>
        <img
          className={styles.tokenomics_img_graph}
          src="/assets/img/img_graph.png"
          alt=""
        />
        <img
          className={styles.tokenomics_img_graph}
          src="/assets/img/img_fish.png"
          alt=""
        />
      </div>
      <h3>TEAM & DEVELOPMENT (15% OF SUPPLY)</h3>
      <ul className={styles.tokenomics_detail}>
        <li className="">
          <span>150,000,000</span> TOKENS ALLOCATED
        </li>
        <li className="">GRADUAL RELEASE FOR LONG-TERM SUSTAINABILITY</li>
      </ul>
    </div>
  );
};

export default Tokenomics;
