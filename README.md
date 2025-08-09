# Welcome to your Mobile Shopping App 👋

A cross-platform e-commerce application built with **Expo React Native**, powered by **Supabase** for backend services, and using **Tanstack Query** for efficient data fetching.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

## 🚀 Features

### User Authentication
- Secure sign-up and login functionality
- Email/password based authentication

### Product Catalog
- Browse available products with images
- View product details and pricing

### Shopping Cart
- Add/remove items from cart
- Adjust quantities
- View cart summary with total

### Order Management
- Checkout process
- Order history tracking
- Order status updates (pending, completed, etc.)

## 🛠️ Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| Expo React Native| Cross-platform mobile development|
| Tanstack Query   | Data fetching and state management|
| Supabase         | Backend services and database    |

## 🗃️ Database Schema

### `products` Table
| Field     | Type      | Description               |
|-----------|-----------|---------------------------|
| id        | UUID      | Unique product identifier |
| created_at| timestamptz| Creation timestamp       |
| name      | text      | Product name              |
| imageUrl  | text      | Product image URL         |
| price     | float4    | Product price             |

### `orders` Table
| Field       | Type      | Description                     |
|-------------|-----------|---------------------------------|
| id          | UUID      | Unique order identifier        |
| created_at  | timestamptz| Creation timestamp            |
| order_items | json      | List of products in order      |
| status      | text      | Order status (e.g., pending)   |
| total       | float4    | Order total amount             |
| user_id     | UUID      | User who placed the order      |

## 📱 Screenshots

### Authentication
| Screen  | Preview |
|---------|---------|
| **Sign Up** | <img src="sign-up.jpg" width="200"> |
| **Login** | <img src="login.jpg" width="200"> |

### Shopping Experience
| Screen  | Preview |
|---------|---------|
| **Products** | <img src="products.jpg" width="200"> |
| **Cart** | <img src="cart.jpg" width="200"> |
| **Checkout** | <img src="checkout.jpg" width="200"> |
