/* ============================================
   ATELIER SANGUINE — E-COMMERCE ENGINE
   Panier, favoris, recherche, checkout
   ============================================ */

'use strict';

/* ============================================
   1. CATALOGUE
   ============================================ */
const PRODUCTS = [
    {
        id: 'table-aube', name: 'Table Aube', cat: 'tables', price: 15000,
        wood: 'Noyer massif', origin: 'Forêt de Grésigne', tag: 'new',
        desc: "Issue d'un seul noyer tombé lors des tempêtes de janvier. Le plateau conserve les fissures naturelles du bois, stabilisées à la résine minérale. Chaque table est numérotée et livrée avec le certificat d'origine de son arbre.",
        finishes: ['Huile naturelle', 'Huile fumée', 'Brut ciré'],
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&q=80',
            'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80'
        ],
        featured: 1, date: 20260601
    },
    {
        id: 'bibliotheque-silo', name: 'Bibliothèque Silo', cat: 'rangements', price: 12400,
        wood: 'Chêne', origin: 'Forêt de Tronçais', tag: null,
        desc: "Structure verticale inspirée des silos à grain. Assemblage à queues d'aronde apparentes, sans vis ni colle synthétique. S'adapte au millimètre à votre mur.",
        finishes: ['Huile naturelle', 'Teinte noire'],
        images: [
            'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=1200&q=80',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80'
        ],
        featured: 3, date: 20260210
    },
    {
        id: 'fauteuil-torsion', name: 'Fauteuil Torsion', cat: 'assises', price: 6800,
        wood: 'Hêtre', origin: 'Massif du Jura', tag: null,
        desc: "Dossier cintré à la vapeur selon une technique du XVIIIᵉ siècle. Le hêtre plie mais ne rompt pas : chaque courbe est obtenue sans découpe, dans le fil du bois.",
        finishes: ['Huile naturelle', 'Savon blanc'],
        images: [
            'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80',
            'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80'
        ],
        featured: 2, date: 20251120
    },
    {
        id: 'banc-lisiere', name: 'Banc Lisière', cat: 'assises', price: 4200,
        wood: 'Frêne olivier', origin: 'Vallée de la Dordogne', tag: 'new',
        desc: "Un plateau brut de sciage posé sur deux tréteaux sculptés. Le live edge — la lisière naturelle de l'arbre — est conservé intact sur toute la longueur.",
        finishes: ['Brut ciré', 'Huile naturelle'],
        images: [
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
            'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&q=80'
        ],
        featured: 5, date: 20260520
    },
    {
        id: 'console-maree', name: 'Console Marée', cat: 'tables', price: 7600,
        wood: 'Chêne de marais', origin: 'Marais poitevin', tag: 'last',
        desc: "Bois de chêne immergé plusieurs décennies dans les marais, naturellement noirci par les tanins. Une matière rare, impossible à reproduire. Dernière pièce disponible.",
        finishes: ['Brut ciré'],
        images: [
            'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=1200&q=80',
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80'
        ],
        featured: 4, date: 20250901
    },
    {
        id: 'tabouret-souche', name: 'Tabouret Souche', cat: 'assises', price: 1900,
        wood: 'Orme', origin: 'Coteaux de Gascogne', tag: null,
        desc: "Taillé dans la masse d'une souche d'orme, à la gouge et à l'herminette. Trois pieds, aucun angle droit, un équilibre parfait.",
        finishes: ['Huile naturelle', 'Brûlé (Shou Sugi Ban)'],
        images: [
            'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=1200&q=80',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80'
        ],
        featured: 6, date: 20260105
    },
    {
        id: 'buffet-strate', name: 'Buffet Strate', cat: 'rangements', price: 9800,
        wood: 'Noyer & chêne', origin: 'Assemblage bi-bois', tag: null,
        desc: "Façade en strates alternées de noyer sombre et de chêne clair. Portes à ouverture tactile, intérieur gainé de feutre de laine française.",
        finishes: ['Huile naturelle'],
        images: [
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80'
        ],
        featured: 7, date: 20251015
    },
    {
        id: 'lampe-canopee', name: 'Lampe Canopée', cat: 'objets', price: 890,
        wood: 'Copeaux de noyer', origin: 'Chutes de l\'atelier', tag: 'new',
        desc: "Abat-jour en copeaux de rabot pressés, issus des chutes de nos tables. Une lumière chaude filtrée par le bois lui-même. Zéro déchet.",
        finishes: ['Naturel'],
        images: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
            'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80'
        ],
        featured: 8, date: 20260615
    },
    {
        id: 'plateau-riviere', name: 'Plateau Rivière', cat: 'objets', price: 450,
        wood: 'Platane', origin: 'Bords de Garonne', tag: null,
        desc: "Plateau de service traversé d'une veine de résine teintée, comme une rivière dans la vallée du bois. Chaque exemplaire est unique.",
        finishes: ['Huile alimentaire'],
        images: [
            'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=1200&q=80',
            'https://images.unsplash.com/photo-1605433246995-23ee461848dd?w=1200&q=80'
        ],
        featured: 9, date: 20260410
    }
];

