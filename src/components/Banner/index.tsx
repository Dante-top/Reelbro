import React from "react";
import styles from "./banner.module.scss";
import SocialButton from "../SocialButton";
import { DonateForm } from "../Donation";
import { WalletConnectButton } from "../WalletButton";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Banner: React.FC = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={styles.banner_joinus}>
        <div className={styles.banner_joinus_content}>
          <h1 className={styles.banner_btnWallet_title}>
            $REELBRO. dont just invest - Manifest.
          </h1>

          <p className={styles.banner_btnWallet_subTitle}>
            Align your energy. Invest with intention. ReelBro turns good karma
            into abundance — flowing back as wealth, purpose, and peace.
          </p>
          <div
            className={`${styles.banner_joinus_concepts} d-flex gap-2 justify-content-center align-items-center`}
          >
            <span className={styles.banner_joinus_dot}></span>
            <p>
              Up to <span>1000</span>%+ APY available for early stakers
            </p>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start gap-2">
            <div
              className={`${styles.banner_joinus_points} d-flex gap-2 justify-content-center align-items-start`}
            >
              <div
                className={`${styles.banner_joinus_concepts} d-flex gap-2 justify-content-center align-items-center`}
              >
                <span className={styles.banner_joinus_dot}></span>
                <p>LIMITED STAKING POOL</p>
              </div>
              <div
                className={`${styles.banner_joinus_concepts} d-flex gap-2 justify-content-center align-items-center`}
              >
                <span className={styles.banner_joinus_dot}></span>
                <p>MULTIPLE LOCK-UP OPTIONS</p>
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <div
                className={`${styles.banner_joinus_concepts} d-flex gap-2 justify-content-center align-items-center`}
              >
                <span className={styles.banner_joinus_dot}></span>
                <p>CLAIM MONTHLY, STAY FLEXIBLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner_btnWallet}>
        <h2 className={styles.banner_btnWallet_title}>
          MINT REELBRO TOKEN NOW!
        </h2>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          labelStyle={{
            fontSize: 16,
            fontWeight: 500,
            textTransform: "uppercase",
          }}
          digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
          dividerStyle={{ color: "white", height: 1 }}
          separatorStyle={{ color: "black", size: "6px" }}
          duration={0.5}
        />
        <p className={styles.banner_btnWallet_subTitle}>
          $REELBRO presale is live! Send SOL to:
          <br />
          Add
          <br />
          4uBtLTrSajfDDX7sN5nqzZrTBshr5WVX9j3feZAGjSX5
          <br />
          Be early. Be bold. Rewards await.
        </p>
        {/* <a href="https://bit.ly/3FTCS3V" target="_blank" rel="noreferrer">
          <button className={`${styles.walletConnect}`} onClick={() => {}}>
            Presale&nbsp;Coming&nbsp;Soon
          </button>
        </a> */}
        <WalletConnectButton />
        <DonateForm />
      </div>
      <div className={styles.banner_bottom}>
        <div className={`${styles.banner_social}`}>
          <SocialButton />
        </div>
      </div>
      <div className={`${styles.banner_gif}`}>
        <img
          src="/assets/img/gif_banner.GIF"
          alt="gif_banner"
          className={styles.banner_anim}
        />
      </div>
    </div>
  );
};

export default Banner;
