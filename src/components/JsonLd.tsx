import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface JsonLdProps {
  data: Record<string, unknown>;
}

const JsonLd = ({ data }: JsonLdProps) => {
  const location = useLocation();

  useEffect(() => {
    const id = `jsonld-${location.pathname.replace(/\//g, "-")}`;
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => {
      script?.remove();
    };
  }, [data, location.pathname]);

  return null;
};

export default JsonLd;
