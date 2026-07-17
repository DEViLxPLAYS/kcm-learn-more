import styles from "./SecondaryLinks.module.css";
import LinkCard from "./LinkCard";

const cards = [
  {
    icon: "💬",
    title: "WhatsApp Community",
    desc: "For members who prefer WhatsApp over Telegram — same community, different channel.",
    href: "https://chat.whatsapp.com/BMQwNydJk545SG7zLSsw7T",
    cta: "Join Community",
    id: "whatsapp-link-card",
  },
  {
    icon: "🎵",
    title: "TikTok",
    desc: "Short-form market insights and platform demos. Great entry point if you're just getting started.",
    href: "https://www.tiktok.com/@kcm653",
    cta: "Follow on TikTok",
    id: "tiktok-link-card",
  },
  {
    icon: "▶️",
    title: "YouTube Channel",
    desc: "Free strategy tutorials, indicator walkthroughs, and Quotex platform guides — all on demand.",
    href: "https://www.youtube.com/@KhanCapitalManagement",
    cta: "Watch Tutorials",
    id: "secondary-youtube-link",
  },
  {
    icon: "🌐",
    title: "KCM Website",
    desc: "Trading tools, resources, and educational content from the KCM team.",
    href: "https://lsakcm.com/",
    cta: "Visit Website",
    id: "secondary-website-link",
  },
];

export default function SecondaryLinks() {
  return (
    <section id="secondary-links" className={styles.section} aria-labelledby="secondary-heading">
      <div className="container">
        <span className="section-eyebrow">More ways to connect</span>
        <h2 className="section-title" id="secondary-heading">Find Us Everywhere</h2>
        <p className="section-intro">
          Whether you prefer short-form content, a different messaging platform, or just want
          to explore before committing — we're here.
        </p>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <LinkCard key={c.id} card={c} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}