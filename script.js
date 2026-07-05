/* ============================================
   ATELIER SANGUINE — E-COMMERCE SCRIPT.JS
   Gestion produits, panier, favoris, recherche, filtres
   ============================================ */

// ============================================
// PRODUCTS DATABASE
// ============================================
const products = [
    {
        id: 1,
        name: "Table Sanguine",
        category: "tables",
        price: 2450,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.8,
        reviews: 24,
        description: "Table de réunion en noyer massif, artisanale et intemporelle.",
        details: "Dimensions: 200x100cm. Bois: Noyer français. Fini: Mat naturel. Poids: 85kg. Garantie 10 ans.",
        shipping: "Livraison gratuite. Délai: 4-6 semaines.",
        care: "Nettoyer avec un chiffon doux. Huiler tous les 2-3 mois.",
        sizes: ["160x80cm", "200x100cm", "240x120cm"],
        woods: ["Noyer", "Chêne", "Érable"],
        badge: "Populaire"
    },
    {
        id: 2,
        name: "Chaise Toile",
        category: "chairs",
        price: 450,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.6,
        reviews: 18,
        description: "Chaise épurée avec assise en tissu naturel et structure en bois massif.",
        details: "Hauteur: 85cm. Bois: Hêtre français. Tissu: Lin 100%. Poids: 5kg.",
        shipping: "Livraison gratuite pour 2+ chaises.",
        care: "Brosser régulièrement le tissu.",
        sizes: ["Standard", "Haute"],
        woods: ["Hêtre", "Chêne", "Noyer"],
        badge: "Nouveau"
    },
    {
        id: 3,
        name: "Étagère Murale",
        category: "shelving",
        price: 650,
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.7,
        reviews: 12,
        description: "Étagère murale épurée en bois massif avec système de fixation invisible.",
        details: "Dimensions: 150x30cm. Bois: Chêne français. Charge: 50kg. Installation comprise.",
        shipping: "Livraison gratuite. Installation incluse en Île-de-France.",
        care: "Poussière régulière. Éviter l'humidité directe.",
        sizes: ["120cm", "150cm", "180cm"],
        woods: ["Chêne", "Noyer", "Érable"],
        badge: null
    },
    {
        id: 4,
        name: "Bureau sur Mesure",
        category: "desks",
        price: 1850,
        image: "https://images.unsplash.com/photo-1593642532400-2682a8a0fda7?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1593642532400-2682a8a0fda7?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.9,
        reviews: 31,
        description: "Bureau minimaliste conçu pour optimiser l'espace de travail et la concentration.",
        details: "Dimensions: 160x80cm (personnalisable). Bois: Noyer ou Chêne. Pieds: Métal noir.",
        shipping: "Livraison gratuite. Délai: 6-8 semaines.",
        care: "Protéger de l'eau. Nettoyer régulièrement.",
        sizes: ["120x60cm", "160x80cm", "200x90cm"],
        woods: ["Noyer", "Chêne", "Hêtre"],
        badge: "Best Seller"
    },
    {
        id: 5,
        name: "Banc Atelier",
        category: "chairs",
        price: 580,
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.5,
        reviews: 14,
        description: "Banc robuste en bois massif, parfait pour table à manger ou hall d'entrée.",
        details: "Longueur: 150cm. Hauteur: 45cm. Bois: Chêne massif. Poids: 25kg.",
        shipping: "Livraison gratuite.",
        care: "Cirage mensuel recommandé.",
        sizes: ["120cm", "150cm", "180cm"],
        woods: ["Chêne", "Noyer"],
        badge: null
    },
    {
        id: 6,
        name: "Commode Basse",
        category: "shelving",
        price: 1200,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80"
        ],
        rating: 4.7,
        reviews: 19,
        description: "Commode épurée avec 4 tiroirs coulissants, design scandinave modernisé.",
        details: "Dimensions: 140x45x60cm. Bois: Noyer français. Poignées laiton massif.",
        shipping: "Livraison gratuite. Montage à domicile inclus.",
        care: "Entretien bois fin. Cire annuelle.",
        sizes: ["120cm", "140cm"],
        woods: ["Noyer", "Chêne", "Hêtre"],
        badge: null
    },
    {
        id: 7,
        name: "Table Basse Sable",
        category: "tables",
        price: 750,
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.6,
        reviews: 22,
        description: "Table basse ovale en bois contourné, parfaite pour un salon moderne.",
        details: "Dimensions: 120x70cm. Hauteur: 38cm. Bois: Hêtre contourné. Fini cirée.",
        shipping: "Livraison gratuite.",
        care: "Cirage léger mensuel.",
        sizes: ["100x60cm", "120x70cm", "140x80cm"],
        woods: ["Hêtre", "Noyer", "Frêne"],
        badge: "Tendance"
    },
    {
        id: 8,
        name: "Bibliothèque Modulaire",
        category: "shelving",
        price: 2100,
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
        ],
        rating: 4.8,
        reviews: 27,
        description: "Bibliothèque modulable, extensible et adaptable à votre espace.",
        details: "Hauteur: 220cm. Profondeur: 35cm. Bois: Chêne massif. Charge: 100kg/étagère.",
        shipping: "Livraison gratuite. Installation incluse.",
        care: "Dépoussiérage régulier.",
        sizes: ["150cm", "200cm", "250cm"],
        woods: ["Chêne", "Noyer", "Hêtre"],
        badge: "Premium"
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';
let currentSort = 'newest';
let searchTerm = '';
let currentProductId = null;

