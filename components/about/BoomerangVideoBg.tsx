"use client";

import React, { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4";

const MAX_CAPTURE_WIDTH = 960;
const FPS = 30;
const FRAME_INTERVAL = 1000 / FPS;

export function BoomerangVideoBg() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const [framesReady, setFramesReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const displayCanvas = canvasRef.current;
    if (!video || !displayCanvas) return;

    let isCancelled = false;
    let lastTime = -1;
    let animationFrameId: number | null = null;
    let pingPongTimer: NodeJS.Timeout | null = null;
    const capturedCanvases: HTMLCanvasElement[] = [];

    // Temporary capture canvas
    const captureCanvas = document.createElement("canvas");
    const captureCtx = captureCanvas.getContext("2d", { willReadFrequently: true });

    const captureFrame = () => {
      if (isCancelled || !video || video.ended || !captureCtx) return;

      if (video.videoWidth > 0 && video.videoHeight > 0 && video.currentTime !== lastTime) {
        lastTime = video.currentTime;

        const scale = Math.min(1, MAX_CAPTURE_WIDTH / video.videoWidth);
        const w = Math.round(video.videoWidth * scale);
        const h = Math.round(video.videoHeight * scale);

        if (captureCanvas.width !== w || captureCanvas.height !== h) {
          captureCanvas.width = w;
          captureCanvas.height = h;
        }

        try {
          captureCtx.drawImage(video, 0, 0, w, h);
          const frameCanvas = document.createElement("canvas");
          frameCanvas.width = w;
          frameCanvas.height = h;
          const frameCtx = frameCanvas.getContext("2d");
          if (frameCtx) {
            frameCtx.drawImage(captureCanvas, 0, 0);
            capturedCanvases.push(frameCanvas);
          }
        } catch {
          // If crossOrigin blocks capture, gracefully fallback to direct video playback
          setHasError(true);
        }
      }

      if ("requestVideoFrameCallback" in video && typeof (video as unknown as { requestVideoFrameCallback?: (cb: () => void) => void }).requestVideoFrameCallback === "function") {
        (video as unknown as { requestVideoFrameCallback: (cb: () => void) => void }).requestVideoFrameCallback(captureFrame);
      } else {
        animationFrameId = requestAnimationFrame(captureFrame);
      }
    };

    const handlePlay = () => {
      if ("requestVideoFrameCallback" in video && typeof (video as unknown as { requestVideoFrameCallback?: (cb: () => void) => void }).requestVideoFrameCallback === "function") {
        (video as unknown as { requestVideoFrameCallback: (cb: () => void) => void }).requestVideoFrameCallback(captureFrame);
      } else {
        animationFrameId = requestAnimationFrame(captureFrame);
      }
    };

    const handleEnded = () => {
      if (capturedCanvases.length > 5) {
        framesRef.current = capturedCanvases;
        setFramesReady(true);
        startBoomerangPlayback();
      } else {
        // Fallback: loop native video
        video.loop = true;
        video.play().catch(() => {});
      }
    };

    const startBoomerangPlayback = () => {
      const frames = framesRef.current;
      if (!frames.length || !displayCanvas) return;

      const ctx = displayCanvas.getContext("2d");
      if (!ctx) return;

      const firstFrame = frames[0];
      displayCanvas.width = firstFrame.width;
      displayCanvas.height = firstFrame.height;

      let currentIndex = 0;
      let forward = true;

      const tick = () => {
        if (isCancelled) return;
        const currentCanvas = frames[currentIndex];
        if (currentCanvas && ctx) {
          ctx.drawImage(currentCanvas, 0, 0);
        }

        if (forward) {
          currentIndex++;
          if (currentIndex >= frames.length - 1) {
            currentIndex = frames.length - 1;
            forward = false;
          }
        } else {
          currentIndex--;
          if (currentIndex <= 0) {
            currentIndex = 0;
            forward = true;
          }
        }
      };

      pingPongTimer = setInterval(tick, FRAME_INTERVAL);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    video.play().catch(() => {
      // Auto-play policy handled by muted
    });

    return () => {
      isCancelled = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (pingPongTimer) clearInterval(pingPongTimer);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 scale-[1.15] origin-top overflow-hidden pointer-events-none select-none">
      {/* Hidden/Initial Capture Video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        autoPlay
        preload="auto"
        crossOrigin="anonymous"
        className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
          framesReady && !hasError ? "hidden opacity-0" : "opacity-100"
        }`}
      />

      {/* Ping-Pong / Boomerang Render Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover object-top ${
          framesReady && !hasError ? "block opacity-100" : "hidden opacity-0"
        }`}
      />

      {/* Subtle Luminous Tint for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/90" />
    </div>
  );
}
