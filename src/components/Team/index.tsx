import React from "react";
import styles from "./team.module.scss";
import { teamMembers } from "../../constant/utils";

const Team: React.FC = () => {
  return (
    <div
      className={`${styles.team} d-flex flex-column justify-content-center align-items-center`}
    >
      <h1>MEET THE TEAM</h1>
      {teamMembers.map((item, index) => {
        return (
          <div className={styles.team_member} key={index}>
            <img
              src={item.avatar}
              className={styles.team_avatar}
              alt={item.name}
            />
            <div
              className={`${styles.team_desc} d-flex flex-column justify-content-center align-items-start`}
            >
              <h1>{item.name}</h1>
              <p className={styles.team_descText}>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
