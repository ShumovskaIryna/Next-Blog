import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=sport"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Sport
      </Link>
      <Link
        href="/blog?cat=study"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Study
      </Link>
      <Link
        href="/blog?cat=entertainment"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Free time
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=travel"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
