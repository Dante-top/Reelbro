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
        <h2 className={styles.banner_btnWallet_title}>
          MINT REELBRO TOKEN NOW!
        </h2>
        <p className={styles.banner_btnWallet_subTitle}>
          You can now claim your $REELBRO tokens. Plus, stake your tokens to
          earn rewards!
          <br />
          Add
          <br />
          0xb33D999469a7e6b9EbC25A3a05248287b855eD46 to your wallet to see your
          $FLOCK.
        </p>
        <button className={`${styles.walletConnect}`} onClick={() => {}}>
          CONNECT&nbsp;WALLET
        </button>
      </div>
    </div>
  );
};

export default Banner;