const SHIPPING_GOAL = 5000;         // objectif pour le cadeau atelier
const fmt = n => n.toLocaleString('fr-FR') + ' €';

/* ============================================
   2. ÉTAT (persisté en localStorage)
   ============================================ */
const store = {
    load(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
        catch { return fallback; }
    },
    save(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
    }
};

let cart = store.load('as_cart', []);       // [{id, finish, qty}]
let wishlist = store.load('as_wishlist', []); // [id]
let currentCat = 'all';
let currentSort = 'featured';

/* ============================================
   3. HELPERS DOM
   ============================================ */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const productById = id => PRODUCTS.find(p => p.id === id);
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(msg, icon = '✓') {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="t-icon">${icon}</span>${esc(msg)}`;
    $('#toasts').appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 2600);
}

/* ============================================
   4. OVERLAYS (ouverture / fermeture génériques)
   ============================================ */
let openOverlay = null;

function showOverlay(id) {
    closeOverlay();
    const ov = $('#' + id);
    ov.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('is-open')));
    document.body.classList.add('locked');
    openOverlay = ov;
}

function closeOverlay() {
    if (!openOverlay) return;
    const ov = openOverlay;
    ov.classList.remove('is-open');
    setTimeout(() => { ov.hidden = true; }, 380);
    document.body.classList.remove('locked');
    openOverlay = null;
}

// Fermer au clic sur le fond ou sur [data-close]
$$('.overlay').forEach(ov => {
    ov.addEventListener('click', e => {
        if (e.target === ov || e.target.closest('[data-close]')) closeOverlay();
    });
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

/* ============================================
   5. GRILLE PRODUITS (filtres + tri)
   ============================================ */
function renderGrid() {
    let list = PRODUCTS.filter(p => currentCat === 'all' || p.cat === currentCat);

    const sorters = {
        'featured':   (a, b) => a.featured - b.featured,
        'price-asc':  (a, b) => a.price - b.price,
        'price-desc': (a, b) => b.price - a.price,
        'new':        (a, b) => b.date - a.date
    };
    list.sort(sorters[currentSort]);

    const grid = $('#productGrid');
    $('#emptyState').hidden = list.length > 0;

    grid.innerHTML = list.map((p, i) => `
        <article class="product-card" data-id="${p.id}" style="animation-delay:${i * 0.05}s">
            <div class="product-media">
                <img src="${p.images[0]}" alt="${esc(p.name)} — ${esc(p.wood)}" loading="lazy">
                ${p.tag === 'new' ? '<span class="product-tag new">Nouveau</span>' : ''}
                ${p.tag === 'last' ? '<span class="product-tag last">Dernière pièce</span>' : ''}
                <button class="fav-btn ${wishlist.includes(p.id) ? 'is-fav' : ''}" data-fav="${p.id}" aria-label="Ajouter aux favoris">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21C7 16.5 3 13.2 3 9.1 3 6.3 5.2 4 8 4c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2 2.8 0 5 2.3 5 5.1 0 4.1-4 7.4-9 11.9z"/></svg>
                </button>
            </div>
            <div class="product-info">
                <h3>${esc(p.name)}</h3>
                <p class="meta">${esc(p.wood)} — ${esc(p.origin)}</p>
                <div class="price-row">
                    <span class="price">${fmt(p.price)}</span>
                    <button class="add-btn" data-add="${p.id}">Ajouter</button>
                </div>
            </div>
        </article>
    `).join('');
}

// Délégation de clics sur la grille
$('#productGrid').addEventListener('click', e => {
    const fav = e.target.closest('[data-fav]');
    const add = e.target.closest('[data-add]');
    const card = e.target.closest('.product-card');

    if (fav) { toggleWishlist(fav.dataset.fav); return; }
    if (add) { addToCart(add.dataset.add); return; }
    if (card) openProduct(card.dataset.id);
});

// Filtres catégorie
$('#chips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    currentCat = chip.dataset.cat;
    renderGrid();
});

// Tri
$('#sortSelect').addEventListener('change', e => {
    currentSort = e.target.value;
    renderGrid();
});

/* ============================================
   6. FICHE PRODUIT
   ============================================ */
let sheetState = { id: null, finish: null, qty: 1, img: 0 };

function openProduct(id) {
    const p = productById(id);
    if (!p) return;
    sheetState = { id, finish: p.finishes[0], qty: 1, img: 0 };
    renderSheet();
    showOverlay('productOverlay');
}

function renderSheet() {
    const p = productById(sheetState.id);
    $('#productSheet').innerHTML = `
        <button class="sheet-close" data-close aria-label="Fermer">✕</button>
        <div class="sheet-gallery">
            <img class="main-img" src="${p.images[sheetState.img]}" alt="${esc(p.name)}">
            ${p.images.length > 1 ? `
            <div class="sheet-thumbs">
                ${p.images.map((src, i) => `
                    <button class="${i === sheetState.img ? 'is-active' : ''}" data-img="${i}" aria-label="Photo ${i + 1}">
                        <img src="${src}" alt="">
                    </button>`).join('')}
            </div>` : ''}
        </div>
        <div class="sheet-body">
            <p class="eyebrow">${esc(p.origin)}</p>
            <h2>${esc(p.name)}</h2>
            <p class="sheet-meta">${esc(p.wood)} · Pièce numérotée · Fait main à Bordeaux</p>
            <p class="sheet-price">${fmt(p.price)}</p>
            <p class="sheet-desc">${esc(p.desc)}</p>
            <div class="option-group">
                <span class="option-label">Finition — <span>${esc(sheetState.finish)}</span></span>
                <div class="swatches">
                    ${p.finishes.map(f => `
                        <button class="swatch ${f === sheetState.finish ? 'is-active' : ''}" data-finish="${esc(f)}">${esc(f)}</button>
                    `).join('')}
                </div>
            </div>
            <div class="qty-row">
                <div class="qty-stepper">
                    <button data-qty="-1" aria-label="Réduire la quantité">−</button>
                    <span>${sheetState.qty}</span>
                    <button data-qty="1" aria-label="Augmenter la quantité">+</button>
                </div>
                <button class="btn-primary" data-sheet-add>Ajouter au panier — ${fmt(p.price * sheetState.qty)}</button>
            </div>
            <div class="sheet-perks">
                <p>Livraison blanche offerte, installation incluse</p>
                <p>Garantie à vie, réparations gratuites</p>
                <p>Délai de fabrication : 4 à 12 semaines</p>
            </div>
        </div>
    `;
}

$('#productSheet').addEventListener('click', e => {
    const img = e.target.closest('[data-img]');
    const finish = e.target.closest('[data-finish]');
    const qty = e.target.closest('[data-qty]');
    const add = e.target.closest('[data-sheet-add]');

    if (img) { sheetState.img = +img.dataset.img; renderSheet(); }
    if (finish) { sheetState.finish = finish.dataset.finish; renderSheet(); }
    if (qty) { sheetState.qty = Math.max(1, Math.min(9, sheetState.qty + +qty.dataset.qty)); renderSheet(); }
    if (add) {
        addToCart(sheetState.id, sheetState.finish, sheetState.qty);
        closeOverlay();
    }
});

// Boutons "ouvrir produit" ailleurs sur la page
$$('[data-open-product]').forEach(btn =>
    btn.addEventListener('click', () => openProduct(btn.dataset.openProduct))
);

/* ============================================
   7. PANIER
   ============================================ */
function addToCart(id, finish, qty = 1) {
    const p = productById(id);
    if (!p) return;
    finish = finish || p.finishes[0];

    const existing = cart.find(l => l.id === id && l.finish === finish);
    if (existing) existing.qty = Math.min(9, existing.qty + qty);
    else cart.push({ id, finish, qty });

    store.save('as_cart', cart);
    renderCartBadge();
    renderCart();
    toast(`${p.name} ajouté au panier`);
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    store.save('as_cart', cart);
    renderCartBadge();
    renderCart();
}

function removeLine(index) {
    cart.splice(index, 1);
    store.save('as_cart', cart);
    renderCartBadge();
    renderCart();
}

const cartCount = () => cart.reduce((n, l) => n + l.qty, 0);
const cartTotal = () => cart.reduce((n, l) => n + productById(l.id).price * l.qty, 0);

function renderCartBadge() {
    const badge = $('#cartBadge');
    const n = cartCount();
    badge.hidden = n === 0;
    badge.textContent = n;

    const wb = $('#wishlistBadge');
    wb.hidden = wishlist.length === 0;
    wb.textContent = wishlist.length;
}

function renderCart() {
    const body = $('#cartItems');
    const foot = $('#cartFoot');
    const ship = $('#shippingProgress');

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="drawer-empty">
                <div class="big">🪵</div>
                <p>Votre panier est vide.<br>Le bois attend patiemment.</p>
                <button class="btn-primary" data-close>Découvrir la boutique</button>
            </div>`;
        foot.style.display = 'none';
        ship.style.display = 'none';
        return;
    }

    foot.style.display = '';
    ship.style.display = '';

    body.innerHTML = cart.map((l, i) => {
        const p = productById(l.id);
        return `
        <div class="cart-item">
            <img src="${p.images[0]}" alt="${esc(p.name)}">
            <div class="ci-body">
                <p class="ci-name">${esc(p.name)}</p>
                <p class="ci-variant">${esc(l.finish)}</p>
                <p class="ci-price">${fmt(p.price * l.qty)}</p>
            </div>
            <div class="ci-actions">
                <button class="ci-remove" data-remove="${i}">Retirer</button>
                <div class="ci-qty">
                    <button data-line="${i}" data-delta="-1" aria-label="Réduire">−</button>
                    <span>${l.qty}</span>
                    <button data-line="${i}" data-delta="1" aria-label="Augmenter">+</button>
                </div>
            </div>
        </div>`;
    }).join('');

    $('#cartTotal').textContent = fmt(cartTotal());

    // Progression vers le cadeau atelier (5 000 €)
    const total = cartTotal();
    const pct = Math.min(100, (total / SHIPPING_GOAL) * 100);
    $('#progressFill').style.width = pct + '%';
    $('#shippingText').innerHTML = total >= SHIPPING_GOAL
        ? '<strong>Offert :</strong> un plateau Rivière accompagne votre commande. 🎁'
        : `Plus que <strong>${fmt(SHIPPING_GOAL - total)}</strong> pour recevoir un cadeau de l'atelier.`;
}

