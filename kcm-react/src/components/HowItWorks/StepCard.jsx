import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";
import TelegramIcon from "../ui/TelegramIcon";

export default function StepCard({ step, delay }) {
  const isFinal = step.final;

  return (
    <motion.article
      className={`${styles.card} ${isFinal ? styles.cardFinal : ""}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 280, damping: 22 } }}
      aria-label={step.ariaLabel}
    >
      <div className={styles.stepNumber}>
        {isFinal ? `Step 0${step.num} — Final Step` : `Step 0${step.num}`}
      </div>

      {isFinal && (
        <div className={styles.liveBadge}>
          <span className="live-pulse" style={{ width: 6, height: 6 }} aria-hidden="true" />
          Live now
        </div>
      )}

      <div className={styles.iconBox} aria-hidden="true">
        {isFinal ? (
          <TelegramIcon size={28} />
        ) : (
          <span>{step.icon}</span>
        )}
      </div>

      <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: step.title }} />
      <p className={styles.desc}>{step.desc}</p>

      {isFinal ? (
        <motion.a
          href={step.href}
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
          id={step.id}
          aria-label={`${step.ariaLabel} — opens in new tab`}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
        >
          <TelegramIcon size={18} />
          Join Telegram Now
        </motion.a>
      ) : (
        <a href={step.href} target="_blank" rel="noopener" className={styles.stepLink} id={step.id} aria-label={`${step.cta} — opens in new tab`}>
          {step.cta} →
        </a>
      )}
    </motion.article>
  );
}