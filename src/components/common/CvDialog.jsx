import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { useTheme } from "@mui/material/styles";

export default function CvDialog({ open, onClose, pdfPath, fullName }) {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ pb: 1.2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography sx={{ fontWeight: 900 }}>CV Preview</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 13.5 }}>
              {fullName}
            </Typography>
          </Box>

          <IconButton onClick={onClose} aria-label="close">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ pt: 0 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mb: 1.5 }}>
          <Button
            component="a"
            href={pdfPath}
            download
            variant="contained"
            startIcon={<DownloadRoundedIcon />}
            sx={{ borderRadius: 3, py: 1.1 }}
          >
            Download PDF
          </Button>

          <Button
            component="a"
            href={pdfPath}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            startIcon={<OpenInNewRoundedIcon />}
            sx={{ borderRadius: 3, py: 1.1 }}
          >
            Open in new tab
          </Button>
        </Stack>

        <Box
          sx={(t) => ({
            border: `1px solid ${t.palette.divider}`,
            borderRadius: 3,
            overflow: "hidden",
            height: isDownMd ? "70vh" : 640,
            backgroundColor: t.palette.background.paper,
          })}
        >
          <iframe
            title="CV PDF"
            src={pdfPath}
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </Box>

        <Typography sx={{ mt: 1.2, color: "text.secondary", fontSize: 12.5 }}>
          If PDF preview doesn’t show on some browsers, use “Open in new tab”.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
