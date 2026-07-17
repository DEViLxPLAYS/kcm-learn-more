import { motion } from "framer-motion";
import styles from "./SecondaryLinks.module.css";

export default function LinkCard({ card, delay }) {
  return (
    <motion.a
      href={card.href}
      target="_blank"
      rel="noopener"
      className={styles.card}
      id={card.id}
      aria-label={`${card.title} — opens in new tab`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -4,
        borderColor: "rgba(201,168,76,0.55)",
        boxShadow: "0 10px 32px rgba(201,168,76,0.13)",
        transition: { duration: 0.22 },
      }}
    >
      <div className={styles.icon} aria-hidden="true">{card.icon}</div>
      <div className={styles.title}>{card.title}</div>
      <p className={styles.desc}>{card.desc}</p>
      <div className={styles.arrow}>{card.cta} →</div>
    </motion.a>
  );
}