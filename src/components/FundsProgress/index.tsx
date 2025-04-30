import React, { useEffect, useState } from "react";
import styles from "./progress.module.scss";

const START_AMOUNT = 9000;
const DAILY_INCREASE = 2200;
const TARGET_AMOUNT = 35000;
// You can customize the campaign start date here
const CAMPAIGN_START_DATE = new Date("2025-04-30");

const FundProgressBar: React.FC = () => {
  const [currentAmount, setCurrentAmount] = useState<number>(0);

  const calculateAmount = () => {
    const today = new Date();
    const daysElapsed = Math.floor(
      (today.getTime() - CAMPAIGN_START_DATE.getTime()) / (1000 * 60 * 60 * 24),
    );
    return Math.min(START_AMOUNT + daysElapsed * DAILY_INCREASE, TARGET_AMOUNT);
  };

  useEffect(() => {
    // Set initial amount
    setCurrentAmount(calculateAmount());

    // Calculate milliseconds until next midnight
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();

    // Set a timeout to update at next midnight
    const midnightTimeout = setTimeout(() => {
      setCurrentAmount(calculateAmount());

      // Then update every 24 hours after
      const dailyInterval = setInterval(() => {
        setCurrentAmount(calculateAmount());
      }, 1000 * 60 * 60 * 24);

      // Clean up interval on unmount
      return () => clearInterval(dailyInterval);
    }, msUntilMidnight);

    // Cleanup the timeout on unmount
    return () => clearTimeout(midnightTimeout);
  }, []);

  const progressPercent = Math.floor((currentAmount / TARGET_AMOUNT) * 100);
  console.log("progressPercent: ", progressPercent);

  return (
    <div className={styles.progressBar}>
      <p>
        Fund Raised: ${currentAmount.toLocaleString()} / $
        {TARGET_AMOUNT.toLocaleString()}
      </p>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FundProgressBar;
