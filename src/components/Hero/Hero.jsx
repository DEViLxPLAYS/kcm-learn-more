import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import CandlestickBg from "./CandlestickBg";
import TelegramIcon from "../ui/TelegramIcon";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <CandlestickBg />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.fadeBottom} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div className={styles.eyebrow} variants={item}>
            <span className="live-pulse" style={{ width: 6, height: 6 }} aria-hidden="true" />
            Khan Capital Management — Live Trading Community
          </motion.div>

          {/* H1 */}
          <motion.h1 className={styles.h1} id="hero-heading" variants={item}>
            Trade Smarter.<br />
            <span className={styles.accent}>Learn from Real Entries.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p className={styles.subhead} variants={item}>
            Get access to live Quotex trade entries, step-by-step strategy breakdowns,
            and direct support from the KCM team — all inside our Telegram community.
          </motion.p>

          {/* CTA */}
          <motion.div className={styles.ctaGroup} variants={item}>
            <motion.a
              href="https://t.me/+uRjbW3eTxog1NGY0"
              target="_blank"
              rel="noopener"
              className={`btn btn-primary ${styles.heroBtn}`}
              id="hero-telegram-cta"
              aria-label="Join the KCM Telegram trading community — opens in new tab"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <TelegramIcon size={20} />
              Join Telegram Now
            </motion.a>
            <span className={styles.ctaSupport}>
              Free to join &nbsp;·&nbsp; Live entries posted daily
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}