import ScrollReveal from "./ScrollReveal";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "blue" | "orange";
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = "blue",
  delay = 0,
}: FeatureCardProps) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div className={styles.card}>
        <div
          className={`${styles.iconWrapper} ${
            variant === "blue" ? styles.iconBlue : styles.iconOrange
          }`}
        >
          {icon}
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </ScrollReveal>
  );
}
