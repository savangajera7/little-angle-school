"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Image */}
      <div className={styles.heroBg}>
        <Image
          src="/images/school-building.jpeg"
          alt="Little Angel's English School - New Campus"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay */}
      <div className={styles.heroOverlay} />

      {/* Floating Shapes */}
      <div className={`${styles.floatingShape} ${styles.shape1}`} />
      <div className={`${styles.floatingShape} ${styles.shape2}`} />
      <div className={`${styles.floatingShape} ${styles.shape3}`} />

      {/* Content */}
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            Admissions Open 2026-27
          </span>
        </motion.div>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Little{" "}
          <span className={styles.heroTitleHighlight}>Angels</span>
          <br />
          Learn & Grow
        </motion.h1>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          સાંઈ વિદ્યા મંદિર — જ્ઞાનનું ઘર
        </motion.p>

        <motion.p
          className={styles.heroDesc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Nurturing young minds from Jr. KG to 8th Standard with a perfect blend
          of modern education, activity-based learning, and traditional values at
          our brand new campus in Singarva, Ahmedabad.
        </motion.p>

        <motion.div
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link href="/contact" className={styles.heroPrimary}>
            Apply for Admission ✨
          </Link>
          <Link href="/about" className={styles.heroSecondary}>
            Explore Our School →
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        SCROLL
      </motion.div>
    </section>
  );
}
