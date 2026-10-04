import type { Product } from "../types/product";

export const products: Product[] = [
  { id: "air-runner", name: "Air Runner 01", category: "Sneakers", price: 129, rating: 4.8, reviews: 214, badge: "BESTSELLER", description: "Lightweight everyday runners with responsive cushioning and a breathable engineered upper.", colors: ["#ECEAE2", "#111111", "#D5DDEB"], accent: "#D8FF5C" },
  { id: "studio-hoodie", name: "Studio Hoodie", category: "Apparel", price: 88, rating: 4.7, reviews: 98, badge: "NEW", description: "A heavyweight relaxed-fit hoodie cut from soft brushed cotton for everyday layering.", colors: ["#D7D4CC", "#202124"], accent: "#B7E8FF" },
  { id: "orbit-watch", name: "Orbit Watch", category: "Accessories", price: 164, rating: 4.9, reviews: 76, description: "Minimal everyday timepiece with a clean dial, tactile crown and stainless steel case.", colors: ["#C8C8C3", "#1A1A1A"], accent: "#FFD28A" },
  { id: "pulse-buds", name: "Pulse Buds", category: "Tech", price: 119, rating: 4.6, reviews: 183, badge: "TRENDING", description: "Compact wireless earbuds designed around clear sound, low-latency listening and all-day comfort.", colors: ["#F4F3EF", "#171717"], accent: "#C7B6FF" },
  { id: "trail-cap", name: "Trail Cap", category: "Accessories", price: 42, rating: 4.5, reviews: 61, description: "Five-panel technical cap with a lightweight construction and adjustable rear strap.", colors: ["#B7C5A7", "#E4D6C3"], accent: "#FFB68A" },
  { id: "daily-tee", name: "Daily Tee", category: "Apparel", price: 36, rating: 4.7, reviews: 142, description: "Clean everyday tee with a structured collar and a slightly oversized silhouette.", colors: ["#F0EFE9", "#B7BCC3", "#1A1A1A"], accent: "#8BE0C0" }
];