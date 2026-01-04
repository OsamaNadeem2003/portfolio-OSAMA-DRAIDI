import { createTheme, alpha } from "@mui/material/styles";

const ACCENT = "#2EA0FF";
const BG_DARK = "#0B0F19";
const PAPER_DARK = "#0F172A";

export function buildTheme(mode = "dark") {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: ACCENT },
      background: {
        default: isDark ? BG_DARK : "#F6F7FB",
        paper: isDark ? PAPER_DARK : "#FFFFFF",
      },
      text: {
        primary: isDark ? "#EDEEF3" : "#0B1220",
        secondary: isDark ? alpha("#EDEEF3", 0.72) : alpha("#0B1220", 0.68),
      },
      divider: isDark ? alpha("#EDEEF3", 0.12) : alpha("#0B1220", 0.12),
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily: `Roboto, system-ui, -apple-system, Segoe UI, Arial`,
      h1: { fontWeight: 900, letterSpacing: -0.6 },
      h2: { fontWeight: 800, letterSpacing: -0.4 },
      button: { fontWeight: 700, textTransform: "none" },
    },
    components: {
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: "none" } },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 16 },
        },
      },
    },
  });
}
