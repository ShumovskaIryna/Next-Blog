import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        <Image src="/github.png" alt="github" width={24} height={24} />
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
