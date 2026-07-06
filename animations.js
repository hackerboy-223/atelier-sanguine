/* ============================================
   ANIMATIONS AVANCÉES EN JAVASCRIPT
   Parallax, effets au scroll, micro-interactions
   ============================================ */

'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

class AppleStyleAnimations {
    constructor() {
        if (prefersReducedMotion) return;
        this.setupMouseFollower();
        this.setupParallax();
        this.setupMorphingElements();
    }

    setupMouseFollower() {
        const heroImage = document.querySelector('.hero-image');
        if (!heroImage) return;

        document.addEventListener('mousemove', (e) => {
            const rect = heroImage.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
            heroImage.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const scrollPercent = (scrolled / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-percent', `${scrollPercent}%`);
        }, { passive: true });
    }

    setupMorphingElements() {
        document.addEventListener('mouseover', (e) => {
            const card = e.target.closest('.product-card');
            if (!card) return;
            const img = card.querySelector('.product-media img');
            if (img) img.style.transform = 'scale(1.08) rotate(0.5deg)';
        });

        document.addEventListener('mouseout', (e) => {
            const card = e.target.closest('.product-card');
            if (!card) return;
            const img = card.querySelector('.product-media img');
            if (img) img.style.transform = '';
        });
    }
}

function setupLiquidGlassButtons() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const shine = document.createElement('span');
            shine.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent);
                left: ${x - 50}px;
                top: ${y - 50}px;
                pointer-events: none;
                animation: liquidGlassShine 0.6s ease-out;
            `;
            btn.appendChild(shine);
            setTimeout(() => shine.remove(), 600);
        });
    });
}

function createFloatingParticles() {
    if (prefersReducedMotion) return;

    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 200 + 100}px;
            height: ${Math.random() * 200 + 100}px;
            background: radial-gradient(circle, rgba(196, 85, 58, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            top: ${Math.random() * 100 - 50}%;
            left: ${Math.random() * 100 - 50}%;
            animation: floatingParticle ${8 + i * 2}s ease-in-out infinite;
        `;
        document.body.appendChild(particle);
    }
}

function setupMicroInteractions() {
    document.querySelectorAll('.icon-btn, .chip').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
    `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

document.addEventListener('DOMContentLoaded', () => {
    new AppleStyleAnimations();
    setupLiquidGlassButtons();
    createFloatingParticles();
    setupMicroInteractions();
});
