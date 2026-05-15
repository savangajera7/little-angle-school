import ScrollReveal from "./ScrollReveal";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={`${styles.heading} ${align === "left" ? styles.headingLeft : ""}`}>
        {label && <span className={styles.label}>✦ {label}</span>}
        <h2 className={styles.title}>
          {title}{" "}
          {highlight && (
            <span className={styles.titleHighlight}>{highlight}</span>
          )}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.decorLine}>
          <span className={styles.decorDot} />
          <span className={styles.decorDash} />
          <span className={styles.decorDot} />
        </div>
      </div>
    </ScrollReveal>
  );
}
