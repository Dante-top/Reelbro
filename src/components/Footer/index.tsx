import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div
      className={`${styles.footer} d-flex justify-content-center align-items-center`}
    >
      <p>
        Disclaimer: ReelBro is a high-risk, speculative meme token. The crypto
        market is volatile, and prices can swing wildly — you could lose your
        entire investment. Always do your own research (DYOR), and never invest
        more than you’re willing to lose. Tax rules vary by location, and
        profits may be taxable, so check your local laws. Nothing here is
        financial advice. Just vibes, memes, and a dream to hit $1M
      </p>
    </div>
  );
};

export default Footer;
