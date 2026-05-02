"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="not-found-wrapper pt-20">
      <canvas ref={canvasRef} className="particles-canvas" />

      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="content mt-5">
        {/* Logo */}
        <Link
          href="/"
          className="logo font-bold text-5xl bg-linear-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent"
        >
          SkillSphere
        </Link>

        {/* 404 big text */}
        <div className="error-code mt-5">
          <span className="four left">4</span>
          <div className="zero-wrap">
            <div className="zero-ring" />
            <span className="zero-inner">0</span>
          </div>
          <span className="four right">4</span>
        </div>

        <div className="divider-line" />

        <h1 className="headline">Page Not Found</h1>
        <p className="subtext">
          Looks like this lesson doesn&apos;t exist yet. <br />
          Maybe it&apos;s still being recorded? 🎬
        </p>

        {/* Actions */}
        <div className="actions">
          <Link
            href="/"
            className="border-b-2 border-orange-300 text-orange-300 btn-primary px-5 rounded-2xl text-lg flex items-center gap-1"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L2 8H5V14H11V8H14L8 2Z"
                stroke="white"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="border-b-2 border-orange-300 text-orange-300 btn-primary px-5 rounded-2xl text-lg flex items-center gap-1"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="3"
                width="12"
                height="10"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M5 7h6M5 10h4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Browse Courses
          </Link>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap");

        .not-found-wrapper {
          min-height: 100vh;
          background: #0a0a0f;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
        }

        .particles-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(124, 58, 237, 0.2),
            transparent 70%
          );
          top: -150px;
          left: -150px;
          animation: float1 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(6, 182, 212, 0.15),
            transparent 70%
          );
          bottom: -100px;
          right: -100px;
          animation: float2 10s ease-in-out infinite;
        }
        .orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.1),
            transparent 70%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float3 12s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        .content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 24px;
          animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Syne", sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          margin-bottom: 48px;
          letter-spacing: -0.3px;
        }
        .logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.45);
        }

        .error-code {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
        }

        .four {
          font-family: "Syne", sans-serif;
          font-size: clamp(80px, 20vw, 160px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -4px;
          background: linear-gradient(135deg, #a855f7, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitch 4s infinite;
        }
        .four.left {
          animation-delay: 0s;
        }
        .four.right {
          animation-delay: 0.15s;
        }

        @keyframes glitch {
          0%,
          92%,
          100% {
            filter: none;
          }
          93% {
            filter: drop-shadow(2px 0 #ec4899) drop-shadow(-2px 0 #22d3ee);
          }
          94% {
            filter: none;
          }
          95% {
            filter: drop-shadow(-2px 0 #ec4899) drop-shadow(2px 0 #22d3ee);
          }
          96% {
            filter: none;
          }
        }

        .zero-wrap {
          position: relative;
          width: clamp(80px, 18vw, 148px);
          height: clamp(80px, 18vw, 148px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .zero-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid transparent;
          background: linear-gradient(135deg, #7c3aed, #22d3ee) border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: spin 6s linear infinite;
          box-shadow:
            0 0 30px rgba(124, 58, 237, 0.25),
            inset 0 0 30px rgba(124, 58, 237, 0.1);
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .zero-inner {
          font-family: "Syne", sans-serif;
          font-size: clamp(70px, 18vw, 140px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -4px;
          background: linear-gradient(135deg, #a855f7, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 1;
        }

        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #22d3ee);
          border-radius: 2px;
          margin-bottom: 24px;
          box-shadow: 0 0 12px rgba(124, 58, 237, 0.5);
        }

        .headline {
          font-family: "Syne", sans-serif;
          font-size: clamp(22px, 5vw, 34px);
          font-weight: 700;
          color: #f0f0ff;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }

        .subtext {
          font-size: 15px;
          color: rgba(240, 240, 255, 0.45);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 340px;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 32px;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #fff;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 0 24px rgba(124, 58, 237, 0.4);
          transition:
            transform 0.2s,
            box-shadow 0.2s;
          letter-spacing: 0.1px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 32px rgba(124, 58, 237, 0.55);
        }
      `}</style>
    </div>
  );
}
