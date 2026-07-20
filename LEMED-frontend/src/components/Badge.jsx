export default function Badge({ children, dir = "ltr" }) {
  if (!children) return null;
  const sideClass = dir === "rtl" ? "right-4" : "left-4";
  return (
    <span
    style={{padding : "0px 5px"}}
      className={`absolute top-4 ${sideClass} bg-red-500 text-white px-3 py-1 rounded-md text-offwhite text-[0.65rem] tracking-[0.1em] uppercase  py-1`}
    >
      {children}
    </span>
  );
}
