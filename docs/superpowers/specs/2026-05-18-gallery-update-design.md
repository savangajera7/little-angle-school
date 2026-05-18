# Gallery Image Update and Configuration Design Spec

**Date**: 2026-05-18
**Status**: Approved
**Author**: Antigravity

## 1. Goal

The goal is to update the gallery page of the Little Angels English School website with 13 real school photographs recently added by the user to the `public/images/` directory. Currently, the gallery is populated with placeholder items that all reference a single `school-building.jpeg` image. We will transition the gallery from a hardcoded array in the component to an easily configurable JSON-driven layout.

## 2. Requirements & Constraints

*   **All 13 new images** must be fully integrated.
*   **Static Export Compatibility**: Since the project is configured for static exports (`output: "export"` in `next.config.ts`), we cannot use dynamic directory scanning at runtime.
*   **JSON-driven configuration**: We will move the gallery list structure to `src/data/gallery.json`.
*   **SEO and UX**: Each image should have semantic captions and descriptive alt tags based on the image's context.

## 3. Data Schema

The data structure will reside in `src/data/gallery.json` as an array of items:

```json
[
  {
    "src": "/images/file_0000000012a872088edd2f005f8621f4.png",
    "label": "Little Angels School Main Entrance",
    "category": "Campus"
  },
  ...
]
```

Where:
*   `src`: The relative path to the image in the `public` directory.
*   `label`: The caption displayed on hover and in the lightroom viewer.
*   `category`: One of `Campus`, `Classrooms`, `Events`, `Activities`.

## 4. Detailed Image Mapping

We map the newly added untracked images in `public/images/` as follows:

| Image File Name | Category | Label |
| :--- | :--- | :--- |
| `file_0000000012a872088edd2f005f8621f4.png` | Campus | Little Angels School Main Entrance |
| `WhatsApp Image 2026-05-18 at 11.18.49.JPG.jpeg` | Campus | Modern Campus Reception & Corridor |
| `DSC09403.JPG.jpeg` | Campus | Bright Learning Corridor |
| `DSC09445.JPG.jpeg` | Campus | Spacious School Assembly Hall |
| `IMG_0475.JPG.jpeg` | Classrooms | Interactive Classroom Session |
| `IMG20230213172326.jpg.jpeg` | Activities | Engaging Science Laboratory Experiments |
| `IMG20230213173033.jpg.jpeg` | Activities | Creative Arts, Crafts & Drawing Session |
| `WhatsApp Image 2026-03-14 at 11.32.15 AM.jpeg` | Activities | Students Morning Assembly and Prayers |
| `WhatsApp Image 2026-05-18 at 5.11.50 PM.jpeg` | Activities | Fun Recreational Playground Games |
| `IMG20250111092714.jpg.jpeg` | Events | Republic Day & Flag Hoisting Ceremony |
| `Screenshot_20221203_113435.jpg.jpeg` | Events | Annual Day Celebrations & Speeches |
| `VIK_6197.JPG.jpeg` | Events | Sports Day Grand Prize Distribution |
| `VIK_6292.JPG.jpeg` | Events | Colorful Student Dance Performance |

## 5. Components to Modify

*   **`src/data/gallery.json` [NEW]**: Establish the data config file.
*   **`src/app/gallery/page.tsx` [MODIFY]**: 
    *   Import data from `src/data/gallery.json`.
    *   Use imported items to populate the grid dynamically.
    *   Maintain current interactive tabs, layout style, lightbox viewer, and Framer Motion animation properties.
