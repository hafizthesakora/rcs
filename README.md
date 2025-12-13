# Rural Climate Solutions Website

A modern, responsive website for Rural Climate Solutions (RCS) - empowering local farmers through regenerative agriculture and waste-to-resource innovation in Ghana.

Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Modern UI/UX**: Clean, professional design inspired by leading environmental organizations
- **Interactive Components**: Animated counters, smooth scrolling, mobile menu
- **Contact Form**: Functional contact form with validation
- **Newsletter Subscription**: Email subscription in footer
- **Floating Donate Button**: Easy access to donation page

## Project Structure

```
rcs-website/
├── app/
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section
│   ├── Work.tsx            # What We Do section
│   ├── Impact.tsx          # Impact statistics with animated counters
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer with newsletter
└── public/
    └── logo.jpg            # RCS logo

```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
