import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FILTERS, PROJECTS } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import { MotionBox, stagger, childFadeUp, fadeUp } from "../common/Motion";

export default function Projects() {
  const [active, setActive] = React.useState("all");
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <Box id="projects" sx={{ mt: { xs: 5, md: 7 } }}>
      <MotionBox {...fadeUp(0)}>
        <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 } }}>
          Projects
        </Typography>
        <Typography sx={(t) => ({ mt: 0.8, color: t.palette.text.secondary })}>
          A quick selection of my work and practice projects.
        </Typography>
      </MotionBox>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
          gap: 2.2,
          alignItems: "start",
        }}
      >
        <MotionBox {...childFadeUp}>
          <Stack
            spacing={1}
            sx={(t) => ({
              border: `1px solid ${t.palette.divider}`,
              borderRadius: 4,
              p: 1.5,
              position: { md: "sticky" },
              top: { md: 96 },
              backgroundColor:
                t.palette.mode === "dark" ? "rgba(15,23,42,0.45)" : "rgba(255,255,255,0.70)",
            })}
          >
            {FILTERS.map((f) => {
              const isActive = f.key === active;
              return (
                <Button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  variant={isActive ? "contained" : "outlined"}
                  sx={{ justifyContent: "flex-start", borderRadius: 3, py: 1.1, fontWeight: 800 }}
                >
                  {f.label}
                </Button>
              );
            })}
          </Stack>
        </MotionBox>

        <MotionBox
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
              gap: 2,
            }}
          >
            {filtered.map((p) => (
              <MotionBox key={p.id} {...childFadeUp}>
                <ProjectCard project={p} />
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
