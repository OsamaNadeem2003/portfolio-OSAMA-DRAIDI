import React from "react";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { PROFILE } from "../../data/portfolioData";
import { MotionBox, fadeUp } from "../common/Motion";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setEmail("");
    setMessage("");
  };

  const whatsappNumber = PROFILE.phone.replace(/[^\d]/g, "");

  return (
    <Box id="contact" sx={{ mt: { xs: 5, md: 7 } }}>
      <MotionBox {...fadeUp(0)}>
        <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <MailOutlineRoundedIcon />
            <span>Contact</span>
          </Stack>
        </Typography>

        <Typography
          sx={(t) => ({
            mt: 0.8,
            color: t.palette.text.secondary,
          })}
        >
          Email: {PROFILE.email} • Phone: {PROFILE.phone}
        </Typography>
      </MotionBox>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          gap: 2.2,
          alignItems: "start",
        }}
      >
        {/* LEFT: FORM */}
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={(t) => ({
            border: `1px solid ${t.palette.divider}`,
            borderRadius: 4,
            p: { xs: 2, md: 2.5 },
            backgroundColor:
              t.palette.mode === "dark"
                ? "rgba(15,23,42,0.45)"
                : "rgba(255,255,255,0.72)",
          })}
        >
          <Stack spacing={2}>
            <TextField
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              multiline
              minRows={5}
              fullWidth
            />

            <Button type="submit" variant="contained" size="large" sx={{ py: 1.2 }}>
              Submit
            </Button>

            <Divider />

            {/* ACTION BUTTONS */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              flexWrap="wrap"
              useFlexGap
            >
              <Button
                component="a"
                href={`mailto:${PROFILE.email}`}
                variant="outlined"
                sx={{ borderRadius: 3 }}
              >
                Email Me: {PROFILE.email}
              </Button>

              <Button
                component="a"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                startIcon={<WhatsAppIcon />}
                variant="outlined"
                sx={{ borderRadius: 3 }}
              >
                WhatsApp: {PROFILE.phone}
              </Button>

              <Button
                component="a"
                href={PROFILE.facebook}
                target="_blank"
                rel="noreferrer"
                startIcon={<FacebookRoundedIcon />}
                variant="outlined"
                sx={{ borderRadius: 3 }}
              >
                Facebook: osama duraidy 
              </Button>

              <Button
                component="a"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                startIcon={<LinkedInIcon />}
                variant="outlined"
                sx={{ borderRadius: 3 }}
              >
                LinkedIn: osama draidi
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* RIGHT: INFO CARD (كما هو) */}
        <Box
          sx={(t) => ({
            display: { xs: "none", md: "block" },
            border: `1px solid ${t.palette.divider}`,
            borderRadius: 4,
            overflow: "hidden",
            minHeight: 280,
            position: "relative",
            background:
              t.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(46,160,255,0.12), rgba(34,197,94,0.08))"
                : "linear-gradient(135deg, rgba(46,160,255,0.10), rgba(34,197,94,0.06))",
          })}
        >
          <Box sx={{ position: "relative", p: 3 }}>
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              Let’s build something clean
            </Typography>
            <Typography
              sx={(t) => ({
                mt: 1,
                color: t.palette.text.secondary,
                lineHeight: 1.85,
              })}
            >
              If you have an internship opportunity or a UI project, I’m happy to
              discuss details.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
          Message sent (demo). You can wire it to backend later.
        </Alert>
      </Snackbar>
    </Box>
  );
}
