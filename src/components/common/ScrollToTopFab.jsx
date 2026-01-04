import React from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

export default function ScrollToTopFab() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Zoom in={show}>
      <Fab
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        color="primary"
        size="medium"
        sx={{
          position: "fixed",
          right: { xs: 16, md: 24 },
          bottom: { xs: 16, md: 24 },
          borderRadius: 999,
        }}
        aria-label="scroll to top"
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </Zoom>
  );
}
