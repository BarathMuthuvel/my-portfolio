# My Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact Form Setup

This portfolio includes a functional contact form that can be configured in several ways:

### Option 1: EmailJS (Currently Implemented)

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an Email Service:**
   - Go to Email Services
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account
3. **Create an Email Template:**
   - Go to Email Templates
   - Create a new template
   - Use variables: `{{name}}`, `{{email}}`, `{{message}}`
4. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key
5. **Update the Contact component:**
   - Replace `YOUR_SERVICE_ID` with your actual service ID
   - Replace `YOUR_TEMPLATE_ID` with your actual template ID
   - Replace `YOUR_PUBLIC_KEY` with your actual public key

### Option 2: Formspree (Alternative)

1. **Sign up at [Formspree](https://formspree.io/)**
2. **Create a new form**
3. **Replace the form action with your Formspree endpoint**

### Option 3: Netlify Forms

If deploying to Netlify, add `data-netlify="true"` to your form tag.

### Option 4: Google Forms

1. Create a Google Form
2. Use an iframe to embed it
3. Or redirect users to the form URL

## Features

- Responsive design
- Contact form with validation
- Social media links
- Professional styling with Tailwind CSS
- TypeScript support

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
