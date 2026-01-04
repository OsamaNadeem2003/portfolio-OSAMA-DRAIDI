import React from "react";
import { Box, Container } from "@mui/material";

export default function PageShell({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <Box
        sx={(t) => ({
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: t.palette.mode === "dark" ? 0.9 : 1,
          background:
            t.palette.mode === "dark"
              ? `
              radial-gradient(900px 500px at 15% 10%, rgba(46,160,255,0.18), transparent 60%),
              radial-gradient(900px 500px at 85% 18%, rgba(124,58,237,0.14), transparent 62%),
              radial-gradient(900px 500px at 40% 85%, rgba(34,197,94,0.10), transparent 65%)
              `
              : `
              radial-gradient(900px 500px at 15% 10%, rgba(46,160,255,0.14), transparent 60%),
              radial-gradient(900px 500px at 85% 18%, rgba(124,58,237,0.10), transparent 62%),
              radial-gradient(900px 500px at 40% 85%, rgba(34,197,94,0.08), transparent 65%)
              `,
        })}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 2, md: 4 } }}>
        {children}
      </Container>
    </Box>
  );
}
