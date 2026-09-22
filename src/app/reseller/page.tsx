import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Trimix IPTV – Build Your IPTV Reseller Business | High-Margin Plans",
  description: "Start your profitable IPTV reseller business today with Trimix IPTV. Enjoy high margins, a powerful management panel, instant setup and flexible credit packages. Get started now!",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "Trimix IPTV – Build Your IPTV Reseller Business | High-Margin Plans",
    description: "Start your profitable IPTV reseller business today with Trimix IPTV. Enjoy high margins, a powerful management panel, instant setup and flexible credit packages.",
    url: "/reseller",
    images: [
      {
        url: "/step-install-setup-trimix.jpg",
        width: 1200,
        height: 630,
        alt: "Trimix IPTV Reseller Program and Management Panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimix IPTV – Build Your IPTV Reseller Business | High-Margin Plans",
    description: "Start your profitable IPTV reseller business today with Trimix IPTV. Enjoy high margins, a powerful management panel, instant setup and flexible credit packages.",
    images: [
      {
        url: "/step-install-setup-trimix.jpg",
        alt: "Trimix IPTV Reseller Program and Management Panel",
      },
    ],
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
