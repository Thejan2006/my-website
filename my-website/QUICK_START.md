# Quick Start Guide

## Setup Instructions

1. **Extract the files** to your preferred location

2. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Version 18.18 or higher required (20.0+ recommended)

3. **Open Terminal/Command Prompt** and navigate to the project folder:
   ```bash
   cd path/to/my-website
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   Or use Turbopack for faster builds (Next.js 15 feature):
   ```bash
   npm run dev --turbo
   ```

6. **View your website**:
   - Open your browser and go to: http://localhost:3000

## What's Included

✅ **4 Fully Functional Pages**:
- Home page with hero section and features
- About page with team and story
- Services page with offerings
- Contact page with form

✅ **Smooth Animations**:
- Page transitions
- Hover effects
- Scroll animations
- Interactive elements

✅ **Responsive Design**:
- Works on desktop, tablet, and mobile
- Animated mobile menu

✅ **Modern Tech Stack**:
- Next.js 15.1.6 (App Router)
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- Framer Motion 11
- Turbopack support

## Next.js 15 Features

🚀 **Turbopack** - Faster development builds (use `npm run dev --turbo`)
⚡ **React 19** - Latest React version with improved performance
🎯 **Enhanced Caching** - Better performance out of the box
🔧 **Improved TypeScript** - Better type inference

## Building for Production

When ready to deploy:

```bash
npm run build
npm start
```

## Deployment Options

- **Vercel** (recommended): https://vercel.com
- **Netlify**: https://netlify.com
- **AWS Amplify**: https://aws.amazon.com/amplify

## Customization Tips

1. **Change Colors**: Edit `tailwind.config.js` or modify gradient classes
2. **Update Content**: Edit the text in each page component
3. **Add Pages**: Create new folders in the `app/` directory
4. **Modify Animations**: Adjust Framer Motion variants in components

## Troubleshooting

**If you get errors during npm install:**
- Make sure you have Node.js 18.18+ installed
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Port already in use:**
- Next.js runs on port 3000 by default
- Use a different port: `npm run dev -- -p 3001`

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- React 19: https://react.dev/

Enjoy your new website! 🚀
