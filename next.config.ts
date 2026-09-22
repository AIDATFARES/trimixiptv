import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Post 1: Best Smart TV IPTV Players
      {
        source: "/blog/best-iptv-players-for-smart-tv-2026",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players-smart-tv",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },

      // Post 2: IPTV Internet Speed Requirements
      {
        source: "/blog/what-internet-speed-do-you-need-for-iptv",
        destination: "/blog/iptv-internet-speed-requirements",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/iptv-internet-speed-requirements",
        permanent: true,
      },

      // Post 3: Fix IPTV Audio Video Sync
      {
        source: "/blog/iptv-audio-video-out-of-sync",
        destination: "/blog/fix-iptv-audio-video-sync",
        permanent: true,
      },
      {
        source: "/blog/iptv-audio-video-sync-fix",
        destination: "/blog/fix-iptv-audio-video-sync",
        permanent: true,
      },

      // Post 4: Fix Slow IPTV Channel Switching
      {
        source: "/blog/iptv-channel-switching-slow",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },
      {
        source: "/blog/fast-iptv-channel-switching-fix",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },

      // Post 5: Watch NFL Live IPTV Guide
      {
        source: "/blog/how-to-watch-nfl-games-live-2026",
        destination: "/blog/watch-nfl-live-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/watch-nfl-games-live-iptv",
        destination: "/blog/watch-nfl-live-iptv-guide",
        permanent: true,
      },

      // Post 6: Watch NBA Live IPTV Guide
      {
        source: "/blog/how-to-watch-nba-games-live-2026",
        destination: "/blog/watch-nba-live-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/watch-nba-games-live-iptv",
        destination: "/blog/watch-nba-live-iptv-guide",
        permanent: true,
      },

      // Post 7: Stream Live Sports Multi-Sport Hub
      {
        source: "/blog/watch-nfl-nba-mlb-nhl-with-iptv-2026",
        destination: "/blog/stream-live-sports-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/stream-nfl-nba-mlb-nhl-iptv",
        destination: "/blog/stream-live-sports-iptv-guide",
        permanent: true,
      },

      // Fallbacks for historically removed articles to relevant active guides
      {
        source: "/blog/how-does-iptv-work",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/how-iptv-works-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-streaming-services-2026",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-streaming-services",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/iptv-keeps-freezing-causes-fixes",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },
      {
        source: "/blog/fix-iptv-freezing-troubleshooting",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },
      {
        source: "/blog/iptv-buffering-after-a-few-minutes",
        destination: "/blog/iptv-internet-speed-requirements",
        permanent: true,
      },
      {
        source: "/blog/iptv-buffering-after-few-minutes-fix",
        destination: "/blog/iptv-internet-speed-requirements",
        permanent: true,
      },
      {
        source: "/blog/iptv-works-on-one-device-but-not-another",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/iptv-works-on-one-device-fix",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/how-to-set-up-iptv-on-smart-tv-2026",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/how-to-setup-iptv-smart-tv",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-cable-tv-2026",
        destination: "/blog/stream-live-sports-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-cable-tv",
        destination: "/blog/stream-live-sports-iptv-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
