import React from "react";
import styles from "./social.module.scss";
import { socialIcons } from "../../constant/utils";

const SocialButton: React.FC = () => {
  return (
    <div
      className={`${styles.social} d-flex justify-content-center align-items-center`}
    >
      {socialIcons.map((item, index) => {
        return (
          <a className={styles.social_icon} href={item.url} key={index}>
            <img src={item.iconSrc} alt={item.name} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialButton;
