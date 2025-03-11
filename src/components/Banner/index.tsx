import React from "react";
import styles from "./banner.module.scss";
import SocialButton from "../SocialButton";

const Banner: React.FC = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={styles.banner_subtitle}>
        <h2>WHERE SPORTS. CHARITY & CRYPTO COLLIDE</h2>
      </div>
      <div className={styles.banner_bottom}>
        <div className={`${styles.banner_social}`}>
          <SocialButton />
        </div>
        <div className={styles.banner_btnWallet}>
          <button className={`${styles.walletConnect}`} onClick={() => {}}>
            CONNECT&nbsp;WALLET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
