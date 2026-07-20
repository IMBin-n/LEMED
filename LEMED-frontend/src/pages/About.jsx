import { useLang } from "../context/LangContext";
import image from "../assets/react.svg";
function About() {
   const { lang, t } = useLang ();
  
  const dir = lang === "fa" ? "rtl" : "ltr";  
  return (
    <div className="page" dir={dir}>
      <div className="about-grid">
        <div className="about-img-col">
          <img src={image} alt="About" />
          <div className="about-accent">LeMed</div>
        </div>
        <div className="about-text-col">
          <h1>{t.aboutTitle}</h1>
          <p>{t.aboutText}</p>
          <p style={{ fontSize: "0.85rem", color: "var(--sage)" }}>
            {lang === "fa"
              ? "تهران، ایران — از ۲۰۲۲"
              : "Tehran, Iran — Est. 2022"}
          </p>
          <button className="contact-btn">{t.contactUs}</button>
        </div>
      </div>
    </div>
  );
}
export default About;