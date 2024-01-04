import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/PandaPhoto.jpeg"
            alt="ProfilePhoto"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Frontend Developer</h1>
          <p className={styles.postDesc}>
            Being self-motivated, I appreciate collective efforts and
            collaborate productively within group settings. I am highly
            motivated in web applications development.
            <br />
            Skills:
            <br />* JavaScript, ReactJS, NextJS and VueJS.
            <br />* HTML5, CSS3, TypeScript, Redux-Toolkit, Bootstrap, REST API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