// ============================================
// DOM ELEMENTS
// ============================================
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const cartToggle = document.getElementById('cartToggle');
const favToggle = document.getElementById('favToggle');
const cartModal = document.getElementById('cartModal');
const favModal = document.getElementById('favModal');
const productModal = document.getElementById('productModal');
const cartCount = document.getElementById('cartCount');
const favCount = document.getElementById('favCount');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    updateFavCount();
    setupEventListeners();
    renderAnimations();
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Sort
    sortSelect.addEventListener('change', handleSort);

    // Search
    searchInput.addEventListener('input', handleSearch);

    // Cart & Favorites
    cartToggle.addEventListener('click', openCart);
    favToggle.addEventListener('click', openFavorites);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('favClose').addEventListener('click', closeFav);
    document.getElementById('productClose').addEventListener('click', closeProduct);
    document.getElementById('continueShopping').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

    // Modal overlays
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('active');
        });
    });

    // Newsletter
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Merci de votre inscription! 🎉');
        e.target.reset();
    });

    // Product quantity controls
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        input.value = Math.max(1, parseInt(input.value) - 1);
    });

    document.getElementById('increaseQty').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        input.value = parseInt(input.value) + 1;
    });

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${tab}-tab`).classList.add('active');
        });
    });
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts() {
    let filtered = products.filter(p => {
        const matchesCategory = currentFilter === 'all' || p.category === currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Sort
    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'popular') {
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card reveal" onclick="openProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${'⭐'.repeat(Math.floor(product.rating))}</div>
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">${product.price.toLocaleString('fr-FR')}€</div>
                <div class="product-actions">
                    <button onclick="addToCart(${product.id}); event.stopPropagation();" class="add-cart-btn">Ajouter</button>
                    <button onclick="toggleFavorite(${product.id}); event.stopPropagation();" class="add-fav-btn" data-fav="${product.id}">
                        ${favorites.includes(product.id) ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// FILTER & SORT
// ============================================
function handleFilter(e) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderProducts();
}

function handleSort(e) {
    currentSort = e.target.value;
    renderProducts();
}

function handleSearch(e) {
    searchTerm = e.target.value;
    renderProducts();
}

// ============================================
// CART MANAGEMENT
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            size: product.sizes[0],
            wood: product.woods[0]
        });
    }

    saveCart();
    updateCartCount();
    showNotification('✅ Ajouté au panier');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <p>Votre panier est vide</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-specs">${item.size} • ${item.wood}</div>
                    <div class="cart-item-price">${(item.price * item.quantity).toLocaleString('fr-FR')}€</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                    <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, this.value)" style="width: 50px; padding: 4px; border: 1px solid var(--border); border-radius: 4px; background: rgba(255,255,255,0.05); color: var(--text-primary); text-align: center;">
                    <button onclick="removeFromCart(${item.id})" class="cart-item-remove">Supprimer</button>
                </div>
            </div>
        `).join('');
    }

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('subtotal').textContent = `${subtotal.toLocaleString('fr-FR')}€`;
    document.getElementById('total').textContent = `${subtotal.toLocaleString('fr-FR')}€`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// ============================================
