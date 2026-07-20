const VARIANTS = {
  primary:
    "bg-ink text-offwhite hover:bg-brand-red",
  light:
    "bg-offwhite text-ink hover:bg-sand",
  outline:
    "bg-transparent border border-ink text-ink hover:bg-ink hover:text-offwhite",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={[
        "inline-block border-none cursor-pointer font-body",
        "text-[0.78rem] tracking-[0.12em] uppercase",
        "px-8 py-3.5 transition-colors duration-DEFAULT",
        VARIANTS[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
