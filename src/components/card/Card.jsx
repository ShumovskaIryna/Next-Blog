import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/food.png" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>26.10.23 </span>
          <span className={styles.category}> FOOD</span>
        </div>
        <Link href={`/posts`}>
          <h1>Lorem ipsum dolor sit, adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          inventore voluptatum laudantium repellat ducimus unde aspernatur fuga.
        </p>
        <Link href={`/posts`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