$('#cartItems').addEventListener('click', e => {
    const rm = e.target.closest('[data-remove]');
    const line = e.target.closest('[data-line]');
    if (rm) removeLine(+rm.dataset.remove);
    else if (line) updateQty(+line.dataset.line, +line.dataset.delta);
});

$('#cartBtn').addEventListener('click', () => { renderCart(); showOverlay('cartOverlay'); });

/* ============================================
   8. FAVORIS
   ============================================ */
function toggleWishlist(id) {
    const p = productById(id);
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(x => x !== id);
        toast(`${p.name} retiré des favoris`, '♡');
    } else {
        wishlist.push(id);
        toast(`${p.name} ajouté aux favoris`, '♥');
    }
    store.save('as_wishlist', wishlist);
    renderCartBadge();
    renderGrid();
}

function renderWishlist() {
    const body = $('#wishlistItems');
    if (wishlist.length === 0) {
        body.innerHTML = `
            <div class="drawer-empty">
                <div class="big">♡</div>
                <p>Aucun favori pour l'instant.</p>
                <button class="btn-primary" data-close>Parcourir la boutique</button>
            </div>`;
        return;
    }
    body.innerHTML = wishlist.map(id => {
        const p = productById(id);
        return `
        <div class="cart-item">
            <img src="${p.images[0]}" alt="${esc(p.name)}">
            <div class="ci-body">
                <p class="ci-name">${esc(p.name)}</p>
                <p class="ci-variant">${esc(p.wood)}</p>
                <p class="ci-price">${fmt(p.price)}</p>
            </div>
            <div class="ci-actions">
                <button class="ci-remove" data-unfav="${id}">Retirer</button>
                <button class="wl-add" data-tocart="${id}">Au panier</button>
            </div>
        </div>`;
    }).join('');
}

