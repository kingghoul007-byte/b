# Birthday Celebration Website 🎉

A beautiful, animated birthday celebration website built with Next.js, React, TypeScript, and Tailwind CSS.

## 📋 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── FloatingPetals.tsx  # Animated falling petals
│   ├── MemoryCard.tsx      # Memory gallery cards
│   ├── ReasonCard.tsx      # Reasons cards
│   ├── Confetti.tsx        # Confetti animation
│   └── BirthdayCake.tsx    # Interactive cake with candles
├── lib/
│   └── utils.ts            # Utility functions
├── styles/                 # Additional styles
├── public/                 # Static assets
├── .eslintrc.json          # ESLint configuration
├── .prettierrc              # Prettier configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies and scripts
```

## ✨ Features

- **Fully Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion animations throughout
- **Interactive Elements** - Clickable birthday cake with confetti
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Performance Optimized** - Lazy loading images, efficient animations
- **Type Safe** - Full TypeScript support with strict mode enabled
- **Code Quality** - ESLint and Prettier configured

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (pnpm recommended)
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🛠 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Run Prettier to format code
- `pnpm format:check` - Check code formatting

## 🎨 Customization

### Fonts

The project uses **Playfair Display** for headings and **Dancing Script** for decorative text. Customize in [app/layout.tsx](app/layout.tsx).

### Colors

- Primary: `#d4a5d4` (purple)
- Secondary: `#f0a8d8` (pink)
- Modify in Tailwind classes and inline styles

### Content

Edit sections in [app/page.tsx](app/page.tsx):

- **Hero Section**: Change title and welcome text
- **Memory Sections**: Update `MEMORY_SECTIONS` with photos and captions
- **Reasons**: Modify `REASONS` array with custom reasons
- **Letter Section**: Update the personal message

### Images

Replace image URLs in `MEMORY_SECTIONS` with your own photos:

```javascript
image: 'https://your-image-url.jpg';
```

## 🔧 Performance Optimizations

✅ **Lazy Loading** - Images load on demand using `loading="lazy"`
✅ **Component Splitting** - Separated components for better tree-shaking
✅ **Image Optimization** - Configured remote patterns for Next.js
✅ **Motion Optimization** - Efficient Framer Motion animations
✅ **Code Splitting** - Next.js automatic code splitting

## ♿ Accessibility Features

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support (Tab, Enter, Space)
- Screen reader friendly content
- Proper heading hierarchy with `aria-labelledby`

## 📦 Dependencies

### Core

- **Next.js 16** - React framework
- **React 19** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS 4** - Utility-first CSS

### UI Components

- **Radix UI** - Headless component library
- **Lucide React** - Icon library

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form resolvers

### Analytics

- **Vercel Analytics** - Performance monitoring

## 📝 Improvements Made

1. **Fixed TypeScript Configuration**
   - Removed `ignoreBuildErrors` flag
   - Enabled strict mode
   - Added stricter compiler options

2. **Code Organization**
   - Extracted components to separate files
   - Added proper TypeScript interfaces
   - JSDoc comments for documentation

3. **Code Quality**
   - ESLint configuration with React & TypeScript plugins
   - Prettier formatting configuration
   - Consistent code style

4. **Performance**
   - Image lazy loading
   - Optimized animations
   - Efficient state management with `useCallback`

5. **Accessibility**
   - ARIA labels and descriptions
   - Semantic HTML elements
   - Keyboard navigation support
   - Focus management

6. **Developer Experience**
   - Improved configuration files
   - Clear project structure
   - Type-safe components
   - Better error handling

## 📄 License

Created with 💖 for special celebrations

## 🤝 Contributing

Feel free to customize and enhance this project!

---

**Made with 💖**
