import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import AdmissionBanner from "@/components/AdmissionBanner";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

const programs = [
  {
    icon: "🧒",
    title: "Jr. KG",
    age: "Ages 3–4",
    desc: "Building foundations through play-based learning, creativity, and social skills development.",
    bg: styles.programIconBg1,
  },
  {
    icon: "🎨",
    title: "Sr. KG",
    age: "Ages 4–5",
    desc: "Preparing young learners for primary school with structured activities and early literacy.",
    bg: styles.programIconBg2,
  },
  {
    icon: "🌱",
    title: "Balvatika",
    age: "Ages 5–6",
    desc: "A bridge year focusing on readiness for formal education through experiential learning.",
    bg: styles.programIconBg3,
  },
  {
    icon: "📖",
    title: "Primary (1-5)",
    age: "Ages 6–11",
    desc: "Comprehensive education with strong academics, values, and co-curricular activities.",
    bg: styles.programIconBg4,
  },
];

const features = [
  {
    icon: "🏫",
    title: "Brand New Campus",
    desc: "State-of-the-art facilities in our newly built campus designed specifically for young learners.",
    variant: "blue" as const,
  },
  {
    icon: "👩‍🏫",
    title: "Experienced Teachers",
    desc: "Our dedicated faculty brings years of experience in early childhood and primary education.",
    variant: "orange" as const,
  },
  {
    icon: "🎯",
    title: "Activity-Based Learning",
    desc: "Hands-on activities, art, music, and sports integrated into the curriculum for holistic growth.",
    variant: "blue" as const,
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    desc: "CCTV monitored campus with trained security staff ensuring your child's safety at all times.",
    variant: "orange" as const,
  },
  {
    icon: "🌟",
    title: "Individual Attention",
    desc: "Small class sizes ensuring every child receives personalized attention and care.",
    variant: "blue" as const,
  },
  {
    icon: "🤝",
    title: "Value Education",
    desc: "Building character and moral values alongside academics for well-rounded development.",
    variant: "orange" as const,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Why Choose Us */}
      <section className={styles.features}>
        <div className="container">
          <SectionHeading
            label="Why Choose Us"
            title="Why Parents Trust"
            highlight="Little Angel's"
            subtitle="We provide a nurturing environment where every child is encouraged to discover, learn, and grow"
          />
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                icon={f.icon}
                title={f.title}
                description={f.desc}
                variant={f.variant}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className={styles.programs}>
        <div className="container">
          <SectionHeading
            label="Our Programs"
            title="Academic"
            highlight="Programs"
            subtitle="From Jr. KG to 5th Standard, we offer age-appropriate programs designed for holistic development"
          />
          <div className={styles.programsGrid}>
            {programs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.programCard}>
                  <div className={`${styles.programIcon} ${p.bg}`}>
                    {p.icon}
                  </div>
                  <div className={styles.programBody}>
                    <h3 className={styles.programTitle}>{p.title}</h3>
                    <p className={styles.programAge}>{p.age}</p>
                    <p className={styles.programDesc}>{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* New Campus */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.campusGrid}>
            <ScrollReveal direction="left">
              <div className={styles.campusImage}>
                <Image
                  src="/images/school-building.jpeg"
                  alt="Little Angel's English School - New Campus Building"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <span className={styles.campusBadge}>✨ New Campus 2026</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.campusContent}>
                <h2>
                  Our Brand New{" "}
                  <span className={styles.campusHighlight}>Campus</span>
                </h2>
                <p className={styles.campusDesc}>
                  Designed with children in mind, our new campus in Singarva
                  features spacious classrooms, safe play areas, and modern
                  facilities that create the perfect learning environment.
                </p>
                <div className={styles.campusFeatures}>
                  <div className={styles.campusFeature}>
                    <span>✅</span> Spacious, well-ventilated classrooms
                  </div>
                  <div className={styles.campusFeature}>
                    <span>✅</span> Safe outdoor play area with modern equipment
                  </div>
                  <div className={styles.campusFeature}>
                    <span>✅</span> CCTV surveillance across campus
                  </div>
                  <div className={styles.campusFeature}>
                    <span>✅</span> Clean drinking water & hygienic washrooms
                  </div>
                  <div className={styles.campusFeature}>
                    <span>✅</span> Dedicated activity rooms for art & music
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Admission CTA */}
      <AdmissionBanner />
    </>
  );
}
