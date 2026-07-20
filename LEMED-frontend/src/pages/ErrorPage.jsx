import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import Button from "../components/Button";

export default function ErrorPage() {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <div
      dir={t.dir}
      className="min-h-screen flex flex-col items-center justify-center gap-6 bg-offwhite text-center px-6"
    >
      <span className="font-display text-8xl text-mist">404</span>
      <h1 className="font-display text-3xl font-light">{t.notFoundTitle}</h1>
      <p className="text-clay">{t.notFoundText}</p>
      <Button onClick={() => navigate("/")}>{t.backHome}</Button>
    </div>
  );
}
