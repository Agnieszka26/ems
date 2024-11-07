import { useEffect, useRef } from 'react';
import './FireCursor.css';

const FireCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = [];
        let mouseX = 0;
        let mouseY = 0;

        // Set up canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Handle mouse movement to track the cursor position
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            createParticles(mouseX, mouseY);
        };

        // Particle creation function (smoke with green shades)
        function createParticles(x, y) {
            for (let i = 0; i < 4; i++) {
                particles.push({
                    x,
                    y,
                    size: Math.random() * 20 + 5,  // Larger particles for smoke effect
                     color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    opacity: 0.15,
                    speedX: (Math.random() - 0.5) , // Lower speed for gentle smoke effect
                    speedY: (Math.random() - 0.5) ,
                });
            }
        }

        // Particle animation loop
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.opacity -= 0.005; // Slower fade-out for lingering smoke effect
                particle.size *= 0.98; // Gradual shrink

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();

                // Remove particle once it fades out
                if (particle.opacity <= 0) {
                    particles.splice(index, 1);
                }
            });

            requestAnimationFrame(animateParticles);
        }

        // Event listeners
        document.addEventListener('mousemove', handleMouseMove);
        animateParticles();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return <canvas ref={canvasRef} className="fire-cursor-canvas"></canvas>;
};

export default FireCursor;
