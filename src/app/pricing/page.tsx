import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Trimix IPTV – IPTV Subscription Plans & Pricing | Get Instant Access",
  description: "Choose the perfect premium IPTV subscription plan with Trimix IPTV. Enjoy flexible pricing, 4K streaming, anti-freeze tech and full VOD library. Discover our options and get started!",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Trimix IPTV – IPTV Subscription Plans & Pricing | Get Instant Access",
    description: "Choose the perfect premium IPTV subscription plan with Trimix IPTV. Enjoy flexible pricing, 4K streaming, anti-freeze tech and full VOD library.",
    url: "/pricing",
    images: [
      {
        url: "/step-order-online-trimix.jpg",
        width: 1200,
        height: 630,
        alt: "Trimix IPTV Subscription Plans and Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimix IPTV – IPTV Subscription Plans & Pricing | Get Instant Access",
    description: "Choose the perfect premium IPTV subscription plan with Trimix IPTV. Enjoy flexible pricing, 4K streaming, anti-freeze tech and full VOD library.",
    images: [
      {
        url: "/step-order-online-trimix.jpg",
        alt: "Trimix IPTV Subscription Plans and Pricing",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
