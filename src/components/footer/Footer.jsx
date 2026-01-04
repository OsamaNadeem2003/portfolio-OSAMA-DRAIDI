import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { NAV_ITEMS, PROFILE } from "../../data/portfolioData";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <Box sx={{ mt: { xs: 5, md: 7 }, pb: 3 }}>
      <Divider sx={{ mb: 2.5 }} />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {NAV_ITEMS.map((x) => (
            <Button key={x.id} onClick={() => scrollToId(x.id)} size="small" sx={{ borderRadius: 999 }}>
              {x.label}
            </Button>
          ))}
        </Stack>

        <Typography sx={(t) => ({ color: t.palette.text.secondary, fontSize: 13.5 })}>
          © {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
