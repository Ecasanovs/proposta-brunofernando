import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./i18n/LanguageContext";

inject();

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

// Vercel Analytics initialized above
