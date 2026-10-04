# ShopSphere

Independent React Native + Expo e-commerce portfolio project by Shubham Mehta.

## Architecture

The project follows a modular structure designed for maintainability and consistent UI:

```text
app/                         # Expo Router entry points only
src/
  theme/                     # Design tokens: colors, spacing, radii, typography
  screens/
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
  components/
    product-card/
      index.tsx
      styles.ts
    product-artwork/
      index.tsx
      styles.ts
  navigation/
    root/
    tabs/
  data/
  store/
  types/
```

**Rule:** screens and reusable components should keep their presentation styles in their colocated `styles.ts` file and consume shared design tokens from `src/theme`.

## Demonstrates

- React Native + TypeScript
- Expo Router navigation
- Reusable product components
- Search and category filtering
- Product detail flow
- Persistent cart with Async Storage
- Responsive iOS and Android UI
- Empty states and accessible press targets
- Shared design system / theme tokens
- Separation of routing, screens, components, state and styling

## Run

```bash
npm install
npm run typecheck
npx expo start
```

Expo's documentation confirms `npx expo start` as the standard command for starting the development server, and Expo has first-class TypeScript support. citeturn0search0turn0search1

For a physical Android device, Expo recommends using Expo Go for quick development/testing; production-grade projects can use a development build when custom native modules are needed. citeturn0search3
