import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trimix IPTV – Live IPTV Channels & VOD | Premium 4K Entertainment",
  description: "Explore over 50,000 live TV channels, premium sports and a massive VOD library with Trimix IPTV. Discover endless entertainment in HD and 4K. Start streaming your favorites today!",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "Trimix IPTV – Live IPTV Channels & VOD | Premium 4K Entertainment",
    description: "Explore over 50,000 live TV channels, premium sports and a massive VOD library with Trimix IPTV. Discover endless entertainment in HD and 4K.",
    url: "/channels",
    images: [
      {
        url: "/feature-channels-vod-trimix.jpg",
        width: 1200,
        height: 630,
        alt: "Trimix IPTV 50,000+ Channels & VOD Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimix IPTV – Live IPTV Channels & VOD | Premium 4K Entertainment",
    description: "Explore over 50,000 live TV channels, premium sports and a massive VOD library with Trimix IPTV.",
    images: [
      {
        url: "/feature-channels-vod-trimix.jpg",
        alt: "Trimix IPTV 50,000+ Channels & VOD Library",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