$('#wishlistItems').addEventListener('click', e => {
    const unfav = e.target.closest('[data-unfav]');
    const tocart = e.target.closest('[data-tocart]');
    if (unfav) { toggleWishlist(unfav.dataset.unfav); renderWishlist(); }
    if (tocart) { addToCart(tocart.dataset.tocart); renderWishlist(); }
});

$('#wishlistBtn').addEventListener('click', () => { renderWishlist(); showOverlay('wishlistOverlay'); });

/* ============================================
   9. RECHERCHE
   ============================================ */
function renderSearch(q = '') {
    const results = $('#searchResults');
    const query = q.trim().toLowerCase();
    const list = query
        ? PRODUCTS.filter(p =>
            (p.name + ' ' + p.wood + ' ' + p.origin + ' ' + p.cat).toLowerCase().includes(query))
        : PRODUCTS.slice(0, 5);

    if (list.length === 0) {
        results.innerHTML = '<p class="search-empty">Aucun résultat. Essayez « noyer », « table », « chêne »…</p>';
        return;
    }
    results.innerHTML = list.map(p => `
        <button class="search-item" data-goto="${p.id}">
            <img src="${p.images[0]}" alt="">
            <span>
                <span class="s-name">${esc(p.name)}</span><br>
                <span class="s-meta">${esc(p.wood)} — ${esc(p.origin)}</span>
            </span>
            <span class="s-price">${fmt(p.price)}</span>
        </button>
    `).join('');
}

