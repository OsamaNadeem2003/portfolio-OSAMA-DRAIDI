import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { buildTheme } from "./theme/theme";
import PageShell from "./components/layout/PageShell";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTopFab from "./components/common/ScrollToTopFab";

export default function App() {
  const [mode, setMode] = React.useState(() => {
    const saved = localStorage.getItem("osama_portfolio_mode");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  const theme = React.useMemo(() => buildTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("osama_portfolio_mode", next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageShell>
        <Header mode={mode} onToggleMode={toggleMode} />
        <Hero />
        <About />

        {/* ✅ بدل Experience */}
       
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopFab />
      </PageShell>
    </ThemeProvider>
  );
}
