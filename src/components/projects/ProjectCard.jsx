import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import { MotionBox } from "../common/Motion";

export default function ProjectCard({ project }) {
  return (
    <MotionBox
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
    >
      <Card
        sx={(t) => ({
          border: `1px solid ${t.palette.divider}`,
          // ✅ قللنا ال radius للكارد
          borderRadius: 3,
          overflow: "hidden",
          transition: "0.25s",
          "&:hover": { borderColor: t.palette.primary.main },
        })}
      >
        {/* IMAGE HEADER */}
        <Box
          sx={{
            height: 170,
            position: "relative",
            background: project.accent,
            overflow: "hidden",
          }}
        >
          {project.image && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scale(1.03)",
              }}
            />
          )}

          {/* overlay */}
          <Box
            sx={(t) => ({
              position: "absolute",
              inset: 0,
              background:
                t.palette.mode === "dark"
                  ? "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.62))"
                  : "linear-gradient(180deg, rgba(255,255,255,0.00), rgba(255,255,255,0.45))",
            })}
          />

          {/* meta chip */}
          {project.meta && (
            <Chip
              label={project.meta}
              size="small"
              sx={(t) => ({
                position: "absolute",
                left: 12,
                bottom: 12,
                fontWeight: 900,
                borderRadius: 2, // ✅ أقل
                backgroundColor:
                  t.palette.mode === "dark"
                    ? "rgba(15,23,42,0.72)"
                    : "rgba(255,255,255,0.72)",
                border: `1px solid ${t.palette.divider}`,
              })}
            />
          )}
        </Box>

        <CardContent sx={{ pb: 1 }}>
          <Typography sx={{ fontWeight: 900, fontSize: 16.5 }}>
            {project.title}
          </Typography>

          <Typography
            sx={(t) => ({
              mt: 0.7,
              color: t.palette.text.secondary,
              fontSize: 13.5,
              lineHeight: 1.7,
            })}
          >
            {project.desc}
          </Typography>
        </CardContent>

        {/* ✅ شلنا More وخَلّينا فقط Live + GitHub */}
        <CardActions sx={{ px: 2, pb: 2, pt: 0.5 }}>
          <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
            <Button
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<LinkRoundedIcon />}
              sx={{
                flex: 1,
                borderRadius: 2.5, // ✅ أقل من قبل
                py: 1.05,
                fontWeight: 900,
              }}
            >
              Live
            </Button>

            <Button
              component="a"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{
                flex: 1,
                borderRadius: 2.5, // ✅ أقل
                py: 1.05,
                fontWeight: 900,
              }}
            >
              GitHub
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </MotionBox>
  );
}
