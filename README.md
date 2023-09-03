![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Technology used: Next.js, Material UI, Tailwind CSS, Vercel.

<h1 align="center"> Amazon Clone Frontend </h1>

This is the codebase for amazon frontend app.

## Features

### 1. Authentication

- Sign Up
- Login
- Sign Out
- Reset password when forgot password
- Verify user by using OTP when reset password
- Send OTP to email address
- Use JWT(JSON Web Token) to verify user

### 2. Account

- Show profile
- Update profile info
- Change password
- Delete account (deactivate user)

### 3. Security

- Use HTTP only cookie to prevent XSS

### 4. Products

- Search products based on categories and keyword
- Autocomplete search bar
- Sort products based on price (descending or ascending), best reviews and best seller.
- Show product based on categories
- Show all products
- Show best seller products
- Show best review products
- Show customized recommended products
- Show buy again products
- Show product detail and reviews
- Show product rating

### 5. Carts

- Show cart items
- Add item to cart
- Delete cart item
- Change cart item amount
- Save cart item
- Checkout cart item

### 6. Orders

- Show order histories and summary
- Update order status every 1 min for expedited shipping and 5 mins for standard shipping
- Show order details
- Cancel order
- Order back canceled order
- Place order

### 7. Reviews

- Show reviewable products (order status is "Delivered")
- Create review
- Show user reviews
- Delete review
- Update review

### 8. Addresses

- Show all addresses
- Add new address
- Set address as default
- Update address
- Delete address

### 9. Credit Cards

- Show all credit cards
- Add credit card
- Delete credit card
- Set credit card as default

### 10. Others

- Responsive design
- Pagination
- Snackbar to give user feedback on each action
