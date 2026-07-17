import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandRow}>
          <div className={styles.brandName}>Khan Capital Management</div>
          <div className={styles.brandTagline}>Investment · Wealth · Advisory</div>
        </div>
        <p className={styles.disclaimer}>
          <strong>Risk Disclaimer:</strong> Trading binary options and CFDs carries a high level of risk
          and may not be suitable for all investors. You could lose some or all of your invested capital,
          and you should never trade money that you cannot afford to lose. Past performance and signal
          results do not guarantee future outcomes. The information provided by KCM is for educational
          purposes only and does not constitute financial or investment advice. Always conduct your own
          due diligence before making any financial decisions.
        </p>
        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Khan Capital Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}