export default function Footer() {
  return (
    <footer className="border-t border-mist px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.72rem] text-sage tracking-[0.08em] text-center">
      <span>© {new Date().getFullYear()} LeMed. All rights reserved.</span>
      <span>Designed with care.</span>
    </footer>
  );
}
