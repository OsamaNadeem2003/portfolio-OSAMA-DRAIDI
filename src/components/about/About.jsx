import React from "react";
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import { EDUCATION, COURSES, SKILLS, LANGUAGES } from "../../data/portfolioData";
import { MotionBox, fadeUp } from "../common/Motion";

function Card({ title, icon, children, hideHeader = false }) {
  return (
    <Box
      sx={(t) => ({
        border: `1px solid ${t.palette.divider}`,
        borderRadius: 2,
        p: 2,
        backgroundColor:
          t.palette.mode === "dark"
            ? "rgba(15,23,42,0.45)"
            : "rgba(255,255,255,0.72)",
      })}
    >
      {!hideHeader && (
        <>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            {icon}
            <Typography sx={{ fontWeight: 900, fontSize: 16 }}>
              {title}
            </Typography>
          </Stack>
          <Divider sx={{ mb: 1.5 }} />
        </>
      )}

      {children}
    </Box>
  );
}

export default function About() {
  return (
    <Box id="about" sx={{ mt: { xs: 5, md: 7 } }}>
      <MotionBox {...fadeUp(0)}>
        <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 } }}>
          About
        </Typography>
        <Typography
          sx={(t) => ({
            mt: 0.8,
            color: t.palette.text.secondary,
            lineHeight: 1.85,
          })}
        >
          Education, courses, skills, and languages.
        </Typography>
      </MotionBox>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >
        {/* Education */}
        <Card title="Education" icon={<SchoolRoundedIcon />}>
          <Stack spacing={1.3}>
            {EDUCATION.map((e, idx) => (
              <Box key={idx} sx={{ display: "grid", gap: 0.35 }}>
                <Typography sx={{ fontWeight: 900 }}>{e.title}</Typography>
                <Typography
                  sx={(t) => ({ color: t.palette.text.secondary, fontSize: 13.5 })}
                >
                  {e.org} • {e.place} • {e.period}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {e.details?.map((d) => (
                    <Chip key={d} label={d} size="small" />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Card>

        {/* Courses */}
        <Card title="Courses" icon={<SchoolRoundedIcon />}>
          <Stack spacing={1.2}>
            {COURSES.map((c, idx) => (
              <Box key={idx} sx={{ display: "grid", gap: 0.35 }}>
                <Typography sx={{ fontWeight: 900 }}>{c.title}</Typography>
                <Typography
                  sx={(t) => ({ color: t.palette.text.secondary, fontSize: 13.5 })}
                >
                  {c.org} • {c.place} • {c.period}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Card>

        {/* Skills */}
        <Card title="Skills" icon={<BuildRoundedIcon />}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {SKILLS.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </Stack>
        </Card>

        {/* Languages */}
        <Card hideHeader>
          {/* العنوان الداخلي */}
          <Stack direction="row" spacing={1} alignItems="center">
            <TranslateRoundedIcon />
            <Typography sx={{ fontWeight: 900, fontSize: 16 }}>
              Languages
            </Typography>
          </Stack>

          {/* ✅ Divider تحت العنوان */}
          <Divider sx={{ my: 1.5 }} />

          <Stack spacing={0.8}>
            {LANGUAGES.map((l) => (
              <Typography
                key={l.name}
                sx={(t) => ({ color: t.palette.text.secondary })}
              >
                <b style={{ color: "inherit" }}>{l.name}</b> — {l.level}
              </Typography>
            ))}
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
