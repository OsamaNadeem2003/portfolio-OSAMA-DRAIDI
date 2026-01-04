import React from "react";
import { MotionBox } from "./Motion";

export default function ParallaxTilt({
  children,
  maxRotate = 6,
  maxTranslate = 14,
  style,
}) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({ rx: 0, ry: 0, tx: 0, ty: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    const ry = (px - 0.5) * (maxRotate * 2);
    const rx = (0.5 - py) * (maxRotate * 2);

    const tx = (px - 0.5) * (maxTranslate * 2);
    const ty = (py - 0.5) * (maxTranslate * 2);

    setT({ rx, ry, tx, ty });
  };

  const onLeave = () => setT({ rx: 0, ry: 0, tx: 0, ty: 0 });

  return (
    <MotionBox
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ rotateX: t.rx, rotateY: t.ry, x: t.tx, y: t.ty }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.6 }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </MotionBox>
  );
}
