# THCA Store FL - MVP Demo

## 🌿 Overview

THCA Store FL is a modern, responsive e-commerce MVP designed for selling legal THCA products in Florida. This is a **demonstration website only** - no actual products are sold and no real transactions occur.

### ⚠️ Important Legal Notice

- **21+ ONLY** - This demo represents an age-restricted product marketplace
- **DEMO PURPOSES ONLY** - No actual sales or transactions occur
- **FLORIDA LEGAL COMPLIANCE** - Designed to comply with Florida hemp/cannabis laws
- **NOT MEDICAL ADVICE** - Information is educational only

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd thca-store-fl

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Navbar, Footer, Toast, etc.)
│   └── product/         # Product-specific components
├── pages/               # Page components (Home, Shop, Cart, etc.)
├── context/             # React Context (CartContext)
├── utils/               # Utility functions (price, validators)
├── data/                # Static data (products.json)
└── styles/              # CSS files

public/
└── images/              # Product images (referenced via Pexels URLs)
```

## 🛍️ Features

### Core E-commerce Features
- **Product Catalog**: 8 sample THCA products with categories (flower, pre-roll, vape)
- **Product Details**: Individual product pages with image gallery and specifications
- **Shopping Cart**: Add/remove items, quantity management, persistent storage
- **Checkout Flow**: Mock checkout with form validation and order confirmation
- **Responsive Design**: Mobile-first design with Bootstrap 5

### Cannabis/THCA Specific Features
- **THCA Percentage Display**: Prominent potency information
- **Strain Classifications**: Indica/Sativa/Hybrid badges
- **Lab Results Links**: Placeholder links for COA documents
- **Age Verification**: 21+ confirmation in checkout
- **Legal Compliance**: Dedicated legal information page

### Technical Features
- **React + Vite**: Modern build tooling with fast HMR
- **React Router**: Client-side routing with 404 handling
- **Context API**: Global cart state management
- **LocalStorage**: Cart persistence across sessions
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Skeleton loaders and loading spinners
- **Toast Notifications**: User feedback for actions

## 🎨 Design System

### Color Palette
- **Primary Green**: #059669 (cannabis-themed)
- **Warning Yellow**: #f59e0b (attention/age restrictions)
- **Info Blue**: #0ea5e9 (informational)
- **Purple**: #8b5cf6 (indica strain badges)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Line Heights**: 120% (headings), 150% (body)

### Spacing System
- **8px base unit** for consistent spacing
- **Bootstrap 5 utilities** for rapid development

## 📦 Product Data Structure

Products are stored in `src/data/products.json`:

```json
{
  "id": 1,
  "slug": "product-slug",
  "name": "Product Name",
  "shortDescription": "Brief description",
  "description": "Detailed description",
  "thcaPercent": 28.5,
  "category": "flower|pre-roll|vape",
  "price": 45.99,
  "stock": 15,
  "badges": ["Indica", "Premium"],
  "labResultsUrl": "https://example-lab-results.com",
  "weight": "3.5g",
  "images": {
    "primary": "image-url",
    "hover": "image-url"
  }
}
```

### Adding New Products

1. Add product data to `src/data/products.json`
2. Ensure images are accessible URLs (currently using Pexels)
3. Follow the existing data structure for consistency

## 💳 Mock Checkout System

The checkout system is completely frontend-based for demo purposes:

### Current Implementation
- Form validation (required fields, email format, ZIP code)
- Age verification (21+) checkbox
- Terms acceptance checkbox
- Mock processing with loading state
- Order confirmation page with order ID
- Cart clearing after successful "purchase"

### Order Flow
1. **Cart** → Review items and totals
2. **Checkout** → Fill customer information and verify age
3. **Processing** → Mock 2-second processing delay
4. **Success** → Order confirmation with details

## 🔮 Future Stripe Integration

To integrate real payments with Stripe:

### 1. Backend Setup
```bash
# Install Stripe SDK
npm install stripe

# Create server endpoints
# POST /api/create-payment-intent
# POST /api/confirm-payment
```

### 2. Frontend Integration
```bash
# Install Stripe React components
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### 3. Environment Variables
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 4. Replace Mock Checkout
- Replace mock processing in `CheckoutPage.jsx`
- Add Stripe Elements components
- Handle real payment processing
- Add payment method collection
- Implement webhook handling for order fulfillment

### 5. Compliance Considerations
- Age verification integration
- Tax calculation by ZIP code
- State-specific shipping restrictions
- Payment method restrictions (if any)

## 🛡️ Legal Compliance Features

### Age Verification
- 21+ confirmation required at checkout
- Visual age warnings throughout site
- Legal information page with restrictions

### Product Information
- THCA percentages clearly displayed
- Lab testing information (mock links)
- Strain classifications (Indica/Sativa/Hybrid)
- Legal disclaimers and warnings

### Florida-Specific
- State selector locked to Florida
- ZIP code validation for 5-digit format
- Legal compliance page with state-specific information

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (2-column product grid)
- **Desktop**: > 1024px (4-column product grid, full layout)

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive alt text for all images
- **Focus States**: Visible focus indicators

## 🧪 Testing Checklist

### Manual Testing
- [ ] All routes load without errors
- [ ] Product images display correctly (primary/hover)
- [ ] Cart functionality (add/remove/update quantities)
- [ ] Checkout form validation
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Age verification flow
- [ ] Empty states (empty cart, no search results)

### Automated Testing (Future)
- Unit tests for utilities (price formatting, validation)
- Component tests for cart functionality
- E2E tests for checkout flow

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in `dist/` can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static file hosting service

### Environment Variables
No environment variables required for the demo version.

## 📄 License

This project is for demonstration purposes only. Not for commercial use without proper licensing and legal compliance.

---

**Demo Notice**: This is a demonstration e-commerce site for THCA products legal in Florida. No actual products are sold, no real payments are processed, and no actual business operations occur. The site is designed to showcase modern web development techniques and legal cannabis e-commerce UX patterns.

**Age Restriction**: The design represents products restricted to individuals 21 years of age or older.

**Legal Compliance**: Always consult with legal professionals when building actual cannabis/hemp e-commerce sites to ensure full compliance with local, state, and federal regulations.