$('#searchBtn').addEventListener('click', () => {
    renderSearch();
    showOverlay('searchOverlay');
    setTimeout(() => $('#searchInput').focus(), 100);
});
$('#searchInput').addEventListener('input', e => renderSearch(e.target.value));
$('#searchResults').addEventListener('click', e => {
    const item = e.target.closest('[data-goto]');
    if (item) { closeOverlay(); setTimeout(() => openProduct(item.dataset.goto), 400); }
});

/* ============================================
   10. CHECKOUT (3 étapes simulées)
   ============================================ */
let ckStep = 1;
let ckData = {};

$('#checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    ckStep = 1; ckData = {};
    renderCheckout();
    showOverlay('checkoutOverlay');
});

function ckSummaryHTML() {
    return `
    <div class="ck-summary">
        ${cart.map(l => {
            const p = productById(l.id);
            return `<div class="row"><span>${esc(p.name)} × ${l.qty}</span><span>${fmt(p.price * l.qty)}</span></div>`;
        }).join('')}
        <div class="row"><span>Livraison blanche</span><span>Offerte</span></div>
        <div class="row total"><span>Total</span><span>${fmt(cartTotal())}</span></div>
    </div>`;
}

function stepsHTML() {
    return `<div class="checkout-steps">
        ${[1, 2, 3].map(n => `<div class="step-pill ${n <= ckStep ? 'is-done' : ''}"></div>`).join('')}
    </div>`;
}

