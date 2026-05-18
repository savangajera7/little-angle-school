"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./gallery.module.css";
import galleryItemsData from "@/data/gallery.json";

interface GalleryItem {
  src: string;
  label: string;
  category: string;
}

const galleryItems = galleryItemsData as GalleryItem[];

const categories = ["All", "Campus", "Classrooms", "Events", "Activities"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <ScrollReveal>
            <h1 className={styles.pageHeroTitle}>
              Our <span className={styles.pageHeroHighlight}>Gallery</span>
            </h1>
            <p className={styles.pageHeroSub}>
              Take a visual tour of our beautiful campus, classrooms, and vibrant school life
            </p>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Gallery</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className="container">
          {/* Filter Tabs */}
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterTab} ${
                  active === cat ? styles.filterTabActive : ""
                }`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.galleryGrid}>
            {filtered.map((item, i) => (
              <ScrollReveal key={`${item.label}-${i}`} delay={i * 0.05}>
                <div
                  className={styles.galleryItem}
                  onClick={() => setLightbox(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={400}
                    height={300}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryLabel}>{item.label}</span>
                    <span className={styles.galleryCategory}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <Image
            src={lightbox.src}
            alt={lightbox.label}
            width={1200}
            height={800}
            className={styles.lightboxImage}
            style={{ objectFit: "contain" }}
          />
          <p className={styles.lightboxCaption}>{lightbox.label}</p>
        </div>
      )}
    </>
  );
}
