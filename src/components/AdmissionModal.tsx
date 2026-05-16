"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AdmissionModal.module.css";

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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

  // Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
    setTimeout(() => setCurrentStep(1), 500); // Reset after animation
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
      setTimeout(() => handleClose(), 4000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const progress = (currentStep / 3) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div 
            className={styles.modal} 
            initial={{ scale: 0.9, opacity: 0, y: 30 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
          >
            <div className={styles.modalInner}>
              <button className={styles.closeBtn} onClick={handleClose}>✕</button>

              <div className={styles.progressContainer}>
                <div className={styles.stepIndicator}>
                  <span className={`${styles.stepLabel} ${currentStep >= 1 ? styles.stepLabelActive : ""}`}>Student</span>
                  <span className={`${styles.stepLabel} ${currentStep >= 2 ? styles.stepLabelActive : ""}`}>Parent</span>
                  <span className={`${styles.stepLabel} ${currentStep >= 3 ? styles.stepLabelActive : ""}`}>Review</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              <div className={styles.content}>
                {!isSuccess ? (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {currentStep === 1 && (
                        <motion.div key="step1" className={styles.formStep} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                          <div className={styles.header}>
                            <h2>Student Info</h2>
                            <p>Step 1 of 3 — Basic Details</p>
                          </div>
                          <div className={styles.grid}>
                            <div className={styles.inputGroup}>
                              <label>Student Full Name *</label>
                              <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} placeholder="First Last" />
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
                            <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} placeholder="Where did they study before?" />
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        <motion.div key="step2" className={styles.formStep} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                          <div className={styles.header}>
                            <h2>Parent Info</h2>
                            <p>Step 2 of 3 — Contact Details</p>
                          </div>
                          <div className={styles.grid}>
                            <div className={styles.inputGroup}>
                              <label>Parent Name *</label>
                              <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} placeholder="Guardian Name" />
                            </div>
                            <div className={styles.inputGroup}>
                              <label>Mobile Number *</label>
                              <input type="tel" name="mobileNumber" required pattern="[0-9]{10}" value={formData.mobileNumber} onChange={handleChange} placeholder="10 digits" />
                            </div>
                            <div className={styles.inputGroup}>
                              <label>Alt Number</label>
                              <input type="tel" name="altMobileNumber" value={formData.altMobileNumber} onChange={handleChange} />
                            </div>
                            <div className={styles.inputGroup}>
                              <label>Email Address</label>
                              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@mail.com" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div key="step3" className={styles.formStep} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                          <div className={styles.header}>
                            <h2>Final Steps</h2>
                            <p>Step 3 of 3 — Address & Source</p>
                          </div>
                          <div className={styles.inputGroup}>
                            <label>Residential Address *</label>
                            <textarea name="address" required rows={3} value={formData.address} onChange={handleChange} placeholder="Complete address..."></textarea>
                          </div>
                          <div className={styles.grid}>
                            <div className={styles.inputGroup}>
                              <label>How did you hear?</label>
                              <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Friend/Relative">Friend/Relative</option>
                                <option value="Banner/Flyer">Banner/Flyer</option>
                              </select>
                            </div>
                          </div>
                          <div className={styles.inputGroup}>
                            <label>Specific Questions?</label>
                            <input type="text" name="questions" value={formData.questions} onChange={handleChange} placeholder="e.g. Fees, Timings..." />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                ) : (
                  <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                    <span className={styles.successIcon}>✨</span>
                    <h2>All Set!</h2>
                    <p>We have received the inquiry for <strong>{formData.studentName}</strong>. Our staff will call you on <strong>{formData.mobileNumber}</strong> soon.</p>
                  </motion.div>
                )}
              </div>

              {!isSuccess && (
                <div className={styles.footer}>
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className={styles.backBtn}>Back</button>
                  )}
                  <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className={styles.submitBtn} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <span className={styles.loader}></span> : (currentStep === 3 ? "Submit Application" : "Next Step →")}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
