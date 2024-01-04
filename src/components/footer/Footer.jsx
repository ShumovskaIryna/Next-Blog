import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={65} height={50} />
          <h2 className={styles.logoText}>PandaBlog</h2>
          <sup>Next.js</sup>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis.
        </p>
        <div className={styles.icons}>
          <Link href="https://www.instagram.com/_junior_pandaa_/">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/iryna-shumovska-3bb58422b/">
            <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
          </Link>
          <Link href="https://github.com/ShumovskaIryna">
            <Image src="/github.png" alt="github" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="http://localhost:3000/blog?cat=coding">Coding</Link>
          <Link href="http://localhost:3000/blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.instagram.com/_junior_pandaa_/">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/iryna-shumovska-3bb58422b/">
            Linkedin
          </Link>
          <Link href="https://github.com/ShumovskaIryna">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
