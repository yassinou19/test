import React, { useEffect, useRef } from 'react';
import './Aurora.css';

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  speed?: number;
}

const Aurora: React.FC<AuroraProps> = ({
  colorStops = ['#00d2ff', '#3a7bd5', '#581CFF'],
  amplitude = 1.0,
  speed = 1.0
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.005 * speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      colorStops.forEach((color, i) => {
        gradient.addColorStop(Math.max(0, Math.min(1, i / (colorStops.length - 1))), color);
      });

      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorStops, amplitude, speed]);

  return <canvas ref={canvasRef} className="aurora-canvas" />;
};

export default Aurora;
