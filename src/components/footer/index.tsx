import React from "react";
import styles from "./footer.module.scss";
import SocialButton from "../SocialButton";

const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer} container-lg text-center`}>
      <h1 className="mb-5">JOIN THE MOVEMENT</h1>
      <img
        className={`${styles.footer_img} mb-5`}
        src="/assets/img/illu_draft.png"
        alt="gameplan"
      />
      <h1 className="mb-5">SOCIALS</h1>
      <SocialButton />
    </div>
  );
};

export default Footer;
