import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AdmissionBanner from "@/components/AdmissionBanner";
import styles from "./academics.module.css";

export const metadata: Metadata = {
  title: "Academics & Programs",
  description:
    "Explore academic programs at Little Angel's English School — Jr. KG, Sr. KG, Balvatika, and Primary (Std 1-8). Activity-based learning with Gujarati medium education in Ahmedabad.",
};

const programs = [
  {
    icon: "🧒",
    title: "Junior Kindergarten (Jr. KG)",
    age: "Ages 3–4 Years",
    bg: styles.programEmojiBg1,
    desc: "Our Jr. KG program introduces young children to the joy of learning through play-based activities, storytelling, rhymes, and creative arts. We focus on developing fine motor skills, basic numeracy, and social interaction.",
    features: ["Play-based curriculum", "Rhymes & storytelling", "Basic numeracy & literacy", "Art & craft activities", "Social skills development"],
  },
  {
    icon: "🎨",
    title: "Senior Kindergarten (Sr. KG)",
    age: "Ages 4–5 Years",
    bg: styles.programEmojiBg2,
    desc: "Sr. KG builds upon the foundations laid in Jr. KG with more structured learning. Children develop reading readiness, writing skills, and mathematical thinking through engaging activities.",
    features: ["Phonics & reading readiness", "Writing practice", "Number concepts", "Environmental awareness", "Music & movement"],
  },
  {
    icon: "🌱",
    title: "Balvatika",
    age: "Ages 5–6 Years",
    bg: styles.programEmojiBg3,
    desc: "Balvatika serves as an important bridge between kindergarten and primary school. This year focuses on building school readiness through structured play and foundational academic skills.",
    features: ["School readiness preparation", "Language development", "Logical thinking", "Physical education", "Value-based activities"],
  },
  {
    icon: "📖",
    title: "Primary Section (Std 1–8)",
    age: "Ages 6–14 Years",
    bg: styles.programEmojiBg4,
    desc: "Our primary section provides comprehensive education in Gujarati medium with English as a second language. The curriculum balances strong academics with co-curricular activities for holistic development.",
    features: ["Gujarati & English languages", "Mathematics & Science", "Social Studies & EVS", "Computer education", "Sports & co-curricular"],
  },
];

const approaches = [
  {
    icon: "🎮",
    title: "Activity-Based Learning",
    desc: "Children learn best by doing. Our curriculum integrates hands-on activities, projects, and experiments that make learning fun and memorable.",
  },
  {
    icon: "🤝",
    title: "Collaborative Learning",
    desc: "Group activities and peer interactions help children develop teamwork, communication, and leadership skills from an early age.",
  },
  {
    icon: "🧠",
    title: "Critical Thinking",
    desc: "We encourage children to ask questions, think creatively, and solve problems independently, building a strong foundation for future learning.",
  },
  {
    icon: "🎨",
    title: "Creative Expression",
    desc: "Art, music, dance, and drama are integral parts of our curriculum, allowing children to express themselves freely and build confidence.",
  },
  {
    icon: "🌍",
    title: "Environmental Awareness",
    desc: "We instill a love for nature and environmental responsibility through outdoor learning, nature walks, and sustainability projects.",
  },
  {
    icon: "💝",
    title: "Value Education",
    desc: "Character building through stories, role-play, and real-life examples teaches children empathy, respect, honesty, and responsibility.",
  },
];

const subjects = [
  "📚 English", "📝 Gujarati", "🔢 Mathematics", "🔬 Science",
  "🌍 Social Studies", "💻 Computer", "🎨 Art & Craft", "🎵 Music",
  "⚽ Physical Education", "🙏 Moral Science",
];

export default function AcademicsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <ScrollReveal>
            <h1 className={styles.pageHeroTitle}>
              Our <span className={styles.pageHeroHighlight}>Academics</span>
            </h1>
            <p className={styles.pageHeroSub}>
              Comprehensive programs designed for holistic child development from Jr. KG to 8th Standard
            </p>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Academics</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs */}
      <section className={styles.programsSection}>
        <div className="container">
          <SectionHeading
            label="Our Programs"
            title="Academic"
            highlight="Programs"
            subtitle="Age-appropriate programs tailored to each stage of your child's growth"
          />
          <div className={styles.programsGrid}>
            {programs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.programCard}>
                  <div className={styles.programHeader}>
                    <div className={`${styles.programEmoji} ${p.bg}`}>
                      {p.icon}
                    </div>
                    <div className={styles.programHeaderText}>
                      <h3>{p.title}</h3>
                      <span className={styles.programAge}>{p.age}</span>
                    </div>
                  </div>
                  <div className={styles.programBody}>
                    <p>{p.desc}</p>
                    <div className={styles.programFeatures}>
                      {p.features.map((f, j) => (
                        <div key={j} className={styles.programFeature}>
                          <span>✓</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className={styles.approachSection}>
        <div className="container">
          <SectionHeading
            label="Our Approach"
            title="How We"
            highlight="Teach"
            subtitle="Our teaching methodology is designed to make learning an engaging and enjoyable experience"
          />
          <div className={styles.approachGrid}>
            {approaches.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={styles.approachCard}>
                  <span className={styles.approachIcon}>{a.icon}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className={styles.curriculumSection}>
        <div className="container">
          <div className={styles.curriculumGrid}>
            <ScrollReveal direction="left">
              <div className={styles.curriculumContent}>
                <h2>
                  Our{" "}
                  <span className={styles.curriculumHighlight}>Curriculum</span>
                </h2>
                <p>
                  Our curriculum follows the Gujarat State Board guidelines with
                  Gujarati as the medium of instruction and English as a second
                  language. We go beyond textbooks to provide a well-rounded
                  education that includes arts, sports, computer education, and
                  value-based learning.
                </p>
                <div className={styles.subjectTags}>
                  {subjects.map((s, i) => (
                    <span key={i} className={styles.subjectTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.curriculumImage}>
                <Image
                  src="/images/school-building.jpeg"
                  alt="Little Angel's School Classrooms"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AdmissionBanner />
    </>
  );
}
