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
      </div>
      <div className={styles.banner_btnWallet}>
        <h2>MINT REELBRO TOKEN NOW!</h2>
        <p>
          You can now claim your $FLOCK tokens. Plus, stake your tokens to earn
          rewards! Add 0xb33D999469a7e6b9EbC25A3a05248287b855eD46 to your wallet
          to see your $FLOCK.
        </p>
        <button className={`${styles.walletConnect}`} onClick={() => {}}>
          CONNECT&nbsp;WALLET
        </button>
      </div>
    </div>
  );
};

export default Banner;
