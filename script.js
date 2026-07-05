/* ============================================
   ATELIER SANGUINE — script.js
   Le moteur caché : nav dynamique, reveals, parallaxe sticky,
   compteur animé et modale de contact.
   ============================================ */

// ============================================
// 1. GESTION DE LA NAV (Affiche/Masque au scroll)
// ============================================
const nav = document.getElementById('nav');

// ============================================
// 2. ANIMATION REVEAL AU SCROLL (Fade in lent et majestueux)
// ============================================
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target); // Une seule fois, comme Apple
        }
    });
}, {
    threshold: 0.1,                  // Déclenche quand 10% de l'élément est visible
    rootMargin: '0px 0px -50px 0px'  // Déclenche légèrement avant le bas de l'écran
});

reveals.forEach((el) => revealObserver.observe(el));

// ============================================
// 3. ANIMATION STICKY SECTION (Zoom + textes synchronisés au scroll)
// ============================================
const stickySection = document.querySelector('.sticky-section');
const stickyImg = document.getElementById('stickyImg');
const stickyTitle = document.getElementById('stickyTitle');
const stickyDesc = document.getElementById('stickyDesc');
const progressDots = document.querySelectorAll('.progress-dot');

const stickyData = [
    { title: 'Zéro<br>déforestation.', desc: "Nous n'abattons aucun arbre. Chaque pièce est issue de forêts françaises." },
    { title: 'Temps<br>long.', desc: 'Un meuble demande 4 à 12 semaines. Nous ne pressons rien.' },
    { title: 'Sur<br>mesure.', desc: "Pas de catalogue. L'objet naît de votre espace et de nos mains." }
];

let currentTextIndex = 0;
let isTransitioning = false;

function updateSticky() {
    if (!stickySection) return;

    const rect = stickySection.getBoundingClientRect();
    const sectionHeight = stickySection.offsetHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));

    // Zoom progressif de l'image (de 1.0 à 1.3)
    if (stickyImg) {
        const scale = 1 + progress * 0.3;
        stickyImg.style.transform = `scale(${scale})`;
        stickyImg.style.opacity = 0.4 + progress * 0.3;
    }

    // Changement de texte selon la progression (0%, 33%, 66%)
    let textIndex = 0;
    if (progress > 0.66) textIndex = 2;
    else if (progress > 0.33) textIndex = 1;

    if (textIndex !== currentTextIndex && !isTransitioning && stickyTitle && stickyDesc) {
        isTransitioning = true;
        currentTextIndex = textIndex;

        // Petit effet de transition
        stickyTitle.style.opacity = 0;
        stickyDesc.style.opacity = 0;

        setTimeout(() => {
            const data = stickyData[currentTextIndex];
            stickyTitle.innerHTML = data.title;
            stickyDesc.textContent = data.desc;
            stickyTitle.style.opacity = 1;
            stickyDesc.style.opacity = 1;
            isTransitioning = false;
        }, 200);

        // Points de progression
        progressDots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === textIndex);
        });
    }
}

// ============================================
// SCROLL UNIFIÉ (throttlé avec requestAnimationFrame, comme Apple)
// ============================================
let ticking = false;

function onScroll() {
    const currentScrollY = window.scrollY;

    // Nav : masquée en haut de page, visible dès qu'on descend
    if (currentScrollY <= 100) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    updateSticky();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
}, { passive: true });

// ============================================
// 4. ANIMATION COMPTEUR (Pour la statistique dans le Bento)
// ============================================
const statCounter = document.getElementById('statCounter');
let hasCounted = false;

const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
        hasCounted = true;
        let count = 0;
        const target = 12;
        const duration = 2000; // 2 secondes
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            count += 1;
            statCounter.textContent = count;
            if (count === target) clearInterval(timer);
        }, stepTime);
    }
}, { threshold: 0.5 });

if (statCounter) counterObserver.observe(statCounter);

// ============================================
// 5. MODALE DE CONTACT
// ============================================
const contactModal = document.getElementById('contactModal');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function openContact() {
    contactModal.hidden = false;
    // Force un reflow pour déclencher la transition d'entrée
    void contactModal.offsetHeight;
    contactModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    const firstInput = contactModal.querySelector('input');
    if (firstInput) firstInput.focus();
}

function closeContact() {
    contactModal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { contactModal.hidden = true; }, 300);
}

document.querySelectorAll('[data-open-contact]').forEach((btn) => {
    btn.addEventListener('click', openContact);
});

document.querySelectorAll('[data-close-contact]').forEach((btn) => {
    btn.addEventListener('click', closeContact);
});

// Fermer au clic sur le fond ou avec Échap
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContact();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !contactModal.hidden) closeContact();
});

// Soumission du formulaire (à brancher sur un vrai backend plus tard)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }
    formSuccess.hidden = false;
    contactForm.reset();
    setTimeout(closeContact, 2000);
    setTimeout(() => { formSuccess.hidden = true; }, 2400);
});
