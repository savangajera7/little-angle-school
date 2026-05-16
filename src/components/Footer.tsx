"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerDecor} />
      <div className={styles.footerDecor2} />

      <div className="container">
        <div className={styles.footerGrid}>
          {/* About Column */}
          <div className={styles.footerAbout}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/logo.png"
                alt="Little Angel's English School"
                width={56}
                height={56}
                className={styles.footerLogoImg}
              />
              <div className={styles.footerLogoText}>
                <span className={styles.footerSchoolName}>
                  Little Angel&apos;s English School
                </span>
                <span className={styles.footerSchoolNameGuj}>
                  સાંઈ વિદ્યા મંદિર
                </span>
              </div>
            </div>
            <p className={styles.footerDesc}>
              Nurturing young minds from Jr. KG to 8th Standard with a blend of
              modern education and traditional values. Our new campus in Singarva
              provides the perfect environment for holistic child development.
            </p>
            <div className={styles.trustBadge}>
              🏛️ Managed by Naagneshwari Education Trust
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <div className={styles.footerLinks}>
              <Link href="/" className={styles.footerLink}>
                <span>→</span> Home
              </Link>
              <Link href="/about" className={styles.footerLink}>
                <span>→</span> About Us
              </Link>
              <Link href="/academics" className={styles.footerLink}>
                <span>→</span> Academics
              </Link>
              <Link href="/gallery" className={styles.footerLink}>
                <span>→</span> Gallery
              </Link>
              <Link href="/contact" className={styles.footerLink}>
                <span>→</span> Contact & Admissions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <a 
                href="https://maps.app.goo.gl/mTGj4dMCMCYoDyNR8" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactText}
              >
                Opp. Anant Sky, Nr. Maruti Residency-3,
                <br />
                Vadvali Chali, Singarva, Ahmedabad
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div className={styles.contactText}>
                <a href="tel:+918866160867">+91 88661 60867</a>
                <a href="tel:+917802841742">+91 78028 41742</a>
                <a href="tel:+919998040867">+91 99980 40867</a>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.50395277712045!2d72.69570014786272!3d23.021449960093722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87df694d97f5%3A0xf37d5c296060b675!2sAnant%20Sky!5e0!3m2!1sen!2sus!4v1778926271488!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Angel's English School Location"
              />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Little Angel&apos;s English School. All
            rights reserved.
          </p>
          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
            id="back-to-top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
