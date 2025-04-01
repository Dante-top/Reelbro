import React from "react";
import styles from "./roadmap.module.scss";
import { roadmapStages } from "../../constant/utils";

const RoadMap: React.FC = () => {
  return (
    <div className={styles.roadmap} id="roadmap">
      <h1>RoadMap.. Dont just buy - believe and receive</h1>
      {roadmapStages.map((item, index) => {
        return (
          <div
            className={`${styles.roadmap_content} ${
              index % 2 !== 0 ? "" : styles.reverse_content
            }`}
            key={index}
          >
            <div className={styles.roadmap_content_stage_title}>
              <h1>{item.title}</h1>
            </div>
            <div className={styles.roadmap_content_stage}>
              <h2>{item.step}</h2>
              <ul className="">
                {item.content.map((content, index) => {
                  return (
                    <li className="" key={index}>
                      {content}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoadMap;
