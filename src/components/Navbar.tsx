"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  return (
    <>
      {/* Admission Strip */}
      <div className={styles.admissionStrip}>
        <div className={styles.admissionStripInner}>
          <span className={styles.stripEmoji}>🎓</span>
          Admissions Open 2026-27 — Jr. KG | Sr. KG | Balvatika | Primary
          <span className={styles.stripEmoji}>📚</span>
        </div>
      </div>

      <nav
        className={`${styles.nav} ${scrolled || !isHome ? styles.navScrolled : ""} ${styles.hasStrip}`}
        id="main-navigation"
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Little Angel's English School Logo"
              width={54}
              height={54}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoText}>
              <span
                className={`${styles.logoName} ${
                  scrolled || !isHome
                    ? styles.logoNameScrolled
                    : styles.logoNameDefault
                }`}
              >
                Little Angel&apos;s
              </span>
              <span className={styles.logoSub}>સાંઈ વિદ્યા મંદિર</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  scrolled || !isHome
                    ? styles.navLinkScrolled
                    : styles.navLinkDefault
                } ${pathname === item.href ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => window.dispatchEvent(new Event("openAdmissionModal"))}
              className={`${styles.navLink} ${styles.ctaButton}`}
            >
              Apply Now ✨
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span
              className={`${styles.hamburgerLine} ${
                scrolled || !isHome
                  ? styles.hamburgerLineScrolled
                  : styles.hamburgerLineDefault
              }`}
            />
            <span
              className={`${styles.hamburgerLine} ${
                scrolled || !isHome
                  ? styles.hamburgerLineScrolled
                  : styles.hamburgerLineDefault
              }`}
            />
            <span
              className={`${styles.hamburgerLine} ${
                scrolled || !isHome
                  ? styles.hamburgerLineScrolled
                  : styles.hamburgerLineDefault
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              window.dispatchEvent(new Event("openAdmissionModal"));
            }}
            className={styles.mobileCta}
          >
            Apply Now ✨
          </button>
        </div>
      </nav>
    </>
  );
}
