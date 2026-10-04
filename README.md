# ShopSphere

A polished independent React Native + Expo e-commerce app built to demonstrate production-minded mobile architecture, reusable UI, local persistence and a complete shopping flow.

> **Portfolio project by Shubham Mehta — Senior React Native Engineer / Technical Lead**

## What this project demonstrates

ShopSphere is intentionally built as more than a collection of screens. The goal is to demonstrate how I structure and ship a mobile product:

- File-based routing with Expo Router
- Feature-oriented screen organization
- Reusable, typed UI components
- Shared design tokens
- Persistent cart and wishlist state
- Search and category filtering
- Product detail flows
- Checkout and order creation simulation
- Order history
- Empty and error-adjacent states
- iOS and Android-ready React Native UI
- Clear separation between routing, screens, components, state, data and styling

## Product flow

```text
Home
  │
  ├── Explore ── Search / Category filter
  │       │
  │       └── Product details
  │               ├── Add to cart
  │               └── Save to wishlist
  │
  ├── Wishlist ── Move saved products into cart
  │
  └── Cart
          │
          └── Checkout
                  │
                  └── Order confirmation
                          │
                          └── Order history
```

## Architecture

Expo Router owns the route layer under `src/app`. Application code stays outside the routing directory.

```text
src/
├── app/                         # Expo Router routes only
│   ├── _layout.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   ├── cart.tsx
│   │   └── profile.tsx
│   ├── product/[id].tsx
│   ├── wishlist.tsx
│   ├── checkout.tsx
│   └── orders.tsx
│
├── screens/                     # Feature/module screens
│   ├── home/
│   ├── explore/
│   ├── cart/
│   ├── profile/
│   ├── product-details/
│   ├── wishlist/
│   ├── checkout/
│   └── orders/
│
├── components/                  # Reusable UI
│   ├── product-card/
│   └── product-artwork/
│
├── store/                       # Persistent application state
│   ├── cart/
│   ├── wishlist/
│   └── orders/
│
├── data/                        # Local product catalogue
├── types/                       # Shared TypeScript types
├── theme/                       # Design tokens
└── navigation/                  # Navigation configuration
```

### Architectural rules

1. `src/app` contains routes/layouts only.
2. Screens contain feature-level UI and behavior.
3. Reusable components are kept independent from individual screens.
4. Shared visual decisions come from `src/theme`.
5. Persistent state is isolated in the store layer.
6. Product data and domain types are separated from presentation.
7. No confidential employer code, screenshots, business logic or data is used.

## Key implementation details

### Search and filtering

The Explore screen combines a text query with category selection and derives the visible catalogue with `useMemo`. Search covers product names and descriptions.

### Persistent cart

Cart items are stored locally so the shopping bag survives application restarts. Quantity changes, removal and subtotal calculation are handled in the cart store.

### Wishlist

Saved product IDs are persisted independently from the cart. This keeps the wishlist lightweight while allowing products to be reconstructed from the local catalogue.

### Dynamic product routes

Product details use Expo Router's dynamic route:

```text
/product/[id]
```

A product ID from the route is resolved against the catalogue, keeping the route reusable for every product rather than creating a separate screen for each item.

### Checkout

Checkout validates the shipping form, creates an order and displays a confirmation flow. Payment is intentionally a **demo simulation** — no real payment provider or card transaction is connected.

### Order history

Completed demo orders are persisted locally and displayed with order ID, date, items, status and total.

## Current feature set

| Area | Implementation |
|---|---|
| Catalogue | Local typed product catalogue |
| Search | Name + description search |
| Filtering | Category filters |
| Product details | Dynamic `/product/[id]` route |
| Cart | Add, quantity, remove, subtotal |
| Wishlist | Persistent saved products |
| Checkout | Shipping form + demo payment state |
| Orders | Local order creation + history |
| UI states | Empty states and disabled/validation states |
| Styling | Shared theme tokens + colocated styles |
| Navigation | Expo Router + tab navigation |
| Persistence | AsyncStorage |
| Platform | React Native + Expo |

## Tech stack

- **React Native**
- **Expo**
- **Expo Router**
- **TypeScript**
- **AsyncStorage**
- **React Native Safe Area Context**
- **Expo Image**

## Running locally

```bash
npm install
npm run typecheck
npx expo start
```

Then open the project with an Expo development environment or run a native platform build.

## Engineering decisions

### Why keep `src/app` thin?

Expo Router is responsible for mapping URLs/routes to screens. Keeping business and UI code outside the route directory prevents routing concerns from leaking into the rest of the application.

### Why colocate styles?

Each screen/component owns its presentation styles, while global visual primitives live in the theme layer. This makes feature work easier to navigate and reduces large shared-style files.

### Why persist state locally?

Cart, wishlist and demo orders represent user state that should survive an app restart. AsyncStorage is sufficient for this portfolio implementation without introducing unnecessary infrastructure.

## Roadmap

The project is intentionally being evolved incrementally.

- [x] Core catalogue and navigation
- [x] Search and category filtering
- [x] Product details
- [x] Persistent cart
- [x] Persistent wishlist
- [x] Checkout simulation
- [x] Order history
- [ ] Remote API integration
- [ ] Authentication
- [ ] Product image CDN
- [ ] Real payment provider integration
- [ ] Automated E2E coverage
- [ ] Performance profiling and benchmarks

## Author

**Shubham Mehta**  
Senior Mobile Engineer · React Native · Technical Lead

- GitHub: https://github.com/shubhammehta78
- LinkedIn: https://www.linkedin.com/in/shubham-mehta-654686148
- Medium: https://medium.com/@Thatreactnativeguy

---

This repository is an independent portfolio project and is not affiliated with or derived from any employer codebase.
