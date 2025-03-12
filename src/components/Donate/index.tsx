import React from "react";
import styles from "./donate.module.scss";

const Donate: React.FC = () => {
  return (
    <div className={`${styles.donate} container-lg`}>
      <div className="container-lg text-center">
        <h1>Play-to-Donate | Stake-to-Win | HODL & Hustle</h1>
        <div className={styles.donate_illust}>
          <img
            className={styles.donate_illust_img}
            src="/assets/img/illustration.png"
            alt="illustration"
          />
        </div>
        <p className={styles.donate_desc}>
          We’re not just another meme token—we’re a movement. Whether
          you're stacking sacks like Football Bruv, holding steady like Cricket
          King, or going full send like Rugby Lad, every transaction
          supports sports, grassroots charities, and real-world impact.
        </p>
      </div>
    </div>
  );
};

export default Donate;
