import React from "react";
import styles from "./about.module.scss";
import { aboutContent } from "../../constant/utils";

const About: React.FC = () => {
  return (
    <div
      className={`${styles.about} d-flex justify-content-center align-items-center`}
      id="about"
    >
      <div className={styles.about_header}>
        <div className={styles.about_header_desc}>
          <h1>
            Where Meme Meets Manifestation — Built on Solana, Backed by Purpose
          </h1>
          <p>
            $REELBRO isn’t just another meme coin. It’s a karma-fuelled digital
            asset that brings together investors, communities, and real-world
            causes in a movement powered by purpose and belief.
          </p>
          <p>
            Born on Solana, $REELBRO turns digital assets into real impact —
            blending the excitement of meme culture with long-term utility that
            makes a difference beyond the charts.
          </p>
        </div>
        <div className={styles.about_header_img}>
          <img src="/assets/img/img_fish.png" alt="ReelBro_about_img" />
        </div>
      </div>
      <div className={styles.about_main_content}>
        {aboutContent.map((item, index) => {
          return (
            <div className={styles.about_main_desc} key={index}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.about_footer_content}>
        <h1>Don’t Just Invest — Manifest</h1>
        <p>
          When you hold $REELBRO, you’re not just buying a coin. You’re aligning
          with the law of attraction — planting energy into the universe that
          supports wealth, health, opportunity, and connection. This is the
          token that gives back. To holders. To causes. To the world.
        </p>
        <h3>You give. You grow. You glow.</h3>
        <h3>Now it’s your turn to believe… and receive.</h3>
      </div>
    </div>
  );
};

export default About;
