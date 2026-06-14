// import { useState, useEffect, useRef } from "react";

// const products = [
//   {
//     id: 1,
//     category: "کیف",
//     name: "Onyx Tote",
//     subtitle: "چرم دستدوز ایتالیایی",
//     price: "۴٬۸۰۰٬۰۰۰",
//     tag: "نو",
//     icon: "👜",
//     color: "#1a1a1a",
//   },
//   {
//     id: 2,
//     category: "کفش",
//     name: "Riviera Loafer",
//     subtitle: "چرم سافیانو — دست‌ساز",
//     price: "۳٬۲۰۰٬۰۰۰",
//     tag: "پرفروش",
//     icon: "👞",
//     color: "#3b2f2f",
//   },
//   {
//     id: 3,
//     category: "کیف",
//     name: "Dusk Clutch",
//     subtitle: "ساتن برزیلی — محدود",
//     price: "۲٬۱۰۰٬۰۰۰",
//     tag: "محدود",
//     icon: "👛",
//     color: "#2c2c3e",
//   },
//   {
//     id: 4,
//     category: "کفش",
//     name: "Atelier Heel",
//     subtitle: "نبوک فرانسوی — کلاسیک",
//     price: "۵٬۶۵۰٬۰۰۰",
//     tag: "انتخاب سردبیر",
//     icon: "👠",
//     color: "#1e2a1e",
//   },
//   {
//     id: 5,
//     category: "کیف",
//     name: "Lemed No.1",
//     subtitle: "طراحی اختصاصی گالری",
//     price: "۷٬۹۰۰٬۰۰۰",
//     tag: "انحصاری",
//     icon: "💼",
//     color: "#2a1e1e",
//   },
//   {
//     id: 6,
//     category: "کفش",
//     name: "Soleil Sneaker",
//     subtitle: "کنواس ژاپنی — مینیمال",
//     price: "۲٬۸۵۰٬۰۰۰",
//     tag: "جدید",
//     icon: "👟",
//     color: "#1a1a2e",
//   },
// ];

// const navLinks = ["کالکشن", "درباره گالری", "تماس", "راهنمای سایز"];

