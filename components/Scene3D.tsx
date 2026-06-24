"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  alpha: number;
}

interface Orb {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  color: string;
  tilt: number;
}

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    // Particles
    const particles: Particle[] = [];
    const numParticles = Math.min(150, Math.floor(width * 0.08));
    const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#a78bfa", "#818cf8"];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    // Orbiting orbs
    const orbs: Orb[] = [
      { angle: 0, radius: 180, speed: 0.008, size: 5, color: "#06b6d4", tilt: 0.3 },
      { angle: 2, radius: 220, speed: 0.006, size: 4, color: "#8b5cf6", tilt: -0.5 },
      { angle: 4, radius: 160, speed: 0.01, size: 3, color: "#f59e0b", tilt: 0.7 },
      { angle: 1, radius: 250, speed: 0.005, size: 3.5, color: "#10b981", tilt: -0.2 },
      { angle: 3, radius: 140, speed: 0.012, size: 2.5, color: "#ec4899", tilt: 0.9 },
    ];

    // Central wireframe icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const icoVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ].map(v => ({ x: v[0] * 80, y: v[1] * 80, z: v[2] * 80 }));

    const icoEdges = [
      [0,1],[0,5],[0,7],[0,10],[0,11],[1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],[3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],[5,9],[5,11],[6,7],[6,8],[6,10],
      [7,8],[7,10],[8,9],[10,11],
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / width - 0.5) * 2,
        y: (e.clientY / height - 0.5) * 2,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    // 3D projection helper
    const project = (x: number, y: number, z: number, cx: number, cy: number) => {
      const fov = 600;
      const scale = fov / (fov + z);
      return {
        x: cx + x * scale,
        y: cy + y * scale,
        scale,
      };
    };

    // Rotate point
    const rotateY = (x: number, z: number, angle: number) => ({
      x: x * Math.cos(angle) - z * Math.sin(angle),
      z: x * Math.sin(angle) + z * Math.cos(angle),
    });

    const rotateX = (y: number, z: number, angle: number) => ({
      y: y * Math.cos(angle) - z * Math.sin(angle),
      z: y * Math.sin(angle) + z * Math.cos(angle),
    });

    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const rotY = time * 0.2 + mouseRef.current.x * 0.3;
      const rotX = time * 0.1 + mouseRef.current.y * 0.2;

      // Draw connection lines between nearby particles
      ctx.strokeStyle = "rgba(99, 102, 241, 0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        if (p.z < 0) p.z = 1000;
        if (p.z > 1000) p.z = 0;

        const depthFade = 1 - p.z / 1000;
        const size = p.size * depthFade;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * depthFade;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // Draw wireframe icosahedron
      const projectedVerts = icoVertices.map(v => {
        let { x: rx, z: rz } = rotateY(v.x, v.z, rotY);
        let { y: ry, z: rz2 } = rotateX(v.y, rz, rotX);
        return project(rx, ry, rz2 + 300, cx, cy);
      });

      ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
      ctx.lineWidth = 1;
      for (const [a, b] of icoEdges) {
        const pa = projectedVerts[a];
        const pb = projectedVerts[b];
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      // Draw vertices as glowing dots
      for (const p of projectedVerts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(129, 140, 248, 0.8)";
        ctx.fill();
      }

      // Draw orbit rings
      ctx.lineWidth = 1.5;
      for (const orb of orbs) {
        orb.angle += orb.speed;
        const ox = Math.cos(orb.angle) * orb.radius;
        const oy = Math.sin(orb.angle) * orb.radius * orb.tilt;
        const oz = Math.sin(orb.angle) * orb.radius * (1 - Math.abs(orb.tilt));

        let { x: rx, z: rz } = rotateY(ox, oz, rotY * 0.5);
        let { y: ry, z: rz2 } = rotateX(oy, rz, rotX * 0.3);
        const projected = project(rx, ry, rz2 + 300, cx, cy);

        // Glow
        const gradient = ctx.createRadialGradient(
          projected.x, projected.y, 0,
          projected.x, projected.y, orb.size * projected.scale * 4
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, orb.size * projected.scale * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.3;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, orb.size * projected.scale, 0, Math.PI * 2);
        ctx.fillStyle = orb.color;
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // Draw faint orbit paths
      ctx.strokeStyle = "rgba(99, 102, 241, 0.06)";
      ctx.lineWidth = 0.5;
      for (const orb of orbs) {
        ctx.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.1) {
          const ox = Math.cos(a) * orb.radius;
          const oy = Math.sin(a) * orb.radius * orb.tilt;
          const oz = Math.sin(a) * orb.radius * (1 - Math.abs(orb.tilt));
          let { x: rx, z: rz } = rotateY(ox, oz, rotY * 0.5);
          let { y: ry, z: rz2 } = rotateX(oy, rz, rotX * 0.3);
          const projected = project(rx, ry, rz2 + 300, cx, cy);
          if (a === 0) ctx.moveTo(projected.x, projected.y);
          else ctx.lineTo(projected.x, projected.y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    />
  );
}