function renderCheckout() {
    const panel = $('#checkoutPanel');

    if (ckStep === 1) {
        panel.innerHTML = `
            <button class="sheet-close" data-close aria-label="Fermer">✕</button>
            ${stepsHTML()}
            <h3>Vos coordonnées</h3>
            <p class="ck-sub">Étape 1 sur 3 — Contact</p>
            <div class="field-row">
                <div class="field"><label for="ckFirst">Prénom</label><input id="ckFirst" autocomplete="given-name" value="${esc(ckData.first || '')}"></div>
                <div class="field"><label for="ckLast">Nom</label><input id="ckLast" autocomplete="family-name" value="${esc(ckData.last || '')}"></div>
            </div>
            <div class="field"><label for="ckEmail">Email</label><input id="ckEmail" type="email" autocomplete="email" value="${esc(ckData.email || '')}"></div>
            <div class="ck-actions">
                <button class="btn-primary" data-next>Continuer</button>
            </div>`;
    }

    if (ckStep === 2) {
        panel.innerHTML = `
            <button class="sheet-close" data-close aria-label="Fermer">✕</button>
            ${stepsHTML()}
            <h3>Livraison blanche</h3>
            <p class="ck-sub">Étape 2 sur 3 — Nous installons la pièce chez vous</p>
            <div class="field"><label for="ckAddr">Adresse</label><input id="ckAddr" autocomplete="street-address" value="${esc(ckData.addr || '')}"></div>
            <div class="field-row">
                <div class="field"><label for="ckZip">Code postal</label><input id="ckZip" inputmode="numeric" autocomplete="postal-code" value="${esc(ckData.zip || '')}"></div>
                <div class="field"><label for="ckCity">Ville</label><input id="ckCity" autocomplete="address-level2" value="${esc(ckData.city || '')}"></div>
            </div>
            <div class="ck-actions">
                <button class="btn-ghost" data-back>Retour</button>
                <button class="btn-primary" data-next>Continuer</button>
            </div>`;
    }

    if (ckStep === 3) {
        panel.innerHTML = `
            <button class="sheet-close" data-close aria-label="Fermer">✕</button>
            ${stepsHTML()}
            <h3>Paiement</h3>
            <p class="ck-sub">Étape 3 sur 3 — Démonstration, aucun débit réel</p>
            ${ckSummaryHTML()}
            <div class="field"><label for="ckCard">Numéro de carte</label><input id="ckCard" inputmode="numeric" placeholder="4242 4242 4242 4242" maxlength="19"></div>
            <div class="field-row">
                <div class="field"><label for="ckExp">Expiration</label><input id="ckExp" placeholder="MM/AA" maxlength="5"></div>
                <div class="field"><label for="ckCvc">CVC</label><input id="ckCvc" inputmode="numeric" placeholder="123" maxlength="4"></div>
            </div>
            <div class="ck-actions">
                <button class="btn-ghost" data-back>Retour</button>
                <button class="btn-primary" data-pay>Payer ${fmt(cartTotal())}</button>
            </div>`;
    }

    if (ckStep === 4) {
        const orderNo = 'AS-' + Date.now().toString().slice(-6);
        panel.innerHTML = `
            <div class="ck-success">
                <div class="check">🪵</div>
                <h3>Merci, ${esc(ckData.first || 'cher client')}.</h3>
                <p>Commande <span class="order-no">${orderNo}</span> confirmée.<br>
                L'atelier commence le travail. Vous recevrez des photos<br>de votre pièce en cours de fabrication.</p>
                <button class="btn-primary" data-close>Retour à la boutique</button>
            </div>`;
        cart = [];
        store.save('as_cart', cart);
        renderCartBadge();
    }
}

function validateStep() {
    const need = ckStep === 1 ? ['ckFirst', 'ckLast', 'ckEmail'] : ['ckAddr', 'ckZip', 'ckCity'];
    let ok = true;
    need.forEach(id => {
        const input = $('#' + id);
        const bad = !input.value.trim() || (id === 'ckEmail' && !/^\S+@\S+\.\S+$/.test(input.value));
        input.classList.toggle('invalid', bad);
        if (bad) ok = false;
    });
    if (ok) {
        if (ckStep === 1) ckData = { ...ckData, first: $('#ckFirst').value, last: $('#ckLast').value, email: $('#ckEmail').value };
        if (ckStep === 2) ckData = { ...ckData, addr: $('#ckAddr').value, zip: $('#ckZip').value, city: $('#ckCity').value };
    }
    return ok;
}

$('#checkoutPanel').addEventListener('click', e => {
    if (e.target.closest('[data-back]')) { ckStep--; renderCheckout(); }
    if (e.target.closest('[data-next]')) {
        if (validateStep()) { ckStep++; renderCheckout(); }
        else toast('Merci de compléter les champs', '!');
    }
    if (e.target.closest('[data-pay]')) {
        const btn = e.target.closest('[data-pay]');
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span>Paiement…';
        setTimeout(() => { ckStep = 4; renderCheckout(); }, 1800);
    }
});

// Formatage carte en direct
$('#checkoutPanel').addEventListener('input', e => {
    if (e.target.id === 'ckCard') {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    }
    if (e.target.id === 'ckExp') {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4).replace(/(.{2})(.)/, '$1/$2');
    }
});

/* ============================================
   11. NEWSLETTER & PAGES LÉGALES
   ============================================ */
$('#newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#newsletterEmail');
    if (!/^\S+@\S+\.\S+$/.test(input.value)) { toast('Adresse email invalide', '!'); return; }
    input.value = '';
    toast('Bienvenue dans la lettre de l\'atelier 🌿');
});

