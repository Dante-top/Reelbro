import React from "react";
import styles from "./banner.module.scss";
import SocialButton from "../SocialButton";

const Banner: React.FC = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={styles.banner_subtitle}>
        <h2>WHERE SPORTS. CHARITY & CRYPTO COLLIDE</h2>
      </div>
      <div className={styles.banner_gif}>
        <img
          src="/assets/img/gif_banner.GIF"
          alt="gif_banner"
          className={styles.banner_anim}
        />
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
          $REELBRO presale is live! Send SOL to:
          <br />
          Add
          <br />
          4uBtLTrSajfDDX7sN5nqzZrTBshr5WVX9j3feZAGjSX5
          <br />
          Be early. Be bold. Rewards await.
        </p>
        <button className={`${styles.walletConnect}`} onClick={() => {}}>
          CONNECT&nbsp;WALLET
        </button>
      </div>
    </div>
  );
};

export default Banner;
