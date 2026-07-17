import styles from "./HowItWorks.module.css";
import StepCard from "./StepCard";

const steps = [
  {
    num: 1,
    icon: "📊",
    title: "Create Your<br/>Quotex Account",
    desc: "Start with a free demo account on Quotex — no real money required to begin. Practice the platform before you ever risk a cent.",
    href: "https://broker-qx.pro/sign-up/?lid=1303490",
    cta: "Create Account",
    id: "step1-quotex-link",
    ariaLabel: "Step 1: Create your Quotex account",
  },
  {
    num: 2,
    icon: "🌐",
    title: "Visit the<br/>KCM Website",
    desc: "Access trading tools, resources, and exclusive educational material curated by the KCM team to support your progress.",
    href: "https://lsakcm.com/",
    cta: "Explore Resources",
    id: "step2-website-link",
    ariaLabel: "Step 2: Visit the KCM website",
  },
  {
    num: 3,
    icon: "▶️",
    title: "Watch Strategy<br/>Tutorials",
    desc: "Work through KCM's free YouTube tutorials: indicator setups, entry logic, and platform walkthroughs explained step by step.",
    href: "https://www.youtube.com/@KhanCapitalManagement",
    cta: "Watch Tutorials",
    id: "step3-youtube-link",
    ariaLabel: "Step 3: Watch KCM strategy tutorials on YouTube",
  },
  {
    num: 4,
    icon: "telegram",
    title: "Trade Live<br/>With Us",
    desc: "Once you know the platform and the strategy, step into the live community. Get real-time entries, ask questions, and trade alongside the KCM team every day.",
    href: "https://t.me/+uRjbW3eTxog1NGY0",
    cta: "Join Telegram Now",
    id: "step4-telegram-btn",
    ariaLabel: "Step 4: Join the KCM Telegram live trading group",
    final: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="hiw-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Your path to the community</span>
          <h2 className="section-title" id="hiw-heading">How It Works</h2>
          <p className="section-intro">
            Follow these four steps in order — each one sets you up for the next.
            The final step is where the real trading happens.
          </p>
        </div>
        <div className={styles.grid}>
          {steps.map((s, i) => (
            <StepCard key={s.num} step={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}