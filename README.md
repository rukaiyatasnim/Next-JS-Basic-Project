# TechNest - Next.js E-commerce Project

A simple e-commerce project built with **Next.js 15**, featuring product listing, product details, and authentication-protected pages for adding products.  

**Live Demo:** [https://next-js-six-bay.vercel.app/](https://next-js-six-bay.vercel.app/)

#Login Credintials
username: "jsmith",
password: "123456",

---

## Features

**Landing Page (`/`)**
- Navbar, Hero, Product Highlights, Footer  
- Navigation to Login and Products  
- Publicly accessible  

**Login Page (`/login`)**
- NextAuth.js login (Google or credentials)  
- Redirects to `/products` after successful login  

**Product List Page (`/products`)**
- Displays products from `services.json`  
- Each product: name, description, price, and Details button  
- Publicly accessible  

**Product Details Page (`/products/[id]`)**
- Shows full product details  
- Publicly accessible  

**Protected Page: Add Product (`/dashboard/add-product`)**
- Only for logged-in users  
- Add new products via form and store in database  
- Redirects unauthenticated users to `/login`  

---

## Technologies Used
- Next.js 15 (App Router)  
- NextAuth.js for authentication  
- Tailwind CSS

---
