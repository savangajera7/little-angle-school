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

  // Body Scroll Lock (Fallback)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    // const hasSeenPopup = localStorage.getItem("hasSeenAdmissionPopup");
    // Temporarily disabled localStorage check for testing purposes
    const hasSeenPopup = false; 
    
    let timer: NodeJS.Timeout;
    if (!hasSeenPopup) {
      timer = setTimeout(() => setIsOpen(true), 2000); // Pops up after 2 seconds for easy testing
    }

    const handleManualOpen = () => setIsOpen(true);
    window.addEventListener("openAdmissionModal", handleManualOpen);
    
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("openAdmissionModal", handleManualOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenAdmissionPopup", "true");
    setTimeout(() => {
      setCurrentStep(1);
      setIsSuccess(false);
    }, 500); // Reset after animation
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
      setTimeout(() => handleClose(), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    { num: 1, label: "Student" },
    { num: 2, label: "Parent" },
    { num: 3, label: "Review" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div 
            className={styles.modal} 
            initial={{ scale: 0.95, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">✕</button>

            {!isSuccess && (
              <div className={styles.headerArea}>
                <div className={styles.headerTitle}>
                  <h2>Admission Inquiry</h2>
                  <p>Join Little Angel&apos;s English School (2026-27)</p>
                </div>
                
                <div className={styles.stepper}>
                  <div className={styles.stepperLine}>
                    <div 
                      className={styles.stepperLineFill} 
                      style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                  {steps.map((step) => (
                    <div 
                      key={step.num} 
                      className={`${styles.stepItem} ${currentStep === step.num ? styles.stepItemActive : ""} ${currentStep > step.num ? styles.stepItemCompleted : ""}`}
                    >
                      <div className={styles.stepCircle}>
                        {currentStep > step.num ? "✓" : step.num}
                      </div>
                      <span className={styles.stepLabel}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.modalInner} data-lenis-prevent="true">
              {!isSuccess ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div key="step1" className={styles.formStep} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                        <div className={styles.stepHeader}>
                          <h3>Student Information</h3>
                          <p>Please provide the child&apos;s details.</p>
                        </div>
                        <div className={styles.grid}>
                          <div className={styles.inputGroup}>
                            <label>Student Full Name *</label>
                            <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} placeholder="First Last" />
                          </div>
                          <div className={styles.inputGroup}>
                            <label>Date of Birth *</label>
                            <input 
                              type="date" 
                              name="dob" 
                              required 
                              value={formData.dob} 
                              onChange={handleChange} 
                              lang="en-GB"
                            />
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
                        <div className={styles.stepHeader}>
                          <h3>Parent & Contact Info</h3>
                          <p>How can we reach you?</p>
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
                            <input type="tel" name="altMobileNumber" value={formData.altMobileNumber} onChange={handleChange} placeholder="Optional" />
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
                        <div className={styles.stepHeader}>
                          <h3>Final Details</h3>
                          <p>Just a few more things to complete the inquiry.</p>
                        </div>
                        <div className={styles.inputGroup}>
                          <label>Residential Address *</label>
                          <textarea name="address" required rows={3} value={formData.address} onChange={handleChange} placeholder="Complete address..."></textarea>
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
                        <div className={styles.inputGroup}>
                          <label>Specific Questions?</label>
                          <input type="text" name="questions" value={formData.questions} onChange={handleChange} placeholder="e.g. Fees, Timings..." />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className={styles.footer}>
                    {currentStep > 1 ? (
                      <button type="button" onClick={prevStep} className={styles.backBtn}>← Back</button>
                    ) : <div></div>}
                    
                    <button 
                      type="submit" 
                      className={styles.submitBtn} 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <span className={styles.loader}></span> : (currentStep === 3 ? "Submit Inquiry" : "Next Step →")}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div className={styles.success} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <span className={styles.successIcon}>🎉</span>
                  <h2>Inquiry Received!</h2>
                  <p>Thank you for choosing Little Angel&apos;s English School.<br/>Our team will contact you on <strong>{formData.mobileNumber}</strong> shortly.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
