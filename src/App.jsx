import { motion } from "framer-motion";
import "./index.css";

/* LINKS DATA */
const links = [
  {
    id: "telegram",
    label: "Join Our Telegram",
    sub: "Live trade entries & signals daily",
    href: "https://t.me/+uRjbW3eTxog1NGY0",
    bg: "linear-gradient(135deg,#C9A84C,#E8C96B)",
    color: "#0A0C0F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.829.941z"/>
      </svg>
    ),
    primary: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp Community",
    sub: "Chat with the KCM community",
    href: "https://chat.whatsapp.com/KlQBAmsfdeOJlhwtsjA6U0",
    bg: "#111418",
    borderColor: "rgba(37,211,102,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="#25D366" width="26" height="26">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.122.552 4.112 1.515 5.843L0 24l6.335-1.661A11.945 11.945 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.806 9.806 0 01-5.034-1.388l-.36-.214-3.738.98 1.001-3.641-.235-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.569 2.182 12 2.182S21.818 6.57 21.818 12 17.431 21.818 12 21.818z"/>
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "Free Strategy Tutorials",
    sub: "Step-by-step Quotex walkthroughs",
    href: "https://www.youtube.com/@KhanCapitalManagement",
    bg: "#111418",
    borderColor: "rgba(255,0,0,0.30)",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FF0000" width="26" height="26">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    id: "tiktok",
    label: "Follow on TikTok",
    sub: "Short-form trading insights & tips",
    href: "https://www.tiktok.com/@kcm653",
    bg: "#111418",
    borderColor: "rgba(255,255,255,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <defs>
          <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#69C9D0"/>
            <stop offset="100%" stopColor="#EE1D52"/>
          </linearGradient>
        </defs>
        <path fill="url(#tg)" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.18 8.18 0 004.79 1.53V6.82a4.85 4.85 0 01-1.02-.13z"/>
      </svg>
    ),
  },
  {
    id: "quotex",
    label: "Create Quotex Account",
    sub: "Free demo account — start practising",
    href: "https://broker-qx.pro/sign-up/?lid=1303490",
    bg: "#111418",
    borderColor: "rgba(201,168,76,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26" stroke="#C9A84C" strokeWidth="1.8">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    id: "website",
    label: "KCM Website",
    sub: "Tools, resources & more",
    href: "https://lsakcm.com/",
    bg: "#111418",
    borderColor: "rgba(201,168,76,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26" stroke="#C9A84C" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
];

/* ANIMATION VARIANTS */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4,0,0.2,1] } },
};

/* APP */
export default function App() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 480,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 1rem 2rem",
    }}>

      {/* PROFILE HEADER — logo sits 2.5rem below top of page */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
          marginTop: "2.5rem",   /* <-- the only change: logo is a little below */
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.div variants={fadeUp}>
          <div style={{
            width: 108, height: 108, borderRadius: "50%",
            border: "2.5px solid #C9A84C",
            boxShadow: "0 0 28px rgba(201,168,76,0.30)",
            overflow: "hidden",
            background: "#0A0C0F",
          }}>
            <img
              src="/kcm-logo.jpg"
              alt="Khan Capital Management logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp} style={{ textAlign: "center" }}>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#C9A84C",
            lineHeight: 1.25,
          }}>
            Khan Capital Management
          </h1>
          <p style={{
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6B7280",
            marginTop: "0.3rem",
          }}>
            Investment &nbsp;·&nbsp; Wealth &nbsp;·&nbsp; Advisory
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p variants={fadeUp} style={{
          fontSize: "0.875rem",
          color: "rgba(242,237,228,0.7)",
          textAlign: "center",
          lineHeight: 1.65,
          maxWidth: 340,
        }}>
          Live Quotex trade entries, strategy breakdowns &amp; direct access to the KCM team. Join the community and trade with us.
        </motion.p>
      </motion.div>

      {/* LINK BUTTONS */}
      <motion.div
        style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener"
            id={`link-${link.id}`}
            aria-label={`${link.label} — opens in new tab`}
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              padding: "0.875rem 1.25rem",
              borderRadius: 14,
              background: link.bg,
              color: link.color || "#F2EDE4",
              border: link.primary ? "none" : `1px solid ${link.borderColor || "rgba(201,168,76,0.18)"}`,
              boxShadow: link.primary ? "0 4px 28px rgba(201,168,76,0.30)" : "none",
              cursor: "pointer",
              overflow: "hidden",
              textDecoration: "none",
            }}
            whileHover={{
              scale: 1.025,
              boxShadow: link.primary ? "0 8px 38px rgba(201,168,76,0.50)" : "0 4px 24px rgba(201,168,76,0.12)",
              borderColor: "rgba(201,168,76,0.45)",
            }}
            whileTap={{ scale: 0.975 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          >
            <span style={{
              flexShrink: 0, width: 42, height: 42, borderRadius: 10,
              background: link.primary ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.05)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {link.icon}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.3, color: link.primary ? "#0A0C0F" : "#F2EDE4" }}>
                {link.label}
              </span>
              <span style={{ display: "block", fontSize: "0.75rem", marginTop: "0.15rem", color: link.primary ? "rgba(10,12,15,0.65)" : "#6B7280" }}>
                {link.sub}
              </span>
            </span>
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" style={{ flexShrink: 0 }}>
              <path d="M6 3l5 5-5 5" stroke={link.primary ? "rgba(10,12,15,0.5)" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        ))}
      </motion.div>

      {/* FOOTER */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          marginTop: "2rem",
          fontSize: "0.65rem",
          color: "rgba(107,114,128,0.6)",
          textAlign: "center",
          lineHeight: 1.6,
          maxWidth: 400,
        }}
      >
        Trading binary options / CFDs carries a high level of risk and may not be suitable for all investors.
        Past performance does not guarantee future results. Only trade capital you can afford to lose.
        &copy; {new Date().getFullYear()} Khan Capital Management.
      </motion.p>

    </div>
  );
}