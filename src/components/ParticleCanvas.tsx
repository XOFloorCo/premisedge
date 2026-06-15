import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isNode: boolean;
  pulsePhase: number;
  pulseSpeed: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const numParticles = isMobile ? 50 : 100;

      for (let i = 0; i < numParticles; i++) {
        const isNode = i < 8; // 8 designated bright nodes
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2, // between -0.6 and 0.6
          vy: (Math.random() - 0.5) * 1.2,
          radius: 2,
          isNode,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: isNode ? 0.05 + Math.random() * 0.02 : 0, // 2-4 second cycles
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Handle Repel
      const repulseRadius = 120;
      const isDesktop = window.innerWidth >= 1024;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse repel only on desktop
        if (isDesktop) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulseRadius) {
            const force = (repulseRadius - dist) / repulseRadius;
            p.x -= (dx / dist) * force * 2;
            p.y -= (dy / dist) * force * 2;
          }
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.3;
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(0, 102, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(0, 168, 133, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Pulse logic for nodes
        let fillColor = 'rgba(0, 168, 133, 0.6)';
        if (p.isNode) {
          p.pulsePhase += p.pulseSpeed;
          // Pulse between #00A885 and #00E5FF using sine wave
          // #00A885 = 0, 168, 133
          // #00E5FF = 0, 229, 255
          const g = Math.floor(168 + ((Math.sin(p.pulsePhase) + 1) / 2) * (229 - 168));
          const b = Math.floor(133 + ((Math.sin(p.pulsePhase) + 1) / 2) * (255 - 133));
          fillColor = `rgba(0, ${g}, ${b}, 1)`;
          
          // Glow effect for nodes
          ctx.shadowBlur = 15;
          ctx.shadowColor = fillColor;
        } else {
          ctx.shadowBlur = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY + window.scrollY; // adjust for scroll if hero moves, but hero is fixed/fullvh
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(drawParticles);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
