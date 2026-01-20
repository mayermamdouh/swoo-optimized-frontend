# Swoo Tech Frontend (Enhanced Version)

A modern, lightning-fast e-commerce frontend built with **Next.js 14+**, **Tailwind CSS**, and **shadcn/ui**. This project is a highly optimized reconstruction of the [Swoo HTML Template](https://ui-themez.smartinnovates.net/items/swoo_html/home_tech/index.html#), focusing on superior performance, clean code architecture, and a seamless user experience.

## 🚀 Overview

This project transforms a static HTML template into a dynamic, production-ready React application. By leveraging **Next.js App Router** and **Server-Side Rendering (SSR)** strategies, the application achieves significantly faster load times and better SEO compared to the original version.

---

## ⚡ Performance & Optimizations

This version focuses heavily on performance to ensure a near-perfect user experience. Key optimizations include:

- **Next.js Image Optimization:** Replaced standard `<Image>` tags with `next/image` for automatic format conversion (WebP/AVIF), lazy loading, and prevention of Layout Shift (CLS).
- **React Server Components (RSC):** Shifted heavy logic to the server to reduce the JavaScript bundle size delivered to the client.
- **Code Splitting:** Automatic route-based splitting ensures users only download the code needed for the page they are visiting.
- **Modular UI:** Used **shadcn/ui** which allows for tree-shakable components, ensuring no unused CSS or JS is included in the production build.
- **Font Optimization:** Integrated `next/font` to host fonts locally and eliminate flashes of unstyled text (FOUT).
- **Optimized Assets:** Compressed all local assets and icons to ensure the fastest possible Initial Server Response.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/)

---

## ✨ Features

- **Dynamic Product Routing:** Nested routes for products and categories using `src/app/products/[id]`.
- **Advanced Filtering:** Comprehensive sidebar filters for price ranges, categories, and brands.
- **User Account System:** Pre-built pages for Profile, Orders, Addresses, and Authentication.
- **Responsive UI:** Mobile-first design with custom navigation for smaller screens.
- **Complex Components:** Includes Product Carousels, Tabbed Product Info, Review systems, and Deal-of-the-day countdowns.

---

## 📂 Project Structure

```text
src/
├── app/             # App Router (Pages, Layouts, API routes)
├── components/      # Reusable UI & Feature-based components
│   ├── products/    # Product-specific logic (Filters, Cards)
│   ├── profile/     # User dashboard components
│   ├── ui/          # shadcn/ui low-level components (buttons, inputs)
│   └── ...          # Layout components (Footer, AppBar, etc.)
├── lib/             # Utility functions and configurations
├── types/           # TypeScript interfaces and definitions
└── data/            # Local mock data for brands and products
```
