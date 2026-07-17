import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TopBar.module.css";
import TelegramIcon from "../ui/TelegramIcon";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled ? "rgba(10,12,15,0.97)" : "rgba(10,12,15,0.88)";

  return (
    <motion.header
      className={styles.bar}
      style={{ background: bg }}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.brandMark} aria-label="Khan Capital Management — go to top">
          <svg className={styles.monogram} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="19" stroke="#C9A84C" strokeWidth="1.4" fill="rgba(10,12,15,0.9)" />
            <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
              fontFamily="Cinzel,serif" fontSize="11" fontWeight="700" fill="#C9A84C">KCM</text>
          </svg>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Khan Capital Management</span>
            <span className={styles.brandTagline}>Investment · Wealth · Advisory</span>
          </div>
        </a>

        <div className={styles.ctaGroup}>
          <span className="live-pulse" aria-hidden="true" />
          <span className={styles.liveText}>Live daily signals</span>
          <a
            href="https://t.me/+uRjbW3eTxog1NGY0"
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-sm"
            id="topbar-telegram-cta"
            aria-label="Join KCM Telegram group — opens in new tab"
          >
            <TelegramIcon size={16} />
            Join Telegram
          </a>
        </div>
      </div>
    </motion.header>
  );
}