"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AdmissionForm from "./AdmissionForm";
import styles from "./AdmissionModal.module.css";

export default function AdmissionModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Body Scroll Lock (Fallback)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenAdmissionPopup") === "true";

    let timer: NodeJS.Timeout;
    if (!hasSeenPopup && pathname === "/") {
      timer = setTimeout(() => setIsOpen(true), 8000); // Pops up after 8 seconds on homepage only
    }

    const handleManualOpen = () => setIsOpen(true);
    window.addEventListener("openAdmissionModal", handleManualOpen);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("openAdmissionModal", handleManualOpen);
    };
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenAdmissionPopup", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
              ✕
            </button>
            <AdmissionForm onSuccess={() => setTimeout(() => handleClose(), 5000)} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
