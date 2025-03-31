import React from "react";
import styles from "./banner.module.scss";
import SocialButton from "../SocialButton";

const Banner: React.FC = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={styles.banner_subtitle}>
        <h1>WHERE SPORTS. CHARITY & CRYPTO COLLIDE</h1>
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
      <div className={styles.banner_joinus}>
        <div className={styles.banner_joinus_content}>
          <h1 className={styles.banner_btnWallet_title}>
            $REELBRO. the people's meme coin.
          </h1>
          <p className={styles.banner_btnWallet_subTitle}>
            The Flockerz revolutionary Vote-To-Earn platform puts the POWER in
            your hands.
          </p>
          <div className="d-flex flex-column justify-content-start">
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <div
                className={`${styles.banner_joinus_concepts} d-flex gap-2 justify-content-center align-items-center`}
              >
                <span className={styles.banner_joinus_dot}></span>
                <p>EARN BY VOTING</p>
              </div>
              <div
                className={`${styles.banner_joinus_concepts} d-flex gap-2 justify-content-center align-items-center`}
              >
                <span className={styles.banner_joinus_dot}></span>
                <p>HUGE EARLY REWARDS</p>
              </div>
            </div>
          </div>
          <button className={`${styles.walletConnect}`} onClick={() => {}}>
            JOIN&nbsp;THE&nbsp;$REELBRO!
          </button>
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
