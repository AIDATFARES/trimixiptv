import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trimix IPTV – Contact Support | Fast & Reliable Help",
  description: "Need help with your IPTV subscription? Contact the Trimix IPTV support team via email or WhatsApp. Fast response times and expert technical assistance. Reach out today!",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Trimix IPTV – Contact Support | Fast & Reliable Help",
    description: "Need help with your IPTV subscription? Contact the Trimix IPTV support team via email or WhatsApp.",
    url: "/contact",
    images: [
      {
        url: "/step-order-online-trimix.jpg",
        width: 1200,
        height: 630,
        alt: "Trimix IPTV 24/7 Customer Support and Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimix IPTV – Contact Support | Fast & Reliable Help",
    description: "Need help with your IPTV subscription? Contact the Trimix IPTV support team via email or WhatsApp.",
    images: [
      {
        url: "/step-order-online-trimix.jpg",
        alt: "Trimix IPTV 24/7 Customer Support and Assistance",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
