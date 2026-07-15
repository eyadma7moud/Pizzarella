# 🍕 Pizzarella

![React](https://img.shields.io/badge/react-19-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)

A modern pizza ordering web application built with **React 19**, **Redux Toolkit**, and **React Router v7**. Pizzarella delivers a smooth and intuitive ordering experience with a dynamic menu, real-time order management, and a clean responsive interface designed for desktop and mobile users.

---

# ✨ Features

- **Dynamic Pizza Menu:** Browse an up-to-date pizza menu fetched directly from the API.
- **Fast Ordering Experience:** Create an order in just a few steps by entering your name, phone number, and delivery address.
- **Smart Shopping Cart:** Add, update, remove, and manage multiple pizzas before checkout with automatic price calculations.
- **Priority Delivery:** Upgrade any order to priority delivery with a 20% surcharge for faster preparation.
- **Live Order Tracking:** Retrieve any existing order instantly using its unique order ID.
- **Post-Order Updates:** Upgrade previously placed orders to priority without creating a new order.
- **GPS Location Support:** Automatically retrieve the customer's current location for more accurate deliveries.
- **Redux State Management:** Efficient global state management for user information and shopping cart data.
- **Responsive Modern UI:** Fully responsive layout optimized for desktops, tablets, and mobile devices.
- **Seamless Navigation:** Fast client-side routing powered by React Router with nested routes, loaders, actions, and form handling.

---

# 🛠 Technologies Used

- **Frontend Framework:** React 19 (Vite + SWC)
- **Styling:** Tailwind CSS
- **Routing & Data APIs:** React Router v7
- **State Management:** Redux Toolkit
- **Icons:** Lucide React
- **Backend API:** Fast React Pizza API

---

# 📦 Installation & Project Setup

This project is powered by a modern frontend stack focused on performance and maintainability:

- **Vite & SWC:** Lightning-fast development server and optimized production builds.
- **React Router Data APIs:** Loaders, Actions, Forms, Navigation, and Route-based data fetching.
- **Redux Toolkit:** Centralized and scalable UI state management.
- **Tailwind CSS:** Utility-first styling with responsive design utilities.
- **ESLint:** Configured for consistent code quality and best practices.

Follow these steps to run the project locally:

### **1. Clone the repository**

```bash
git clone <repository-url>
cd pizzarella
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npm run dev
```

### **4. Open in your browser**

Visit:

```
http://localhost:5173
```

or the port displayed in your terminal.

---

# 🍕 Application Pages

- **Home (`/`)**
  - Landing page introducing the restaurant and ordering experience.

- **Menu (`/menu`)**
  - Browse all available pizzas fetched from the API.

- **Cart (`/cart`)**
  - Review selected pizzas, update quantities, or remove items before checkout.

- **Create Order (`/order/new`)**
  - Submit a new order with customer information and optional GPS location.

- **Order Details (`/order/:orderID`)**
  - Retrieve and track an existing order using its unique order number.

---

# ⚙ State Management

### User
Global UI state managed with **Redux Toolkit**.

### Cart
Global UI state for cart items, quantities, and total pricing using **Redux Toolkit**.

### Menu
Remote state loaded through **React Router Loaders** from the API.

### Orders
Fetched and submitted using **React Router Actions & Loaders**, enabling seamless data mutations and retrieval.

---

# 🚀 Live Preview

Experience the application here:

### **https://pizzarella-peach.vercel.app/**