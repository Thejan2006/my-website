# Modern Next.js Website

A beautiful, animated website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations with Framer Motion
- 🚀 Fast performance with Next.js 15 & Turbopack
- 📱 Mobile-friendly navigation
- 🎯 Multiple pages with seamless routing
- 💅 Styled with Tailwind CSS
- 🔷 TypeScript for type safety
- ⚡ React 19 with latest features

## Pages

- **Home** - Hero section with features and CTA
- **About** - Company story, team, and values
- **Services** - Service offerings with detailed information
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20.0+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server (with Turbopack - faster):
```bash
npm run dev --turbo
```

Or run normally:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
my-website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navbar.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 15.1.6** - React framework with App Router
- **React 19** - Latest React with improved performance
- **TypeScript 5.7** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 11** - Animation library
- **Turbopack** - Ultra-fast bundler (Next.js 15 feature)

## Next.js 15 New Features Used

- ✅ Turbopack for faster development builds
- ✅ Enhanced caching strategies
- ✅ Improved performance optimizations
- ✅ React 19 support
- ✅ Better TypeScript integration

## Customization

### Colors
Edit the Tailwind config or use inline classes to change the color scheme.

### Animations
Modify animation variants in the page components to customize motion effects.

### Content
Update the text, images, and data in each page component to match your needs.

## Performance Tips

- Use `npm run dev --turbo` for faster development builds
- Images will be automatically optimized by Next.js
- CSS is automatically minified in production
- Components are code-split automatically

## Deployment

Deploy easily to:
- **Vercel** (recommended): https://vercel.com
- **Netlify**: https://netlify.com
- **AWS Amplify**: https://aws.amazon.com/amplify
- Any Node.js hosting platform

## License

MIT

## Support

For support, email contact@mywebsite.com or visit our website.
