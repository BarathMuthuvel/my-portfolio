import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSansRegular = localFont({
  src: "./fonts/WorkSans-Regular.ttf",
  variable: "--font-work-sans-regular",
  weight: "400",
});

const workSansBold = localFont({
  src: "./fonts/WorkSans-Bold.ttf",
  variable: "--font-work-sans-bold",
  weight: "700",
});

const workSansSemiBold = localFont({
  src: "./fonts/WorkSans-SemiBold.ttf",
  variable: "--font-work-sans-semi-bold",
  weight: "600",
});


const manropeRegular = localFont({

  src: "./fonts/Manrope-Regular.ttf",
  variable: "--font-manrope",
  weight: "400",
});

const manropeBold = localFont({
  src: "./fonts/Manrope-Bold.ttf",
  variable: "--font-manrope-bold",
  weight: "700",
});

const manropeSemiBold = localFont({
  src: "./fonts/Manrope-SemiBold.ttf",
  variable: "--font-manrope-semi-bold",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Barath - Senior Software Engineer & Frontend Specialist",
  description: "Barath - Senior Software Engineer & Frontend Specialist from Bangalore, India. Expert in React.js, Next.js, Node.js, TypeScript with 4+ years experience. Specialized in e-commerce development, B2B marketplaces, responsive web design & SEO optimization. View portfolio showcasing enterprise applications, custom web solutions & scalable projects.",
  keywords: [
    // Primary Role Keywords
    "Senior Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "UI/UX Developer",
    "Web Developer",

    // Technology Keywords
    "React.js Expert",
    "Next.js Specialist",
    "Node.js Developer",
    "Redux Developer",
    "HTML5 CSS3",
    "Tailwind CSS",
    "MongoDB Developer",
    "Express.js",
    "Git Version Control",

    // Industry Keywords
    "E-commerce Development",
    "B2B Marketplace Development",
    "Corporate Website Development",
    "Responsive Web Design",
    "Mobile-First Development",
    "SEO Optimization",
    "Performance Optimization",
    "User Experience Design",

    // Location & Service Keywords
    "Bangalore Software Engineer",
    "Chennai Software Engineer",
    "India Frontend Developer",
    "Remote Developer",
    "Freelance Developer",
    "Web Development Services",
    "Custom Web Applications",
    "API Integration",
    "Database Design",

    // Experience Keywords
    "4+ Years Experience",
    "Enterprise Applications",
    "Scalable Web Solutions",
    "Agile Development",
    "Code Review",
    "Team Leadership",
    "Project Management",

    // Portfolio Keywords
    "Developer Portfolio",
    "Software Engineer Portfolio",
    "React Projects",
    "Web Development Portfolio",
    "Professional Portfolio",
    "Hire Developer",
    "Barath Portfolio"
  ],
  authors: [{ name: "Barath" }],
  creator: "Barath",
  publisher: "Barath",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thebarath.com'),
  alternates: {
    canonical: 'https://thebarath.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code', // TODO: Add your actual Google Search Console verification code when available
  // },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebarath.com',
    siteName: 'Barath Portfolio',
    title: 'Barath - Senior Software Engineer & Frontend Specialist',
    description: 'Barath - Senior Software Engineer from Bangalore, India. Expert in React.js, Next.js, Node.js with 4+ years experience. Specialized in e-commerce, B2B marketplaces & responsive web design. View portfolio of enterprise applications & scalable web solutions.',
    images: [
      {
        url: '/images/bannerperson.png',
        width: 1200,
        height: 630,
        alt: 'Barath - Senior Software Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@your-twitter-handle', // TODO: Add your actual Twitter handle when available
    // creator: '@your-twitter-handle', // TODO: Add your actual Twitter handle when available
    title: 'Barath - Senior Software Engineer & Frontend Specialist',
    description: 'Senior Software Engineer from Bangalore, India. Expert in React.js, Next.js, Node.js with 4+ years experience. Specialized in e-commerce & B2B marketplace development.',
    images: ['/images/bannerperson.png'],
  },
  icons: {
    icon: ['/favicon.ico'],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Barath",
  "jobTitle": "Senior Software Engineer",
  "description": "Experienced Senior Software Engineer specializing in frontend development, React, Next.js, and modern web technologies.",
  "url": "https://thebarath.com/",
  "image": "https://thebarath.com/images/bannerperson.png",
  "sameAs": [
    "https://github.com/BarathMuthuvel",
    "https://linkedin.com/in/barath18",
  ],
  "knowsAbout": [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "React.js",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "MongoDB",
    "Express.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Web Development",
    "UI/UX Design",
    "Responsive Web Design",
    "Mobile-First Development",
    "E-commerce Development",
    "B2B Marketplace Development",
    "SEO Optimization",
    "Performance Optimization",
    "API Integration",
    "Database Design",
    "Agile Development",
    "Software Engineering",
    "Code Review",
    "Team Leadership",
    "Project Management"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Kenshi Labs Consultancy Pvt Ltd",
    "url": "https://kenshilabs.com"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "occupationLocation": {
      "@type": "Place",
      "name": "Bengaluru, India"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressCountry": "India"
  },
  // "alumniOf": {
  //   "@type": "Organization",
  //   "name": "Your University/College" // TODO: Add your educational background when relevant
  // },
  "knowsLanguage": "English",
  "nationality": "Indian"
};

// Website Schema for better SEO
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Barath Portfolio",
  "url": "https://thebarath.com/",
  "description": "Professional portfolio of Barath, Senior Software Engineer specializing in frontend development",
  "author": {
    "@type": "Person",
    "name": "Barath"
  },
  "publisher": {
    "@type": "Person",
    "name": "Barath"
  },
  "inLanguage": "en",
  "isAccessibleForFree": true
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([structuredData, websiteSchema]),
          }}
        />
        {/* Viewport and theme handled by Next.js metadata */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Barath Portfolio" />
        <meta name="application-name" content="Barath Portfolio" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />

        {/* Additional SEO Meta Tags */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />

        {/* Open Graph properties are handled in metadata */}

        {/* Twitter properties are handled in metadata */}

        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Language and Internationalization */}
        <link rel="alternate" hrefLang="en" href="https://thebarath.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://thebarath.com/" />

        {/* Format detection is handled in metadata formatDetection */}

        {/* Dynamic updated time */}
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Mobile and PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${workSansRegular.variable} ${workSansBold.variable} ${workSansSemiBold.variable} ${manropeRegular.variable} ${manropeBold.variable} ${manropeSemiBold.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