// export default function LEMED() {
//   const [activeFilter, setActiveFilter] = useState("همه");
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [scrollY, setScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const filtered =
//     activeFilter === "همه"
//       ? products
//       : products.filter((p) => p.category === activeFilter);

//   return (
//     <div style={styles.root} dir="rtl">
//       {/* ── NOISE TEXTURE OVERLAY ── */}
//       <div style={styles.noise} aria-hidden="true" />

//       {/* ── NAV ── */}
//       <nav style={{
//         ...styles.nav,
//         background: scrollY > 60 ? "rgba(10,9,8,0.96)" : "transparent",
//         backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
//       }}>
//         <div style={styles.navInner}>
//           <div style={styles.logo}>
//             <span style={styles.logoGallery}> Gallery</span>
//             <span style={styles.logoRest}>EMED</span>
//             <span style={styles.logoL}>L</span>
//           </div>
//           <div style={styles.navLinks}>
//             {navLinks.map((l) => (
//               <span key={l} style={styles.navLink}>{l}</span>
//             ))}
//           </div>
//           <div style={styles.navActions}>
//             <span style={styles.iconBtn} title="جستجو">⌕</span>
//             <span style={styles.iconBtn} title="سبد خرید">⊙</span>
//             <button style={styles.navCta}>ورود</button>
//           </div>
//         </div>
//       </nav>

//       {/* ── HERO ── */}
//       <section ref={heroRef} style={styles.hero}>
//         {/* vertical marquee text */}
//         <div style={styles.marqueeVert} aria-hidden="true">
//           {"LEMED · GALLERY · LUXURY · BAGS · SHOES · ".repeat(4)}
//         </div>

//         <div style={styles.heroContent}>
//           <p style={styles.heroEyebrow}>کالکشن پاییز — زمستان ۱۴۰۳</p>
//           <h1 style={styles.heroTitle}>
//             <span style={styles.heroTitleItalic}>هنر</span>
//             <br />
//             پوشیدن
//           </h1>
//           <p style={styles.heroSub}>
//             گالری لمد — جایی که هر کیف و کفش، روایتی از ظرافت است.
//           </p>
//           <div style={styles.heroButtons}>
//             <button style={styles.heroBtnPrimary}>
//               مشاهده کالکشن
//               <span style={{ marginRight: 8, fontSize: 18 }}>←</span>
//             </button>
//             <button style={styles.heroBtnGhost}>درباره گالری</button>
//           </div>
//         </div>

//         <div style={styles.heroVisual} aria-hidden="true">
//           <div style={styles.heroCircle}>
//             <span style={styles.heroEmoji}>👜</span>
//           </div>
//           <div style={styles.heroCircleAccent} />
//         </div>

//         {/* stats */}
//         <div style={styles.heroStats}>
//           {[
//             { num: "+۲۰۰", label: "مدل انحصاری" },
//             { num: "۱۲", label: "برند برتر جهان" },
//             { num: "۴.۹★", label: "رضایت مشتری" },
//           ].map((s) => (
//             <div key={s.label} style={styles.statItem}>
//               <span style={styles.statNum}>{s.num}</span>
//               <span style={styles.statLabel}>{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── MARQUEE BAND ── */}
//       <div style={styles.marqueeBand} aria-hidden="true">
//         <div style={styles.marqueeTrack}>
//           {Array(3).fill("LEMED Gallery · کیف · کفش · چرم دستدوز · ").join("")}
//         </div>
//       </div>

//       {/* ── PRODUCTS ── */}
//       <section style={styles.products}>
//         <div style={styles.productsHeader}>
//           <h2 style={styles.productsTitle}>کالکشن برگزیده</h2>
//           <div style={styles.filters}>
//             {["همه", "کیف", "کفش"].map((f) => (
//               <button
//                 key={f}
//                 onClick={() => setActiveFilter(f)}
//                 style={{
//                   ...styles.filterBtn,
//                   ...(activeFilter === f ? styles.filterBtnActive : {}),
//                 }}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div style={styles.grid}>
//           {filtered.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 ...styles.card,
//                 ...(hoveredProduct === p.id ? styles.cardHovered : {}),
//               }}
//               onMouseEnter={() => setHoveredProduct(p.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               <div style={{ ...styles.cardImg, background: p.color }}>
//                 <span style={styles.cardEmoji}>{p.icon}</span>
//                 <span style={styles.cardTag}>{p.tag}</span>
//                 <div style={styles.cardOverlay}>
//                   <button style={styles.quickAdd}>افزودن به سبد</button>
//                 </div>
//               </div>
//               <div style={styles.cardBody}>
//                 <p style={styles.cardCategory}>{p.category}</p>
//                 <p style={styles.cardName}>{p.name}</p>
//                 <p style={styles.cardSub}>{p.subtitle}</p>
//                 <div style={styles.cardFooter}>
//                   <span style={styles.cardPrice}>{p.price} ت</span>
//                   <span style={styles.cardArrow}>←</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── EDITORIAL BANNER ── */}
//       <section style={styles.editorial}>
//         <div style={styles.editorialText}>
//           <p style={styles.editorialEye}>داستان گالری</p>
//           <h2 style={styles.editorialTitle}>
//             از میلان<br />
//             <em style={{ fontStyle: "italic", color: "#c8a96e" }}>تا تهران</em>
//           </h2>
//           <p style={styles.editorialBody}>
//             لمد گالری در سال ۱۳۹۸ با هدف آوردن بهترین چرم‌های اروپایی به بازار ایران تأسیس شد.
//             هر محصول ما از دست استادکاران بومی و چرم‌های درجه یک ایتالیا و فرانسه ساخته می‌شود.
//           </p>
//           <button style={styles.editorialBtn}>بیشتر بدانید</button>
//         </div>
//         <div style={styles.editorialVisual}>
//           <div style={styles.editorialBox}>
//             <span style={{ fontSize: 80 }}>🛍️</span>
//           </div>
//           <div style={styles.editorialBadge}>
//             <span style={{ fontSize: 11, letterSpacing: 2 }}>SINCE</span>
//             <span style={{ fontSize: 28, fontWeight: 700 }}>۱۳۹۸</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FEATURES ── */}
//       <section style={styles.features}>
//         {[
//           { icon: "✦", title: "چرم اصل", body: "تمامی محصولات با گواهینامه اصالت" },
//           { icon: "◈", title: "ارسال سراسری", body: "بسته‌بندی لوکس در ۲ تا ۵ روز" },
//           { icon: "◉", title: "بازگشت ۳۰ روزه", body: "بدون سوال — بدون دردسر" },
//           { icon: "◇", title: "مشاوره اختصاصی", body: "استایلیست شخصی برای شما" },
//         ].map((f) => (
//           <div key={f.title} style={styles.featureItem}>
//             <span style={styles.featureIcon}>{f.icon}</span>
//             <p style={styles.featureTitle}>{f.title}</p>
//             <p style={styles.featureBody}>{f.body}</p>
//           </div>
//         ))}
//       </section>

//       {/* ── NEWSLETTER ── */}
//       <section style={styles.newsletter}>
//         <p style={styles.newsletterEye}>خبرنامه گالری</p>
//         <h2 style={styles.newsletterTitle}>اول بدانید</h2>
//         <p style={styles.newsletterSub}>
//           عضو شوید و از جدیدترین کالکشن‌ها و تخفیفات انحصاری مطلع شوید.
//         </p>
//         <div style={styles.newsletterForm}>
//           <input
//             type="email"
//             placeholder="آدرس ایمیل شما..."
//             style={styles.newsletterInput}
//           />
//           <button style={styles.newsletterBtn}>عضویت</button>
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer style={styles.footer}>
//         <div style={styles.footerTop}>
//           <div>
//             <p style={styles.footerLogo}>LEMED Gallery</p>
//             <p style={styles.footerTagline}>هنر پوشیدن — از ۱۳۹۸</p>
//           </div>
//           <div style={styles.footerLinks}>
//             {["کالکشن", "درباره ما", "تماس", "حریم خصوصی"].map((l) => (
//               <span key={l} style={styles.footerLink}>{l}</span>
//             ))}
//           </div>
//         </div>
//         <div style={styles.footerBottom}>
//           <span style={{ opacity: 0.4, fontSize: 12 }}>© ۱۴۰۳ گالری لمد — تمامی حقوق محفوظ است</span>
//           <div style={{ display: "flex", gap: 16 }}>
//             {["Instagram", "Telegram", "WhatsApp"].map((s) => (
//               <span key={s} style={styles.social}>{s}</span>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// const styles = {
//   root: {
//     direction: "rtl",
//     fontFamily: "'Vazirmatn', 'Tahoma', sans-serif",
//     background: "#0a0908",
//     color: "#f0ece4",
//     minHeight: "100vh",
//     overflowX: "hidden",
//     position: "relative",
//   },
//   noise: {
//     position: "fixed",
//     inset: 0,
//     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
//     opacity: 0.3,
//     pointerEvents: "none",
//     zIndex: 0,
//   },
//   nav: {
//     position: "fixed",
//     top: 0,
//     right: 0,
//     left: 0,
//     zIndex: 100,
//     transition: "background 0.4s, backdrop-filter 0.4s",
//     borderBottom: "0.5px solid rgba(255,255,255,0.06)",
//   },
//   navInner: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "18px 48px",
//     maxWidth: 1200,
//     margin: "0 auto",
//   },
//   logo: { display: "flex", alignItems: "baseline", gap: 0, cursor: "pointer" },
//   logoL: { fontSize: 26, fontWeight: 800, color: "#c8a96e", letterSpacing: -1 },
//   logoRest: { fontSize: 22, fontWeight: 700, color: "#f0ece4", letterSpacing: 4 },
//   logoGallery: { fontSize: 11, color: "rgba(200,169,110,0.7)", letterSpacing: 3, textTransform: "uppercase", marginRight: 8 },
//   navLinks: { display: "flex", gap: 36 },
//   navLink: { fontSize: 13, color: "rgba(240,236,228,0.6)", cursor: "pointer", letterSpacing: 1, transition: "color 0.2s" },
//   navActions: { display: "flex", alignItems: "center", gap: 16 },
//   iconBtn: { fontSize: 20, cursor: "pointer", color: "rgba(240,236,228,0.6)", lineHeight: 1 },
//   navCta: {
//     background: "transparent",
//     border: "0.5px solid rgba(200,169,110,0.5)",
//     color: "#c8a96e",
//     padding: "8px 20px",
//     borderRadius: 2,
//     fontSize: 12,
//     letterSpacing: 2,
//     cursor: "pointer",
//     textTransform: "uppercase",
//   },
//   hero: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: "120px 48px 80px",
//     maxWidth: 1200,
//     margin: "0 auto",
//     position: "relative",
//   },
//   marqueeVert: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     bottom: 0,
//     writingMode: "vertical-rl",
//     fontSize: 10,
//     letterSpacing: 4,
//     color: "rgba(200,169,110,0.15)",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     userSelect: "none",
//   },
//   heroContent: { maxWidth: 560, position: "relative", zIndex: 1 },
//   heroEyebrow: {
//     fontSize: 11,
//     letterSpacing: 4,
//     color: "#c8a96e",
//     textTransform: "uppercase",
//     marginBottom: 24,
//     display: "flex",
//     alignItems: "center",
//     gap: 12,
//   },
//   heroTitle: {
//     fontSize: "clamp(64px, 10vw, 110px)",
//     fontWeight: 800,
//     lineHeight: 0.95,
//     letterSpacing: -3,
//     color: "#f0ece4",
//     marginBottom: 28,
//   },
//   heroTitleItalic: {
//     fontStyle: "italic",
//     color: "#c8a96e",
//     fontWeight: 300,
//   },
//   heroSub: {
//     fontSize: 16,
//     color: "rgba(240,236,228,0.55)",
//     lineHeight: 1.8,
//     marginBottom: 44,
//     maxWidth: 400,
//   },
//   heroButtons: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" },
//   heroBtnPrimary: {
//     background: "#c8a96e",
//     color: "#0a0908",
//     border: "none",
//     padding: "16px 36px",
//     fontSize: 14,
//     fontWeight: 700,
//     letterSpacing: 1,
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: 4,
//     borderRadius: 2,
//     transition: "transform 0.2s, opacity 0.2s",
//   },
//   heroBtnGhost: {
//     background: "transparent",
//     color: "rgba(240,236,228,0.7)",
//     border: "0.5px solid rgba(240,236,228,0.2)",
//     padding: "16px 32px",
//     fontSize: 14,
//     letterSpacing: 1,
//     cursor: "pointer",
//     borderRadius: 2,
//   },
//   heroVisual: {
//     position: "absolute",
//     left: 80,
//     top: "50%",
//     transform: "translateY(-50%)",
//     pointerEvents: "none",
//   },
//   heroCircle: {
//     width: 380,
//     height: 380,
//     borderRadius: "50%",
//     border: "0.5px solid rgba(200,169,110,0.2)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     background: "radial-gradient(circle at 40% 40%, rgba(200,169,110,0.08) 0%, transparent 70%)",
//   },
//   heroEmoji: { fontSize: 140, filter: "drop-shadow(0 20px 60px rgba(200,169,110,0.3))" },
//   heroCircleAccent: {
//     position: "absolute",
//     width: 440,
//     height: 440,
//     borderRadius: "50%",
//     border: "0.5px solid rgba(200,169,110,0.08)",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   },
//   heroStats: {
//     display: "flex",
//     gap: 48,
//     marginTop: 80,
//     paddingTop: 40,
//     borderTop: "0.5px solid rgba(255,255,255,0.08)",
//   },
//   statItem: { display: "flex", flexDirection: "column", gap: 4 },
//   statNum: { fontSize: 28, fontWeight: 700, color: "#f0ece4" },
//   statLabel: { fontSize: 12, color: "rgba(240,236,228,0.45)", letterSpacing: 1 },
//   marqueeBand: {
//     overflow: "hidden",
//     borderTop: "0.5px solid rgba(200,169,110,0.15)",
//     borderBottom: "0.5px solid rgba(200,169,110,0.15)",
//     padding: "14px 0",
//     background: "rgba(200,169,110,0.04)",
//   },
//   marqueeTrack: {
//     whiteSpace: "nowrap",
//     fontSize: 12,
//     letterSpacing: 4,
//     color: "rgba(200,169,110,0.5)",
//     textTransform: "uppercase",
//     animation: "marquee 30s linear infinite",
//   },
//   products: {
//     padding: "100px 48px",
//     maxWidth: 1200,
//     margin: "0 auto",
//   },
//   productsHeader: {
//     display: "flex",
//     alignItems: "flex-end",
//     justifyContent: "space-between",
//     marginBottom: 56,
//     flexWrap: "wrap",
//     gap: 24,
//   },
//   productsTitle: {
//     fontSize: 40,
//     fontWeight: 700,
//     letterSpacing: -1,
//     color: "#f0ece4",
//   },
//   filters: { display: "flex", gap: 8 },
//   filterBtn: {
//     background: "transparent",
//     border: "0.5px solid rgba(255,255,255,0.12)",
//     color: "rgba(240,236,228,0.5)",
//     padding: "8px 22px",
//     fontSize: 13,
//     letterSpacing: 1,
//     cursor: "pointer",
//     borderRadius: 2,
//     transition: "all 0.2s",
//   },
//   filterBtnActive: {
//     background: "#c8a96e",
//     border: "0.5px solid #c8a96e",
//     color: "#0a0908",
//     fontWeight: 700,
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//     gap: 24,
//   },
//   card: {
//     borderRadius: 4,
//     overflow: "hidden",
//     border: "0.5px solid rgba(255,255,255,0.08)",
//     cursor: "pointer",
//     transition: "transform 0.3s, border-color 0.3s",
//     background: "rgba(255,255,255,0.02)",
//   },
//   cardHovered: {
//     transform: "translateY(-6px)",
//     borderColor: "rgba(200,169,110,0.3)",
//   },
//   cardImg: {
//     height: 260,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     overflow: "hidden",
//   },
//   cardEmoji: { fontSize: 90, filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" },
//   cardTag: {
//     position: "absolute",
//     top: 14,
//     right: 14,
//     background: "#c8a96e",
//     color: "#0a0908",
//     fontSize: 10,
//     fontWeight: 700,
//     padding: "4px 10px",
//     letterSpacing: 1,
//     borderRadius: 2,
//   },
//   cardOverlay: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 16,
//     background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
//     display: "flex",
//     justifyContent: "center",
//     opacity: 0,
//     transition: "opacity 0.2s",
//   },
//   quickAdd: {
//     background: "#f0ece4",
//     color: "#0a0908",
//     border: "none",
//     padding: "10px 28px",
//     fontSize: 12,
//     fontWeight: 700,
//     letterSpacing: 1,
//     cursor: "pointer",
//     borderRadius: 2,
//     width: "100%",
//   },
//   cardBody: { padding: "20px 20px 24px" },
//   cardCategory: {
//     fontSize: 10,
//     color: "#c8a96e",
//     letterSpacing: 3,
//     textTransform: "uppercase",
//     marginBottom: 8,
//   },
//   cardName: { fontSize: 18, fontWeight: 700, color: "#f0ece4", marginBottom: 6 },
//   cardSub: { fontSize: 13, color: "rgba(240,236,228,0.4)", marginBottom: 20 },
//   cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
//   cardPrice: { fontSize: 16, fontWeight: 700, color: "#c8a96e" },
//   cardArrow: { fontSize: 20, color: "rgba(240,236,228,0.3)" },
//   editorial: {
//     maxWidth: 1200,
//     margin: "0 auto",
//     padding: "0 48px 100px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: 80,
//     alignItems: "center",
//   },
//   editorialText: {},
//   editorialEye: {
//     fontSize: 10,
//     letterSpacing: 5,
//     color: "#c8a96e",
//     textTransform: "uppercase",
//     marginBottom: 20,
//   },
//   editorialTitle: {
//     fontSize: 56,
//     fontWeight: 800,
//     lineHeight: 1.05,
//     letterSpacing: -2,
//     color: "#f0ece4",
//     marginBottom: 28,
//   },
//   editorialBody: {
//     fontSize: 15,
//     color: "rgba(240,236,228,0.55)",
//     lineHeight: 1.9,
//     marginBottom: 36,
//   },
//   editorialBtn: {
//     background: "transparent",
//     border: "0.5px solid rgba(200,169,110,0.5)",
//     color: "#c8a96e",
//     padding: "12px 32px",
//     fontSize: 12,
//     letterSpacing: 2,
//     cursor: "pointer",
//     borderRadius: 2,
//     textTransform: "uppercase",
//   },
//   editorialVisual: {
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 400,
//   },
//   editorialBox: {
//     width: 300,
//     height: 300,
//     border: "0.5px solid rgba(200,169,110,0.2)",
//     borderRadius: 4,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "rgba(200,169,110,0.04)",
//     transform: "rotate(-3deg)",
//   },
//   editorialBadge: {
//     position: "absolute",
//     bottom: 40,
//     left: 40,
//     background: "#c8a96e",
//     color: "#0a0908",
//     padding: "16px 24px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     borderRadius: 2,
//   },
//   features: {
//     borderTop: "0.5px solid rgba(255,255,255,0.06)",
//     borderBottom: "0.5px solid rgba(255,255,255,0.06)",
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     background: "rgba(200,169,110,0.03)",
//   },
//   featureItem: {
//     padding: "56px 36px",
//     borderLeft: "0.5px solid rgba(255,255,255,0.06)",
//     "&:last-child": { borderLeft: "none" },
//   },
//   featureIcon: {
//     fontSize: 24,
//     color: "#c8a96e",
//     display: "block",
//     marginBottom: 20,
//   },
//   featureTitle: {
//     fontSize: 15,
//     fontWeight: 700,
//     color: "#f0ece4",
//     marginBottom: 10,
//     letterSpacing: 0.5,
//   },
//   featureBody: {
//     fontSize: 13,
//     color: "rgba(240,236,228,0.45)",
//     lineHeight: 1.7,
//   },
//   newsletter: {
//     maxWidth: 640,
//     margin: "0 auto",
//     padding: "100px 48px",
//     textAlign: "center",
//   },
//   newsletterEye: {
//     fontSize: 10,
//     letterSpacing: 5,
//     color: "#c8a96e",
//     textTransform: "uppercase",
//     marginBottom: 16,
//   },
//   newsletterTitle: {
//     fontSize: 48,
//     fontWeight: 800,
//     color: "#f0ece4",
//     letterSpacing: -2,
//     marginBottom: 20,
//   },
//   newsletterSub: {
//     fontSize: 15,
//     color: "rgba(240,236,228,0.5)",
//     lineHeight: 1.8,
//     marginBottom: 40,
//   },
//   newsletterForm: {
//     display: "flex",
//     gap: 0,
//     maxWidth: 460,
//     margin: "0 auto",
//     border: "0.5px solid rgba(200,169,110,0.3)",
//     borderRadius: 3,
//     overflow: "hidden",
//   },
//   newsletterInput: {
//     flex: 1,
//     background: "transparent",
//     border: "none",
//     outline: "none",
//     padding: "14px 20px",
//     fontSize: 14,
//     color: "#f0ece4",
//     direction: "rtl",
//     fontFamily: "inherit",
//   },
//   newsletterBtn: {
//     background: "#c8a96e",
//     border: "none",
//     color: "#0a0908",
//     padding: "14px 28px",
//     fontSize: 13,
//     fontWeight: 700,
//     letterSpacing: 1,
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   },
//   footer: {
//     borderTop: "0.5px solid rgba(255,255,255,0.08)",
//     padding: "48px 48px 32px",
//     maxWidth: 1200,
//     margin: "0 auto",
//   },
//   footerTop: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 40,
//     flexWrap: "wrap",
//     gap: 24,
//   },
//   footerLogo: { fontSize: 22, fontWeight: 800, color: "#f0ece4", letterSpacing: 2 },
//   footerTagline: { fontSize: 12, color: "rgba(200,169,110,0.6)", marginTop: 6 },
//   footerLinks: { display: "flex", gap: 32 },
//   footerLink: { fontSize: 13, color: "rgba(240,236,228,0.4)", cursor: "pointer", letterSpacing: 1 },
//   footerBottom: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexWrap: "wrap",
//     gap: 16,
//   },
//   social: {
//     fontSize: 11,
//     color: "rgba(240,236,228,0.4)",
//     cursor: "pointer",
//     letterSpacing: 1,
//     textTransform: "uppercase",
//   },
// };
