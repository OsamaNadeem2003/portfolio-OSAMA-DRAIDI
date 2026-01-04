import React from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { NAV_ITEMS } from "../../data/portfolioData";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({ mode, onToggleMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        sx={(t) => ({
          top: 0,
          backgroundColor:
            t.palette.mode === "dark"
              ? "rgba(11,15,25,0.55)"
              : "rgba(246,247,251,0.70)",
          backdropFilter: "blur(14px)",
          border: `1px solid ${t.palette.divider}`,
          borderRadius: 999,
          mt: { xs: 1, md: 2 },
          overflow: "hidden",
        })}
      >
        <Toolbar
          sx={{
            minHeight: 64,
            px: { xs: 1, md: 2 },
            position: "relative",
          }}
        >
          {/* LEFT: menu button (mobile) OR spacer (desktop) */}
          <Box sx={{ display: "flex", alignItems: "center", minWidth: 48 }}>
            {isMobile ? (
              <IconButton
                onClick={() => setOpen(true)}
                sx={(t) => ({
                  border: `1px solid ${t.palette.divider}`,
                  borderRadius: 999,
                })}
                aria-label="open menu"
              >
                <MenuRoundedIcon />
              </IconButton>
            ) : (
              <Box sx={{ width: 44 }} />
            )}
          </Box>

          {/* CENTER: nav (like the 2nd image) */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={0.6}
                sx={(t) => ({
                  p: 0.7,
                  borderRadius: 999,
                  border: `1px solid ${t.palette.divider}`,
                  backgroundColor:
                    t.palette.mode === "dark"
                      ? "rgba(15,23,42,0.55)"
                      : "rgba(255,255,255,0.65)",
                })}
              >
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToId(item.id)}
                    size="small"
                    sx={{
                      px: 2,
                      borderRadius: 999,
                      fontWeight: 800,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}

          {/* RIGHT: mode button (same as you want) */}
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 1,
              minWidth: 48,
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={onToggleMode}
              sx={(t) => ({
                border: `1px solid ${t.palette.divider}`,
                borderRadius: 999,
              })}
              aria-label="toggle theme"
            >
              {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={(t) => ({
            width: 320,
            height: "100%",
            p: 2,
            backgroundColor: t.palette.background.paper,
          })}
          role="presentation"
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>Menu</Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="close menu">
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={1}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  scrollToId(item.id);
                }}
                variant="outlined"
                sx={{ justifyContent: "flex-start", borderRadius: 3, py: 1.2 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Button
            onClick={onToggleMode}
            startIcon={mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            variant="contained"
            sx={{ borderRadius: 3, py: 1.2 }}
          >
            Switch to {mode === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
