"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import styles from "./contact.module.css";

const faqs = [
  {
    q: "What classes/grades are available at Little Angel's?",
    a: "We offer Jr. KG, Sr. KG, Balvatika, and Primary Section (Std 1 to 8). Our school caters to children aged 3 to 14 years.",
  },
  {
    q: "What is the medium of instruction?",
    a: "Our primary medium of instruction is Gujarati (Gujarati Medium) with English as a second language. We ensure students develop strong proficiency in both languages.",
  },
  {
    q: "What is the admission process?",
    a: "The admission process is simple: 1) Fill out the online application form on this page, 2) Visit the campus for a tour and interaction, 3) Complete the admission formalities with required documents.",
  },
  {
    q: "What documents are required for admission?",
    a: "You'll need: Birth certificate, Aadhar card of the child, Previous school leaving certificate (if applicable), Passport-size photographs, Parent/Guardian ID proof, and Address proof.",
  },
  {
    q: "Does the school have transportation facilities?",
    a: "Currently, we encourage parents to arrange their own transportation. Please contact us for more details about upcoming transport facilities.",
  },
  {
    q: "What are the school timings?",
    a: "School operates Monday to Saturday. Jr. KG & Sr. KG: 8:30 AM to 12:00 PM. Primary Section: 8:00 AM to 2:00 PM. Timings may vary during special events.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <ScrollReveal>
            <h1 className={styles.pageHeroTitle}>
              Contact &{" "}
              <span className={styles.pageHeroHighlight}>Admissions</span>
            </h1>
            <p className={styles.pageHeroSub}>
              Begin your child&apos;s journey with Little Angel&apos;s. Fill out the
              application form or reach out to us directly.
            </p>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contact & Admissions</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Admission Steps */}
      <section className={styles.stepsSection}>
        <div className="container">
          <SectionHeading
            label="How to Apply"
            title="Admission"
            highlight="Process"
            subtitle="Three simple steps to enrol your child at Little Angel's"
          />
          <div className={styles.stepsGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.stepCard}>
                <div className={`${styles.stepNumber} ${styles.stepNum1}`}>1</div>
                <h3>Fill Application Form</h3>
                <p>
                  Complete the online admission form below with your child&apos;s
                  details and your contact information.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className={styles.stepCard}>
                <div className={`${styles.stepNumber} ${styles.stepNum2}`}>2</div>
                <h3>Visit Our Campus</h3>
                <p>
                  Schedule a campus visit to see our facilities, meet the
                  teachers, and experience our learning environment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.stepCard}>
                <div className={`${styles.stepNumber} ${styles.stepNum3}`}>3</div>
                <h3>Confirm Admission</h3>
                <p>
                  Complete the admission formalities by submitting required
                  documents and confirming your child&apos;s enrollment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left - Contact Info */}
            <div className={styles.contactInfo}>
              <ScrollReveal direction="left">
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>📍</div>
                  <div className={styles.contactCardContent}>
                    <h3>Our Address</h3>
                    <a 
                      href="https://maps.app.goo.gl/mTGj4dMCMCYoDyNR8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.addressLink}
                    >
                      Opp. Anant Sky, Nr. Maruti Residency-3,
                      <br />
                      Vadvali Chali, Singarva, Ahmedabad
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>📞</div>
                  <div className={styles.contactCardContent}>
                    <h3>Call Us</h3>
                    <a href="tel:+918866160867">+91 88661 60867</a>
                    <a href="tel:+917802841742">+91 78028 41742</a>
                    <a href="tel:+919998040867">+91 99980 40867</a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>🕐</div>
                  <div className={styles.contactCardContent}>
                    <h3>Office Hours</h3>
                    <p>Monday – Saturday: 8:00 AM – 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <div className={styles.mapFull}>
                  <iframe
                    src="https://maps.google.com/maps?q=23.0214698,72.6957018&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Google Form */}
            <ScrollReveal direction="right">
              <div className={styles.formSection}>
                <div className={styles.formHeader}>
                  <h2>📝 Admission Application Form</h2>
                  <p>Fill out the form below to apply for admission at Little Angel&apos;s</p>
                </div>
                <div className={styles.formBody}>
                  {/* Replace the URL below with your actual Google Form embed URL */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform?embedded=true"
                    title="Admission Application Form"
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <SectionHeading
            label="FAQs"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Find answers to common questions about our school and admissions"
          />
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    id={`faq-question-${i}`}
                  >
                    {faq.q}
                    <span
                      className={`${styles.faqArrow} ${
                        openFaq === i ? styles.faqArrowOpen : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      openFaq === i ? styles.faqAnswerOpen : ""
                    }`}
                  >
                    <p className={styles.faqAnswerContent}>{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
