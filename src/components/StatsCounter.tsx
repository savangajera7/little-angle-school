"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./StatsCounter.module.css";

interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: "🎓", value: 10, suffix: "+", label: "Years of Trust" },
  { icon: "👨‍🎓", value: 500, suffix: "+", label: "Happy Students" },
  { icon: "👩‍🏫", value: 30, suffix: "+", label: "Qualified Teachers" },
  { icon: "🏆", value: 100, suffix: "%", label: "Parent Satisfaction" },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className={styles.statNumber}>
      {count}
      <span className={styles.statSuffix}>{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.stats} ref={ref}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
