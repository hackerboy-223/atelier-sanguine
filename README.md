# Atelier Sanguine 🪵 — Boutique

Site e-commerce d'une ébénisterie sur mesure bordelaise, au design épuré inspiré d'Apple.

## ✨ Fonctionnalités

### Boutique
- **Catalogue** de 9 pièces avec catégories (tables, assises, rangements, objets)
- **Filtres** par catégorie + **tri** (vedette, prix, nouveautés)
- **Fiche produit** : galerie photos, choix de finition, quantité
- **Recherche** instantanée (nom, essence de bois, origine)

### Panier & commande
- **Panier coulissant** avec quantités, sous-total et barre de progression cadeau
- **Favoris** avec ajout au panier en un clic
- **Checkout en 3 étapes** : coordonnées → livraison → paiement (simulé)
- **Persistance** : panier et favoris sauvegardés en `localStorage`

### Design (inspiration Apple)
- Palette noire, typographie Inter serrée (`letter-spacing` négatif)
- Verre dépoli (`backdrop-filter`) sur la nav, les modales et les drawers
- Boutons "pill", animations `cubic-bezier` douces, toasts
- Section sticky avec parallaxe, bandeau défilant, reveal au scroll
- Responsive complet + `prefers-reduced-motion`

## 📁 Structure

```
├── index.html   # Structure et sections
├── style.css    # Tous les styles
└── script.js    # Catalogue, panier, favoris, recherche, checkout
```

## 🚀 Lancer

Ouvrir `index.html` dans un navigateur — aucune dépendance, aucun build.

> ⚠️ Site de démonstration : aucun paiement réel n'est traité.

---
Fait main, comme nos meubles.
