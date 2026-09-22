import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trimix IPTV – Frequently Asked Questions | IPTV Setup & Billing",
  description: "Have questions about our premium IPTV service? Find fast answers about setup, channels, payments, and troubleshooting in the comprehensive Trimix IPTV FAQ.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Trimix IPTV – Frequently Asked Questions | IPTV Setup & Billing",
    description: "Have questions about our premium IPTV service? Find fast answers about setup, channels, payments, and troubleshooting.",
    url: "/faq",
    images: [
      {
        url: "/feature-epg-guide-trimix.jpg",
        width: 1200,
        height: 630,
        alt: "Trimix IPTV Frequently Asked Questions & Troubleshooting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimix IPTV – Frequently Asked Questions | IPTV Setup & Billing",
    description: "Have questions about our premium IPTV service? Find fast answers about setup, channels, payments, and troubleshooting.",
    images: [
      {
        url: "/feature-epg-guide-trimix.jpg",
        alt: "Trimix IPTV Frequently Asked Questions & Troubleshooting",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
