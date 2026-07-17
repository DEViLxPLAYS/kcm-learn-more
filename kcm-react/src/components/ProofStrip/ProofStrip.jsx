import { motion } from "framer-motion";
import styles from "./ProofStrip.module.css";

const stats = [
  { label: "What you get",     value: "Live Entries",     sub: "Posted in real time, every trading day" },
  { label: "Strategy depth",   value: "Full Breakdowns",  sub: "Indicator walkthroughs, not just signals" },
  { label: "Access",           value: "Direct to Team",   sub: "Ask questions, get answers from KCM" },
];

export default function ProofStrip() {
  return (
    <section id="proof-strip" className={styles.strip} aria-label="Why KCM">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={styles.label}>{s.label}</div>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.sub}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}