const PAGES = {
    livraison: { title: 'Livraison & retours', body: "Chaque pièce est livrée en « livraison blanche » : nos équipes installent le meuble dans la pièce de votre choix, montent les éléments et repartent avec l'emballage. Délai de fabrication : 4 à 12 semaines selon la pièce. Vous disposez de 30 jours pour changer d'avis — nous venons rechercher la pièce sans frais." },
    garantie: { title: 'Garantie à vie', body: "Nous réparons gratuitement chaque pièce, pour toujours. Une rayure profonde, un pied qui joue, une teinte à raviver : rapportez la pièce ou contactez-nous, l'atelier s'en occupe. La garantie suit le meuble, pas le propriétaire — elle se transmet." },
    contact: { title: 'Contact', body: "Bko Market — Bamako, Mali. Contact &amp; assistance : bonjour@bkomarket.ml (exemple). Pour un projet sur mesure, écrivez-nous et nous organiserons la suite." },
    cgv: { title: 'Conditions générales de vente', body: "Site de démonstration — aucune commande réelle n'est traitée. Les prix affichés sont indicatifs. Toute commande sur mesure fait l'objet d'un devis personnalisé et d'un acompte de 30%. Le solde est réglé à la livraison." },
    confidentialite: { title: 'Confidentialité', body: "Vos données restent dans votre navigateur : le panier et les favoris sont stockés localement (localStorage) et ne sont transmis à aucun serveur. Aucun cookie tiers, aucun traceur publicitaire. Le bois est discret, nous aussi." }
};

$$('[data-open-page]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = PAGES[link.dataset.openPage];
        if (!page) return;
        let ov = $('#pageOverlay');
        if (!ov) {
            ov = document.createElement('div');
            ov.className = 'overlay';
            ov.id = 'pageOverlay';
            ov.hidden = true;
            ov.setAttribute('role', 'dialog');
            ov.setAttribute('aria-modal', 'true');
            ov.innerHTML = '<div class="page-modal"></div>';
            document.body.appendChild(ov);
            ov.addEventListener('click', ev => {
                if (ev.target === ov || ev.target.closest('[data-close]')) closeOverlay();
            });
        }
        ov.querySelector('.page-modal').innerHTML = `
            <button class="sheet-close" data-close aria-label="Fermer">✕</button>
            <h3>${esc(page.title)}</h3>
            <p>${esc(page.body)}</p>`;
        showOverlay('pageOverlay');
    });
});

/* ============================================
   12. ANIMATIONS AU SCROLL
   ============================================ */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

$$('.reveal').forEach(el => revealObserver.observe(el));

// Section sticky
const stickySection = $('.sticky-section');
const stickyImg = $('#stickyImg');
const stickyTitle = $('#stickyTitle');
const stickyDesc = $('#stickyDesc');
const dots = $$('.sticky-dots .dot');

const stickyData = [
    { title: 'Zéro<br>déforestation.', desc: "Nous n'abattons aucun arbre. Chaque pièce est issue de forêts françaises." },
    { title: 'Temps<br>long.', desc: 'Un meuble demande 4 à 12 semaines. Nous ne pressons rien.' },
    { title: 'Sur<br>mesure.', desc: "Pas de catalogue figé. L'objet naît de votre espace et de nos mains." }
];
let stickyIndex = 0;
let ticking = false;

function onScroll() {
    if (!stickySection || prefersReduced) return;

    const rect = stickySection.getBoundingClientRect();
    const total = stickySection.offsetHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / total));

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        stickyImg.style.transform = `scale(${1 + progress * 0.3})`;
        stickyImg.style.opacity = 0.4 + progress * 0.3;

        let idx = 0;
        if (progress > 0.66) idx = 2;
        else if (progress > 0.33) idx = 1;

        if (idx !== stickyIndex) {
            stickyIndex = idx;
            stickyTitle.style.opacity = 0;
            stickyDesc.style.opacity = 0;
            setTimeout(() => {
                stickyTitle.innerHTML = stickyData[idx].title;
                stickyDesc.textContent = stickyData[idx].desc;
                stickyTitle.style.opacity = 1;
                stickyDesc.style.opacity = 1;
            }, 200);
            dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
        }
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

/* ============================================
   13. INIT
   ============================================ */
renderGrid();
renderCartBadge();
