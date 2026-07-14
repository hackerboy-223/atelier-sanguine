# TODO — Back-end Netlify (Node.js) pour Bko Market

## Étape 1 — Setup projet
- [ ] Créer `netlify/` (ou `netlify/functions/`) et initialiser le projet Node localement (si besoin)
- [ ] Ajouter dépendances : express (ou handler netlify), pg, jsonwebtoken, zod, multer (si upload), @aws-sdk/client-s3, @aws-sdk/lib-storage
- [ ] Créer `.env` (local) avec DATABASE_URL, JWT_SECRET, S3_* (placeholders)

## Étape 2 — Base de données
- [ ] Créer schéma PostgreSQL (Neon) :
  - [ ] users (rôles admin/seller)
  - [ ] products (données catalogue)
  - [ ] product_images (liens images)
  - [ ] product_variants (optionnel : finitions)
  - [ ] orders (status)
  - [ ] order_items
- [ ] Ajouter index/contraintes minimales

## Étape 3 — Auth + RBAC
- [ ] Route `POST /api/auth/login` (admin/seller)
- [ ] Middleware JWT + vérification rôle

## Étape 4 — API produits (public)
- [ ] `GET /api/products` filtrage/tri/pagination
- [ ] `GET /api/products/:id`

## Étape 5 — API produits (seller/admin)
- [ ] `POST /api/products` (seller/admin)
- [ ] `PUT /api/products/:id` (seller/admin)
- [ ] `DELETE /api/products/:id` (admin)

## Étape 6 — Upload images
- [ ] `POST /api/products/:id/images` (seller/admin)
- [ ] Stockage S3 compatible + sauvegarde URLs DB
- [ ] Paramétrer bucket public vs private + URL publique

## Étape 7 — API commandes
- [ ] `POST /api/orders/checkout` (crée commande + items)
- [ ] Flux paiement (optionnel : Stripe plus tard)
- [ ] Admin : `GET /api/orders`, `PATCH /api/orders/:id/status`

## Étape 8 — Frontend
- [ ] Modifier `script.js` pour remplacer le catalogue local par `fetch('/api/products')`
- [ ] Ajouter panneau vendeur/admin (UI) :
  - [ ] Formulaire ajout/édition produit
  - [ ] Upload images
  - [ ] Liste produits du vendeur
- [ ] Auth côté front : store JWT + menus admin/seller

## Étape 9 — Déploiement Netlify
- [ ] Placer fonctions dans `netlify/functions/`
- [ ] Configurer env vars dans Netlify site
- [ ] Ajuster CORS si besoin

## Étape 10 — Tests
- [ ] Tester upload images
- [ ] Tester CRUD produits
- [ ] Tester chargement catalogue public

