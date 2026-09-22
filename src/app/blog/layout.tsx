import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trimix IPTV Blog – IPTV News, Guides & Streaming Tips",
  description: "Stay updated with the latest in 4K streaming technology, new channel additions, setup guides and troubleshooting tips to optimize your Trimix IPTV experience.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Trimix IPTV Blog – IPTV News, Guides & Streaming Tips",
    description: "Stay updated with the latest in 4K streaming technology, new channel additions, setup guides and troubleshooting tips to optimize your Trimix IPTV experience.",
    url: "/blog",
    images: [
      {
        url: "/blog/best-smart-tv-iptv-players.jpg",
        width: 1200,
        height: 630,
        alt: "Trimix IPTV Blog & Streaming Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimix IPTV Blog – IPTV News, Guides & Streaming Tips",
    description: "Stay updated with the latest in 4K streaming technology, new channel additions, setup guides and troubleshooting tips to optimize your Trimix IPTV experience.",
    images: [
      {
        url: "/blog/best-smart-tv-iptv-players.jpg",
        alt: "Trimix IPTV Blog & Streaming Guides",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
