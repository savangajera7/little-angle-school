"use client";

import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    quote:
      "Little Angel's has transformed my child's confidence and love for learning. The teachers are incredibly caring and the new campus is beautiful!",
    name: "Priya Sharma",
    initials: "PS",
    role: "Parent of Jr. KG Student",
  },
  {
    quote:
      "We were looking for a school that balances academics with values. Little Angel's does exactly that. Our son looks forward to school every day!",
    name: "Rajesh Patel",
    initials: "RP",
    role: "Parent of Std 3 Student",
  },
  {
    quote:
      "The activity-based learning approach is wonderful. My daughter has developed so much since joining Little Angel's. Highly recommended for all parents!",
    name: "Meena Desai",
    initials: "MD",
    role: "Parent of Sr. KG Student",
  },
  {
    quote:
      "The personal attention each child receives here is remarkable. The staff truly cares about every student's growth. Best decision we made for our child.",
    name: "Amit Joshi",
    initials: "AJ",
    role: "Parent of Std 1 Student",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.slider}>
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Parents"
          highlight="Say About Us"
          subtitle="Hear from the families who trust us with their children's education"
        />

        <div className={styles.track}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.testimonial} ${
                i === active ? styles.testimonialActive : ""
              }`}
            >
              <div className={styles.card}>
                <span className={styles.quoteIcon}>&ldquo;</span>
                <div className={styles.content}>
                  <div className={styles.stars}>
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                  <p className={styles.quoteText}>{t.quote}</p>
                  <div className={styles.author}>
                    <div className={styles.authorAvatar}>{t.initials}</div>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.authorRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
