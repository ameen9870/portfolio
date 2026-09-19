"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  z: number;
  size: number;
  phase: number;
};

export default function AIOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let frame = 0;
    let animationFrame = 0;

    const nodes: NodePoint[] = [];

    const count = 105;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(
        2 * Math.random() - 1
      );

      const radius =
        0.72 + Math.random() * 0.23;

      nodes.push({
        x:
          Math.sin(phi) *
          Math.cos(theta) *
          radius,

        y:
          Math.sin(phi) *
          Math.sin(theta) *
          radius,

        z:
          Math.cos(phi) *
          radius,

        size:
          Math.random() * 1.8 + 0.4,

        phase: Math.random() * Math.PI * 2,
      });
    }

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    const project = (
      node: NodePoint,
      width: number,
      height: number,
      rotation: number,
      scale: number
    ) => {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      const x =
        node.x * cos -
        node.z * sin;

      const z =
        node.x * sin +
        node.z * cos;

      const perspective =
        1 / (1.65 - z);

      return {
        x:
          width / 2 +
          x *
            width *
            0.37 *
            perspective *
            scale,

        y:
          height / 2 +
          node.y *
            height *
            0.37 *
            perspective *
            scale,

        z,
        size:
          node.size *
          perspective,
      };
    };

    const draw = () => {
      const width =
        canvas.clientWidth;

      const height =
        canvas.clientHeight;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      frame += 0.004;

      const rotation = frame;

      /* Main glow */
      const glow =
        ctx.createRadialGradient(
          width / 2,
          height / 2,
          10,
          width / 2,
          height / 2,
          Math.min(width, height) * 0.43
        );

      glow.addColorStop(
        0,
        "rgba(255,105,118,0.20)"
      );

      glow.addColorStop(
        0.35,
        "rgba(255,50,70,0.08)"
      );

      glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = glow;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      const projected = nodes.map(
        (node) =>
          project(
            node,
            width,
            height,
            rotation,
            1
          )
      );

      /* Connections */
      ctx.lineWidth = 0.45;

      for (
        let i = 0;
        i < projected.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < projected.length;
          j++
        ) {
          const a = projected[i];
          const b = projected[j];

          const distance = Math.hypot(
            a.x - b.x,
            a.y - b.y
          );

          if (distance < width * 0.11) {
            const opacity =
              Math.max(
                0,
                0.16 -
                  distance /
                    (width * 0.9)
              );

            ctx.strokeStyle = `rgba(255,100,112,${opacity})`;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.stroke();
          }
        }
      }

      /* Orbital curves */
      const centerX = width / 2;
      const centerY = height / 2;

      for (let ring = 0; ring < 7; ring++) {
        const radius =
          Math.min(width, height) *
          (0.22 + ring * 0.045);

        ctx.beginPath();

        for (
          let i = 0;
          i <= 180;
          i++
        ) {
          const angle =
            (i / 180) *
            Math.PI *
            2;

          const wave =
            Math.sin(
              angle * 3 +
                frame * 2 +
                ring
            ) *
            3;

          const x =
            centerX +
            Math.cos(angle) *
              (radius + wave);

          const y =
            centerY +
            Math.sin(angle) *
              (radius * 0.35 + wave);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = `rgba(255,95,108,${
          0.12 - ring * 0.012
        })`;

        ctx.lineWidth = 0.65;

        ctx.stroke();
      }

      /* Nodes */
      projected.forEach(
        (point, index) => {
          const pulse =
            Math.sin(
              frame * 3 +
                nodes[index].phase
            ) *
            0.5 +
            0.5;

          const alpha =
            0.35 +
            pulse * 0.55;

          ctx.beginPath();

          ctx.arc(
            point.x,
            point.y,
            Math.max(
              0.5,
              point.size
            ),
            0,
            Math.PI * 2
          );

          ctx.fillStyle = `rgba(255,145,153,${alpha})`;

          ctx.fill();

          if (
            index % 13 === 0
          ) {
            ctx.beginPath();

            ctx.arc(
              point.x,
              point.y,
              point.size * 4,
              0,
              Math.PI * 2
            );

            ctx.fillStyle =
              "rgba(255,75,91,0.08)";

            ctx.fill();
          }
        }
      );

      /* Core */
      const core =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          Math.min(width, height) *
            0.27
        );

      core.addColorStop(
        0,
        "rgba(255,210,214,0.24)"
      );

      core.addColorStop(
        0.18,
        "rgba(255,90,105,0.13)"
      );

      core.addColorStop(
        0.6,
        "rgba(255,40,60,0.04)"
      );

      core.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = core;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      animationFrame =
        requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    draw();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
<div className="relative mx-auto h-[330px] w-[330px] sm:h-[390px] sm:w-[390px] md:h-[400px] md:w-[400px] lg:h-[530px] lg:w-[530px]">      <div className="absolute inset-[18%] rounded-full bg-[#ff5363]/10 blur-[80px]" />

      <canvas
        ref={canvasRef}
        className="relative h-full w-full"
      />
    </div>
  );
}