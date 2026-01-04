import React from "react";
import { Avatar, Box, Chip, IconButton, Stack, Typography, Button } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

import { PROFILE } from "../../data/portfolioData";
import { MotionBox, fadeUp } from "../common/Motion";
import ParallaxTilt from "../common/ParallaxTilt";
import CvDialog from "../common/CvDialog";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const [cvOpen, setCvOpen] = React.useState(false);

  return (
    <Box id="home">
      <MotionBox {...fadeUp(0)}>
        <Box
          sx={{
            mt: { xs: 3, md: 5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 3, md: 3.5 },
            alignItems: "center",
          }}
        >
          <Box>
            <Stack direction="row" spacing={1.2} alignItems="flex-end">
              <Avatar
                src="/assets/osama-mod.png"
                alt={PROFILE.fullName}
                sx={(t) => ({
                  width: 88,
                  height: 88,
                  border: `2px solid ${t.palette.primary.main}`,
                  boxShadow:
                    t.palette.mode === "dark"
                      ? "0 0 0 6px rgba(46,160,255,0.10)"
                      : "0 0 0 6px rgba(46,160,255,0.08)",
                })}
              />
              <Chip
                icon={<VerifiedRoundedIcon />}
                label={PROFILE.location}
                sx={(t) => ({
                  mb: 0.6,
                  borderRadius: 999,
                  fontWeight: 800,
                  backgroundColor:
                    t.palette.mode === "dark"
                      ? "rgba(46,160,255,0.14)"
                      : "rgba(46,160,255,0.12)",
                })}
              />
            </Stack>

            <Typography
              variant="h1"
              sx={{ mt: 2.2, fontSize: { xs: 32, sm: 40, md: 52 }, lineHeight: 1.05 }}
            >
              {PROFILE.fullName}
              <Box component="span" sx={(t) => ({ color: t.palette.primary.main })}>
                {" "}
                • CSE 
              </Box>
            </Typography>

            <Typography
              sx={(t) => ({
                mt: 1.6,
                maxWidth: 720,
                color: t.palette.text.secondary,
                fontSize: { xs: 14.5, md: 15.5 },
                lineHeight: 1.9,
              })}
            >
              I hold a Bachelor's degree in Computer Systems Engineering from PTUK University. 
              I am interested in developing websites and building front-ends in a visually appealing, creative, 
              and responsive way using JavaScript, React, and MUI.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              sx={{ mt: 2.2 }}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <MotionBox whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowDownwardRoundedIcon />}
                  onClick={() => scrollToId("about")}
                  sx={{ px: 2.2, py: 1.2, width: "100%" }}
                >
                  About Me
                </Button>
              </MotionBox>

              <MotionBox whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToId("projects")}
                  sx={{ px: 2.2, py: 1.2, width: "100%" }}
                >
                  Projects
                </Button>
              </MotionBox>

              <MotionBox whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PictureAsPdfRoundedIcon />}
                  onClick={() => setCvOpen(true)}
                  sx={{ px: 2.2, py: 1.2, width: "100%" }}
                >
                  View CV (PDF)
                </Button>
              </MotionBox>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mt: 2.3 }}>
              <MotionBox whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <IconButton
                  component="a"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  sx={(t) => ({ border: `1px solid ${t.palette.divider}` })}
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </MotionBox>

              <MotionBox whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <IconButton
                  component="a"
                  href={PROFILE.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  sx={(t) => ({ border: `1px solid ${t.palette.divider}` })}
                  aria-label="Codeforces"
                >
                  <LinkRoundedIcon />
                </IconButton>
              </MotionBox>
            </Stack>
          </Box>

          <ParallaxTilt>
            <Box
              sx={(t) => ({
                border: `1px solid ${t.palette.divider}`,
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                minHeight: { xs: 220, md: 360 },
                background:
                  t.palette.mode === "dark"
                    ? "linear-gradient(135deg, rgba(46,160,255,0.14), rgba(124,58,237,0.10))"
                    : "linear-gradient(135deg, rgba(46,160,255,0.12), rgba(124,58,237,0.08))",
              })}
            >
              <Box
                sx={(t) => ({
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  filter: "blur(30px)",
                  background:
                    t.palette.mode === "dark"
                      ? "rgba(46,160,255,0.35)"
                      : "rgba(46,160,255,0.28)",
                  top: -40,
                  left: -40,
                  animation: "floatGlow 6s ease-in-out infinite",
                  "@keyframes floatGlow": {
                    "0%": { transform: "translate(0px,0px)" },
                    "50%": { transform: "translate(220px,160px)" },
                    "100%": { transform: "translate(0px,0px)" },
                  },
                })}
              />

              <Stack sx={{ position: "relative", p: { xs: 2.2, md: 3 } }} spacing={1.2}>
                <Typography sx={{ fontWeight: 900, fontSize: 18 }}>INFO : </Typography>

                {[
                  { k: "Email", v: PROFILE.email },
                  { k: "Phone", v: PROFILE.phone },
                  { k: "Nationality", v: PROFILE.nationality },
                  { k: "DOB", v: `${PROFILE.dobLabel} • ${PROFILE.gender}` },
                ].map((x) => (
                  <MotionBox
                    key={x.k}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <Box
                      sx={(t) => ({
                        border: `1px solid ${t.palette.divider}`,
                        borderRadius: 3,
                        p: 1.4,
                        backgroundColor:
                          t.palette.mode === "dark"
                            ? "rgba(15,23,42,0.55)"
                            : "rgba(255,255,255,0.65)",
                      })}
                    >
                      <Typography sx={{ fontWeight: 900, fontSize: 13.5 }}>{x.k}</Typography>
                      <Typography sx={{ mt: 0.35, color: "text.secondary", fontSize: 13.5 }}>
                        {x.v}
                      </Typography>
                    </Box>
                  </MotionBox>
                ))}
              </Stack>
            </Box>
          </ParallaxTilt>
        </Box>
      </MotionBox>

      <CvDialog
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        pdfPath={PROFILE.cvPdfPath}
        fullName={PROFILE.fullName}
      />
    </Box>
  );
}
