"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AdmissionModal.module.css";

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    grade: "",
    previousSchool: "",
    parentName: "",
    mobileNumber: "",
    altMobileNumber: "",
    email: "",
    address: "",
    hearAboutUs: "",
    questions: "",
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQyr2ddZQKgD8s_udVKzBJ633Gkw6uIPM7RfEU60CBDNNhOeusCEj8gd4tFvxol_4A3Q/exec";

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenAdmissionPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
    const handleManualOpen = () => setIsOpen(true);
    window.addEventListener("openAdmissionModal", handleManualOpen);
    return () => window.removeEventListener("openAdmissionModal", handleManualOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenAdmissionPopup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      setIsSuccess(true);
      setTimeout(() => handleClose(), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div 
            className={styles.modal} 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
          >
            <button className={styles.closeBtn} onClick={handleClose}>✕</button>

            <div className={styles.content}>
              {!isSuccess ? (
                <>
                  <div className={styles.header}>
                    <h2>Admission Inquiry 🎓</h2>
                    <p>Little Angel&apos;s English School — 2026-27</p>
                  </div>

                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formSection}>
                      <h3>Student Details</h3>
                      <div className={styles.grid}>
                        <div className={styles.inputGroup}>
                          <label>Student Full Name *</label>
                          <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} />
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Date of Birth *</label>
                          <input type="date" name="dob" required value={formData.dob} onChange={handleChange} />
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Gender *</label>
                          <select name="gender" required value={formData.gender} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Grade Applied For *</label>
                          <select name="grade" required value={formData.grade} onChange={handleChange}>
                            <option value="">Select Grade</option>
                            <option value="Jr. KG">Jr. KG</option>
                            <option value="Sr. KG">Sr. KG</option>
                            <option value="Balvatika">Balvatika</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={`Std ${n}`}>Std {n}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className={styles.inputGroup}>
                        <label>Previous School Name (If any)</label>
                        <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} />
                      </div>
                    </div>

                    <div className={styles.formSection}>
                      <h3>Parent & Contact Details</h3>
                      <div className={styles.grid}>
                        <div className={styles.inputGroup}>
                          <label>Parent/Guardian Name *</label>
                          <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} />
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Mobile Number *</label>
                          <input type="tel" name="mobileNumber" required pattern="[0-9]{10}" value={formData.mobileNumber} onChange={handleChange} />
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Alternative Number</label>
                          <input type="tel" name="altMobileNumber" value={formData.altMobileNumber} onChange={handleChange} />
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Email Address</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className={styles.inputGroup}>
                        <label>Residential Address *</label>
                        <textarea name="address" required rows={2} value={formData.address} onChange={handleChange}></textarea>
                      </div>
                      <div className={styles.grid}>
                        <div className={styles.inputGroup}>
                          <label>How did you hear about us?</label>
                          <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friend/Relative">Friend/Relative</option>
                            <option value="Banner/Flyer">Banner/Flyer</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label>Any specific questions?</label>
                      <textarea name="questions" rows={1} value={formData.questions} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? <><span className={styles.loader}></span> Sending...</> : "Submit Admission Inquiry"}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <span className={styles.successIcon}>✅</span>
                  <h2>Inquiry Sent!</h2>
                  <p>Our team will contact you on <strong>{formData.mobileNumber}</strong> shortly.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
