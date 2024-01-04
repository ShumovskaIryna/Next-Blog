import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="https://www.instagram.com/_junior_pandaa_/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/iryna-shumovska-3bb58422b/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="https://github.com/ShumovskaIryna">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
      </div>
      <Link href="/" className={styles.logo}>
        PandaBlog
      </Link>
      <div className={styles.links}>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
