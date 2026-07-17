import { motion } from "framer-motion";
import styles from "./ClosingCTA.module.css";
import TelegramIcon from "../ui/TelegramIcon";

export default function ClosingCTA() {
  return (
    <section id="closing-cta" className={styles.section} aria-labelledby="closing-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>

          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="live-pulse" style={{ width: 6, height: 6 }} aria-hidden="true" />
            Ready when you are
          </motion.div>

          <motion.h2
            className={styles.title}
            id="closing-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join the Community.<br />
            <span className="gold-text">Trade Live Today.</span>
          </motion.h2>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Every day the market opens, KCM is in the Telegram group — posting entries,
            walking through the logic, and answering questions. It's free to join.
            There's no reason to wait.
          </motion.p>

          <motion.a
            href="https://t.me/+uRjbW3eTxog1NGY0"
            target="_blank"
            rel="noopener"
            className={`btn btn-primary ${styles.ctaBtn}`}
            id="closing-telegram-cta"
            aria-label="Join KCM Telegram trading community — opens in new tab"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3, type: "spring", stiffness: 280, damping: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <TelegramIcon size={20} />
            Join Telegram Now — It's Free
          </motion.a>

          <motion.span
            className={styles.support}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            No registration required &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Live entries daily
          </motion.span>

        </div>
      </div>
    </section>
  );
}