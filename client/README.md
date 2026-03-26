# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# TODOs

1. Filtering products:
    create the highlights and acordion for each, Ui in a column LHS

    The highlights were: 
    - Categories >
        Body
        Hair care
        Skin care
        Accessories

    - Product Type
        Cleanser
        Moisturizer
        Shampoo
        Serum
        Dehodorant
        Body wash
        Fragances

    - Price Range
        Under $10
        $10–$25
        $25–$50


        
2. Product Sorting
Add a sorting dropdown to the product listing
Supported sorting options:
Alphabetical order (A–Z)
Price: Low to High
Price: High to Low

3. Search Functionality
Make the header search bar functional
Connect search input to product data
Filter products based on search query (e.g. product name)
Update the product list dynamically with search results


src/
 ├─ assets/
 ├─ components/        ← fully reusable UI
 │   ├─ layout/        ← site-wide layout components
 │   │   ├─ Header.jsx
 │   │   ├─ Footer.jsx
 │   │   └─ Navbar.jsx
 │   │
 │   ├─ ui/            ← generic UI blocks
 │   │   ├─ Button.jsx
 │   │   ├─ Accordion.jsx
 │   │   └─ Loader.jsx
 │   │
 │   └─ bag/           ← reusable bag/cart elements used in multiple features
 │       └─ MiniCartItem.jsx

 ├─ features/          ← feature-specific code
 │   ├─ products/
 │   │   ├─ ProductsPage.jsx      ← container/page
 │   │   ├─ Filters.jsx           ← page-specific filter UI
 │   │   ├─ ProductGrid.jsx
 │   │   └─ ProductCard.jsx
 │   │
 │   ├─ shoppingBag/
 │   │   ├─ ShoppingBagPage.jsx
 │   │   └─ ProductInBag.jsx
 │   │
 │   ├─ checkout/
 │   │   ├─ CheckoutPage.jsx
 │   │
 │   ├─ about/
 │   │   ├─ CheckoutPage.jsx