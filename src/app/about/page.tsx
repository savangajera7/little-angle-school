import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AdmissionBanner from "@/components/AdmissionBanner";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Little Angel's English School (સાંઈ વિદ્યા મંદિર), managed by Naagneshwari Education Trust. Our mission, vision, values, and commitment to quality education in Singarva, Ahmedabad.",
};

const values = [
  { icon: "💛", title: "Compassion", desc: "Teaching kindness and empathy towards others" },
  { icon: "📏", title: "Discipline", desc: "Building character through consistent routines" },
  { icon: "🔍", title: "Curiosity", desc: "Encouraging questions and exploration" },
  { icon: "⭐", title: "Excellence", desc: "Striving for the best in every endeavor" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <ScrollReveal>
            <h1 className={styles.pageHeroTitle}>
              About <span className={styles.pageHeroHighlight}>Us</span>
            </h1>
            <p className={styles.pageHeroSub}>
              Nurturing young minds since the beginning — our story, mission, and values
            </p>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal direction="left">
              <div className={styles.storyImage}>
                <Image
                  src="/images/school-building.jpeg"
                  alt="Little Angel's English School Campus"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.storyContent}>
                <h2>
                  Our <span className={styles.storyHighlight}>Story</span>
                </h2>
                <p>
                  Little Angel&apos;s English School was founded with a simple yet profound
                  vision — to create a nurturing educational environment where every
                  child can discover their unique potential and develop a lifelong love
                  for learning.
                </p>
                <p>
                  Located in the heart of Singarva, Ahmedabad, our school has grown
                  from a small institution into a thriving learning community. Our brand
                  new campus, inaugurated in 2026, features modern facilities designed
                  specifically for young learners from Jr. KG to 8th Standard.
                </p>
                <p>
                  We believe that the early years of education are the most critical in
                  shaping a child&apos;s future. That&apos;s why we combine activity-based
                  learning with strong values education, ensuring our students grow
                  into confident, compassionate, and curious individuals.
                </p>
                <div className={styles.trustBadge}>
                  🏛️ Managed by Naagneshwari Education Trust
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mvSection}>
        <div className="container">
          <SectionHeading
            label="Our Purpose"
            title="Mission &"
            highlight="Vision"
            subtitle="Guiding principles that shape our educational philosophy"
          />
          <div className={styles.mvGrid}>
            <ScrollReveal delay={0}>
              <div className={`${styles.mvCard} ${styles.mvCardMission}`}>
                <span className={styles.mvIcon}>🎯</span>
                <h3>Our Mission</h3>
                <p>
                  To provide quality, affordable education that nurtures every
                  child&apos;s intellectual, emotional, social, and physical
                  development. We are committed to creating a safe, inclusive, and
                  stimulating environment where young learners can thrive and
                  discover their full potential through activity-based learning and
                  value education.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className={`${styles.mvCard} ${styles.mvCardVision}`}>
                <span className={styles.mvIcon}>🌟</span>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted and admired school in Ahmedabad for early
                  childhood and primary education. We envision a school where every
                  child is empowered to become a confident, responsible, and
                  compassionate citizen who contributes positively to society while
                  embracing the joy of lifelong learning.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <SectionHeading
            label="Our Values"
            title="What We"
            highlight="Stand For"
            subtitle="The core values that guide everything we do at Little Angel's"
          />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className={styles.principalSection}>
        <div className="container">
          <SectionHeading
            label="From the Principal"
            title="Principal&apos;s"
            highlight="Message"
          />
          <ScrollReveal>
            <div className={styles.principalGrid}>
              <div className={styles.principalAvatar}>👩‍🏫</div>
              <div className={styles.principalContent}>
                <blockquote>
                  &ldquo;At Little Angel&apos;s, we believe every child is unique and
                  carries within them the seeds of greatness. Our role as
                  educators is to provide the right environment, encouragement,
                  and guidance so these seeds can blossom. We are committed to
                  making your child&apos;s early school years the most memorable and
                  transformative experience of their lives.&rdquo;
                </blockquote>
                <p className={styles.principalName}>The Principal</p>
                <p className={styles.principalRole}>
                  Little Angel&apos;s English School
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AdmissionBanner />
    </>
  );
}