// FAVORITES
// ============================================
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
    renderProducts();
    renderFavorites();
}

function renderFavorites() {
    const favItems = document.getElementById('favItems');
    const favProducts = products.filter(p => favorites.includes(p.id));

    if (favProducts.length === 0) {
        favItems.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💔</div>
                <p>Aucun favori pour le moment</p>
            </div>
        `;
    } else {
        favItems.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
                ${favProducts.map(p => `
                    <div class="product-card" onclick="openProduct(${p.id})">
                        <div class="product-image">
                            <img src="${p.image}" alt="${p.name}">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${p.name}</h3>
                            <div class="product-price">${p.price.toLocaleString('fr-FR')}€</div>
                            <button onclick="toggleFavorite(${p.id}); event.stopPropagation();" style="width: 100%; padding: 8px; background: var(--danger); color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 8px;">Retirer</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function updateFavCount() {
    favCount.textContent = favorites.length;
}

// ============================================
// PRODUCT DETAIL
// ============================================
function openProduct(productId) {
    currentProductId = productId;
    const product = products.find(p => p.id === productId);

    document.getElementById('mainProductImg').src = product.image;
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productPrice').textContent = `${product.price.toLocaleString('fr-FR')}€`;
    document.getElementById('productDesc').textContent = product.description;
    document.getElementById('productStars').textContent = '⭐'.repeat(Math.floor(product.rating));
    document.getElementById('reviewCount').textContent = `${product.reviews} avis`;

    // Thumbnails
    const thumbGallery = document.getElementById('thumbGallery');
    thumbGallery.innerHTML = product.images.map((img, idx) => `
        <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeProductImage(this, '${img}')">
            <img src="${img}" alt="">
        </div>
    `).join('');

    // Options
    document.getElementById('sizeSelect').innerHTML = `
        <option>Sélectionner une dimension</option>
        ${product.sizes.map(s => `<option>${s}</option>`).join('')}
    `;
    document.getElementById('woodSelect').innerHTML = `
        <option>Sélectionner un bois</option>
        ${product.woods.map(w => `<option>${w}</option>`).join('')}
    `;

    // Details
    document.getElementById('details-tab').innerHTML = product.details;
    document.getElementById('shipping-tab').innerHTML = product.shipping;
    document.getElementById('care-tab').innerHTML = product.care;

    document.getElementById('addToCart').onclick = () => {
        addToCart(productId);
        closeProduct();
    };

    document.getElementById('addToFav').onclick = () => {
        toggleFavorite(productId);
        document.querySelector('#addToFav svg').style.opacity = favorites.includes(productId) ? '1' : '0.5';
    };

    document.getElementById('qtyInput').value = 1;

    productModal.classList.add('active');
}

function changeProductImage(thumb, src) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    document.getElementById('mainProductImg').src = src;
}

function closeProduct() {
    productModal.classList.remove('active');
}

// ============================================
// MODALS
// ============================================
function openCart() {
    renderCart();
    cartModal.classList.add('active');
}

function closeCart() {
    cartModal.classList.remove('active');
}

function openFavorites() {
    renderFavorites();
    favModal.classList.add('active');
}

function closeFav() {
    favModal.classList.remove('active');
}

// ============================================
// CHECKOUT
// ============================================
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('❌ Votre panier est vide');
        return;
    }

    alert('🎉 Commande simulée!\n\nMerci de votre achat.\n\nRéf: #' + Math.random().toString(36).substr(2, 9).toUpperCase());
    cart = [];
    saveCart();
    updateCartCount();
    closeCart();
    renderCart();
}

// ============================================
// UTILITIES
// ============================================
function getCategoryLabel(category) {
    const labels = {
        'tables': '📦 Tables',
        'chairs': '🪑 Chaises',
        'shelving': '📚 Rangements',
        'desks': '🖊️ Bureaux'
    };
    return labels[category] || category;
}

function showNotification(message) {
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--sanguine);
        color: white;
        padding: 14px 20px;
        border-radius: 8px;
        z-index: 3000;
        font-size: 13px;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ============================================
// ANIMATIONS
// ============================================
function renderAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
