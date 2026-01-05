"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouse = { x: 0, y: 0, active: false };
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        class Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            vx: number;
            vy: number;
            size: number;
            highlightOpacity: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.vx = 0;
                this.vy = 0;
                this.size = Math.random() * 1.5 + 1; // 1 to 2.5
                this.highlightOpacity = 0;
            }

            draw() {
                if (!ctx) return;

                // Base faint white
                ctx.fillStyle = `rgba(255, 255, 255, ${0.15 + this.highlightOpacity * 0.2})`;

                // Blue glow if highlighted
                if (this.highlightOpacity > 0.1) {
                    ctx.fillStyle = `rgba(66, 133, 244, ${this.highlightOpacity * 0.8})`; // Google Blue
                    ctx.shadowBlur = 5 * this.highlightOpacity;
                    ctx.shadowColor = "#4285F4";
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let maxDistance = 180;

                if (distance < maxDistance && mouse.active) {
                    let force = (maxDistance - distance) / maxDistance;
                    let angle = Math.atan2(dy, dx);

                    // Push away with more weight
                    this.vx -= Math.cos(angle) * force * 4.5;
                    this.vy -= Math.sin(angle) * force * 4.5;

                    this.highlightOpacity = Math.min(1, this.highlightOpacity + 0.15);
                } else {
                    this.highlightOpacity = Math.max(0, this.highlightOpacity - 0.03);
                }

                // Return to base position (Elasticity)
                let dxBase = this.baseX - this.x;
                let dyBase = this.baseY - this.y;
                this.vx += dxBase * 0.04;
                this.vy += dyBase * 0.04;

                // Friction / Damping
                this.vx *= 0.88;
                this.vy *= 0.88;

                this.x += this.vx;
                this.y += this.vy;
            }
        }

        const init = () => {
            particles = [];
            const density = 22; // Slightly more particles
            const rows = Math.floor(canvas.height / density);
            const cols = Math.floor(canvas.width / density);

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    particles.push(new Particle(x * density + density / 2, y * density + density / 2));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
