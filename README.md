# ShopSphere

Independent React Native + Expo e-commerce portfolio project by Shubham Mehta.

## Architecture

Expo Router owns the route layer under `src/app`. Reusable application code stays outside it.

```text
src/
  app/                         # Expo Router routes only
    _layout.tsx
    (tabs)/
      _layout.tsx
      index.tsx
      explore.tsx
      cart.tsx
      profile.tsx
    product/
      [id].tsx
    wishlist.tsx

  theme/                       # Shared design tokens
    colors.ts
    spacing.ts
    radii.ts
    typography.ts
    index.ts

  screens/                     # Feature/module screens
    home/
      index.tsx
      styles.ts
    explore/
      index.tsx
      styles.ts
    cart/
      index.tsx
      styles.ts
    profile/
      index.tsx
      styles.ts
    product-details/
      index.tsx
      styles.ts
    wishlist/
      index.tsx
      styles.ts

  components/                  # Reusable UI
    product-card/
      index.tsx
      styles.ts
    product-artwork/
      index.tsx
      styles.ts

  navigation/                  # Navigator configuration
    root/
    tabs/

  store/                       # Application state
    cart/
    wishlist/

  data/
  types/
```

### Architecture rules

- `src/app` is **routes only** because Expo Router uses file-based routing.
- `src/navigation` contains navigator configuration, not route files.
- Every screen/module gets an `index.tsx` and colocated `styles.ts`.
- Reusable components follow the same `index.tsx + styles.ts` pattern.
- Shared colors, spacing, radii and typography come from `src/theme`.
- No confidential employer code, screenshots, business logic or data is used.

## Current features

- Product catalogue
- Search
- Category filtering
- Product details
- Persistent cart
- Persistent wishlist / saved items
- Empty states
- Reusable product components
- Responsive iOS and Android UI
- Typed navigation
- Shared design tokens
- Clean separation of routing, screens, components, state and styling

## Run

```bash
npm install
npm run typecheck
npx expo start
```

Expo Router officially supports `src/app` as the route directory; it takes precedence over a root `app` directory. The `src/app` directory should contain routes/layouts, while application components and other code belong outside it. citeturn0search1turn0search3
