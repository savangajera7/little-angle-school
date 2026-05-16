"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import styles from "./AdmissionBanner.module.css";

export default function AdmissionBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <ScrollReveal direction="scale">
          <div className={styles.bannerContent}>
            <span className={styles.bannerEmoji}>🎓</span>
            <h2 className={styles.bannerTitle}>
              Admissions{" "}
              <span className={styles.bannerHighlight}>Open</span> for 2026-27
            </h2>
            <p className={styles.bannerDesc}>
              Give your child the gift of quality education. Join our family of
              happy learners at Little Angel&apos;s English School.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new Event("openAdmissionModal"))} 
              className={styles.bannerBtn}
            >
              Apply Now →
            </button>
            <div className={styles.bannerPhones}>
              <a href="tel:+918866160867" className={styles.phoneLink}>
                📞 +91 88661 60867
              </a>
              <a href="tel:+917802841742" className={styles.phoneLink}>
                📞 +91 78028 41742
              </a>
              <a href="tel:+919998040867" className={styles.phoneLink}>
                📞 +91 99980 40867
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
