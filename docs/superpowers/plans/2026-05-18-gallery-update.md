# Gallery Image Configuration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transition the gallery page from placeholder images to 13 real-world school photos using a clean, easily configurable JSON data layer.

**Architecture:** Create `src/data/gallery.json` containing all gallery images, categories, and labels. Update `src/app/gallery/page.tsx` to read directly from this JSON data file and render the images using Next.js static-compatible `<Image>` tags.

**Tech Stack:** Next.js (App Router, static export), React, TypeScript.

---

### Task 1: Create Gallery JSON Configuration File

**Files:**
- Create: `src/data/gallery.json`

- [ ] **Step 1: Write the complete `src/data/gallery.json` file**
  Create the JSON config containing all 13 images mapped to the correct category and custom caption:
  ```json
  [
    {
      "src": "/images/file_0000000012a872088edd2f005f8621f4.png",
      "label": "Little Angels School Main Entrance",
      "category": "Campus"
    },
    {
      "src": "/images/WhatsApp Image 2026-05-18 at 11.18.49.JPG.jpeg",
      "label": "Modern Campus Reception & Corridor",
      "category": "Campus"
    },
    {
      "src": "/images/DSC09403.JPG.jpeg",
      "label": "Bright Learning Corridor",
      "category": "Campus"
    },
    {
      "src": "/images/DSC09445.JPG.jpeg",
      "label": "Spacious School Assembly Hall",
      "category": "Campus"
    },
    {
      "src": "/images/IMG_0475.JPG.jpeg",
      "label": "Interactive Classroom Session",
      "category": "Classrooms"
    },
    {
      "src": "/images/IMG20230213172326.jpg.jpeg",
      "label": "Engaging Science Laboratory Experiments",
      "category": "Activities"
    },
    {
      "src": "/images/IMG20230213173033.jpg.jpeg",
      "label": "Creative Arts, Crafts & Drawing Session",
      "category": "Activities"
    },
    {
      "src": "/images/WhatsApp Image 2026-03-14 at 11.32.15 AM.jpeg",
      "label": "Students Morning Assembly and Prayers",
      "category": "Activities"
    },
    {
      "src": "/images/WhatsApp Image 2026-05-18 at 5.11.50 PM.jpeg",
      "label": "Fun Recreational Playground Games",
      "category": "Activities"
    },
    {
      "src": "/images/IMG20250111092714.jpg.jpeg",
      "label": "Republic Day & Flag Hoisting Ceremony",
      "category": "Events"
    },
    {
      "src": "/images/Screenshot_20221203_113435.jpg.jpeg",
      "label": "Annual Day Celebrations & Speeches",
      "category": "Events"
    },
    {
      "src": "/images/VIK_6197.JPG.jpeg",
      "label": "Sports Day Grand Prize Distribution",
      "category": "Events"
    },
    {
      "src": "/images/VIK_6292.JPG.jpeg",
      "label": "Colorful Student Dance Performance",
      "category": "Events"
    }
  ]
  ```

- [ ] **Step 2: Verify the JSON structure is valid**
  Run: `node -e "JSON.parse(require('fs').readFileSync('src/data/gallery.json', 'utf8'))"`
  Expected: Command runs successfully without syntax errors.

- [ ] **Step 3: Commit the JSON config**
  ```bash
  git add src/data/gallery.json
  git commit -m "feat: add JSON configuration for school gallery images"
  ```

---

### Task 2: Update Gallery Page Components

**Files:**
- Modify: `src/app/gallery/page.tsx`

- [ ] **Step 1: Replace hardcoded `galleryItems` array with imports from JSON**
  Modify [src/app/gallery/page.tsx](file:///home/savan/IdeaProjects/little-angle-school/src/app/gallery/page.tsx) to import the JSON list and use it in rendering.
  Replace lines 9 to 22:
  ```typescript
  import galleryItemsData from "@/data/gallery.json";

  interface GalleryItem {
    src: string;
    label: string;
    category: string;
  }

  const galleryItems = galleryItemsData as GalleryItem[];
  ```

- [ ] **Step 2: Verify component uses exact props and attributes**
  Ensure `<Image>` components inside `src/app/gallery/page.tsx` have `loading="lazy"` to optimize static load times.
  The updated file should look like this:
  ```typescript
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
  ```

- [ ] **Step 3: Commit the updated gallery page**
  ```bash
  git add src/app/gallery/page.tsx
  git commit -m "feat: wire JSON-driven image array to gallery component"
  ```

---

### Task 3: Run Validation & Compilation Build Tests

- [ ] **Step 1: Run TypeScript checks and eslint**
  Run: `npm run lint`
  Expected: Pass with zero compilation or lint errors.

- [ ] **Step 2: Perform static Next.js production build**
  Run: `npm run build`
  Expected: Complete successfully and generate static export HTML pages in `out/`.
