/* ============================================
   ANIMATIONS AVANCÉES EN JAVASCRIPT
   Parallax, Scroll Effects, Liquid Glass Animations
   ============================================ */

// ============================================
// PARALLAX & SCROLL ANIMATIONS
// ============================================
class AppleStyleAnimations {
    constructor() {
        this.setupMouseFollower();
        this.setupParallax();
        this.setupScrollTriggers();
        this.setupMorphingElements();
    }

    // ============================================
    // MOUSE FOLLOWER - Parallax Effect
    // ============================================
    setupMouseFollower() {
        document.addEventListener('mousemove', (e) => {
            const heroImage = document.querySelector('.hero-image');
            if (!heroImage) return;

            const rect = heroImage.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.05;

            heroImage.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            }
        });
    }

    // ============================================
    // PARALLAX SCROLL
    // ============================================
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBefore = document.querySelector('.hero::before');

            if (heroBefore) {
                const parallaxElement = document.querySelector('.hero::before');
                if (parallaxElement) {
                    // Créer un effect parallaxe visuel via le scroll
                    const offset = scrolled * 0.5;
                    document.documentElement.style.setProperty('--parallax-offset', `${offset}px`);
                }
            }

            // Animated background gradient
            const scrollPercent = (scrolled / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-percent', `${scrollPercent}%`);
        });
    }

    // ============================================
    // SCROLL TRIGGERED ANIMATIONS
    // ============================================
    setupScrollTriggers() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hero animations
                    if (entry.target.classList.contains('hero')) {
                        entry.target.classList.add('hero-animated');
                    }

                    // Featured cards stagger
                    if (entry.target.classList.contains('featured-card')) {
                        const cards = document.querySelectorAll('.featured-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.animation = `revealInEnhanced 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
                            }, index * 100);
                        });
                    }

                    // Product cards stagger
                    if (entry.target.classList.contains('product-card')) {
                        const cards = document.querySelectorAll('.product-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.animation = `revealInEnhanced 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
                            }, index * 50);
                        });
                    }

                    // Section titles
                    if (entry.target.classList.contains('section-title')) {
                        entry.target.style.animation = 'titleFadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animated elements
        document.querySelectorAll('.reveal, .featured-card, .product-card, .section-title').forEach(el => {
            observer.observe(el);
        });
    }

    // ============================================
    // MORPHING ELEMENTS
    // ============================================
    setupMorphingElements() {
        // Product card morphing on hover
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const img = card.querySelector('.product-image img');
                if (img) {
                    img.style.animation = 'productImageZoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                }
            });

            card.addEventListener('mouseleave', () => {
                const img = card.querySelector('.product-image img');
                if (img) {
                    img.style.animation = 'none';
                    img.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });

        // Featured card glow effect
        document.querySelectorAll('.featured-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }
}

// ============================================
// LIQUID GLASS EFFECT ON BUTTONS
// ============================================
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

// Animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes liquidGlassShine {
        from {
            opacity: 1;
            transform: scale(0.5);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }

    @keyframes productImageZoom {
        from {
            transform: scale(1) rotate(0deg);
        }
        to {
            transform: scale(1.1) rotate(2deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// FLOATING PARTICLES BACKGROUND
// ============================================
function createFloatingParticles() {
    const container = document.body;

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
        container.appendChild(particle);
    }
}

// Animation keyframe pour les particules
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatingParticle {
        0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.5;
        }
        25% {
            transform: translateY(-50px) translateX(30px) scale(1.1);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-100px) translateX(-30px) scale(0.9);
            opacity: 0.5;
        }
        75% {
            transform: translateY(-50px) translateX(50px) scale(1.1);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(particleStyle);

// ============================================
// STAGGERED REVEAL ANIMATIONS
// ============================================
function setupStaggeredReveals() {
    document.querySelectorAll('.reveal').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.05}s`;
    });
}

// ============================================
// SMOOTH SCROLL INDICATORS
// ============================================
function setupScrollIndicators() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update background based on scroll
        const hue = (scrollPercent * 3) % 360;
        document.documentElement.style.setProperty('--scroll-hue', hue);
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new AppleStyleAnimations();
    setupLiquidGlassButtons();
    createFloatingParticles();
    setupStaggeredReveals();
    setupScrollIndicators();

    // Add micro-interactions to interactive elements
    setupMicroInteractions();
});

// ============================================
// MICRO INTERACTIONS
// ============================================
function setupMicroInteractions() {
    // Nav buttons ripple effect
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            createRipple.call(btn, { clientX: btn.offsetWidth / 2, clientY: btn.offsetHeight / 2 });
        });
    });
}

function createRipple(event) {
    const button = event.currentTarget || this;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
    `;

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
    `;

    if (!document.querySelector('style[data-ripple]')) {
        rippleStyle.setAttribute('data-ripple', 'true');
        document.head.appendChild(rippleStyle);
    }

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// ============================================
// SMOOTH FADE-IN ON SCROLL
// ============================================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                imageObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('img, .hero-image, .product-image').forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        imageObserver.observe(img);
    });
}

// Call on load
window.addEventListener('load', observeElements);
