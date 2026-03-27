import { useEffect, useRef } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export const CursorSparkle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const sparkleIdRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create sparkles on mouse move
      if (Math.random() > 0.7) {
        sparklesRef.current.push({
          id: sparkleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2 + 1,
          duration: 0,
        });
      }

      // Limit sparkles count
      if (sparklesRef.current.length > 50) {
        sparklesRef.current.shift();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparklesRef.current = sparklesRef.current.filter((sparkle) => {
        sparkle.duration += 0.05;

        if (sparkle.duration >= 1) {
          return false;
        }

        const opacity = Math.cos(sparkle.duration * Math.PI) * 0.5 + 0.5;
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = `hsl(200 90% 55%)`;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ cursor: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\"><circle cx=\"8\" cy=\"8\" r=\"3\" fill=\"%2300B8FF\"/><path d=\"M8 0v6M8 10v6M0 8h6M10 8h6M3 3l4 4M10 10l4 4M13 3l-4 4M10 10l-4 4\" stroke=\"%2300B8FF\" stroke-width=\"1\"/></svg>') 8 8, auto" }}
    />
  );
};

export default CursorSparkle;
