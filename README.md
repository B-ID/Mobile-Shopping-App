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
| **Sign Up** | ![sign-up](https://github.com/user-attachments/assets/6ffd300d-9073-4b52-a932-edd9845796e7) |
| **Login** | ![login](https://github.com/user-attachments/assets/d4f69cf1-6030-422d-8633-c8be0397b9df) |

### Shopping Experience
| Screen  | Preview |
|---------|---------|
| **Products** | ![products](https://github.com/user-attachments/assets/26087e20-7403-46ce-9aa1-fc8c092e3a60) |
| **Add Product** | ![add-product](https://github.com/user-attachments/assets/67290ceb-f7a6-4e4f-9211-14b015896390)|
| **Cart** | ![cart](https://github.com/user-attachments/assets/ee8b954d-cb13-4284-8f18-3d1f2ca19aa6) |
| **Checkout** |![checkout](https://github.com/user-attachments/assets/c8e89664-5f55-4ecb-95a2-bc1e60fcf169)|

