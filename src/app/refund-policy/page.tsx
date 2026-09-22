import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trimix IPTV – Refund Policy & Guarantee",
  description: "Read the Trimix IPTV refund and cancellation policy. We strive for 100% customer satisfaction with our premium IPTV service.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  {
    title: "Our Commitment to You",
    content: [
      "At Trimix IPTV, we uphold the standard of our IPTV subscription service. This policy specifies when refunds may be applicable, ensuring that we maintain a transparent and just process for every customer.",
    ],
  },
  {
    title: "Refund Eligibility",
    content: ["You could be entitled to a total or partial refund in the following cases:"],
    items: [
      "Technical Failures: Service is completely non-functional on your compatible device for 72+ consecutive hours due to a fault on our server infrastructure.",
      "Duplicate Payments: Accidental duplicate charge for the same subscription period.",
      "Initial 7 Day Window for new customers: Request within 7 days of first purchase after attempting support-led troubleshooting.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: ["To seek a refund, kindly follow these steps:"],
    items: [
      <>Connect with our support team using our <Link className="font-semibold text-[#00F0FF] hover:text-[#A855F7]" href="/contact">Contact page</Link> or email support@trimixiptv4k.online.</>,
      "Please use the subject: 'Refund Request'.",
      "Please provide your complete name, the email or WhatsApp linked to your subscription, and the purpose of your inquiry.",
    ],
  },
  {
    title: "Sample Refund Request Message",
    content: [
      <>Contact: Send a message via our <Link className="font-semibold text-[#00F0FF] hover:text-[#A855F7]" href="/contact">Contact page</Link></>,
      "Message Title: Refund Request",
      "Hello,",
      "I am writing to ask for a refund regarding my Trimix IPTV subscription.",
      "My Name: [Your Full Name]",
      "My Email: [Your Subscription Email]",
      "Reason for Refund: [Concise explanation of your concern, for example, technical errors, billing duplicates, etc.]",
      "Thank you.",
    ],
  },
  {
    title: "What We Need to Process Your Refund",
    content: [],
    items: [
      "Account email used at checkout",
      "Order/transaction ID",
      "Brief reason and steps already tried with support",
      "Device/app details (e.g., Firestick + TiviMate / IPTV Smarters)",
    ],
  },
  {
    title: "Processing Timeline",
    content: [],
    items: [
      "0–3 business days: Analysis executed by support team",
      "Same day after approval: The refund is initiated back to your original payment method.",
      "5–10 business days: Funds manifest according to your bank or card issuer.",
    ],
    after: "Expect to receive an email or message update at every step. Response times may increase slightly on weekends.",
  },
  {
    title: "Exceptions (When Refunds Are Not Provided)",
    content: ["Refunds will be denied in these outlined cases:"],
    items: [
      <>You are discontent with the <Link className="font-semibold text-[#00F0FF] hover:text-[#A855F7]" href="/channels">channel list</Link> without checking the channels beforehand.</>,
      "Your internet connection speed is too slow or unstable to stream 4K content.",
      "Your actions have breached our Terms of Service, including unauthorized account sharing.",
      "ISP or local network restrictions outside of server control.",
    ],
  },
  {
    title: "How to Avoid Refund Requests",
    content: [],
    items: [
      "Check Compatibility: Confirm your device/app supports M3U or Xtream Codes before purchase.",
      "Stable Internet: Use 25 Mbps+ and 5GHz Wi-Fi or Ethernet for 4K.",
      <>Use Setup Guides: Follow our step-by-step <Link className="font-semibold text-[#00F0FF] hover:text-[#A855F7]" href="/installation">Installation page</Link>.</>,
      <>Ask Support First: Most issues are solved in minutes—please <Link className="font-semibold text-[#00F0FF] hover:text-[#A855F7]" href="/contact">contact support</Link>.</>,
    ],
  },
];

export default function RefundPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <main className="flex-grow px-5 pb-20 pt-12 sm:px-8 md:pt-16 text-format-legal bg-[#060813]">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-white/10 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-[#00F0FF]/35 bg-[#00F0FF]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#00F0FF]">Legal information</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-white">Refund &amp; Money-Back</span>
            <span className="mt-1 block text-[#00F0FF]">Official Policy.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-400">Last adjusted: {currentDate}</p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-7 text-stone-300">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-white">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <div className="mt-4" key={i}>{paragraph}</div>)}
              {section.items && section.items.length > 0 && <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#00F0FF]">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              {section.after && <p className="mt-4">{section.after}</p>}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-white">9. Contact Us</h2>
            <p className="mt-4">If you have any questions regarding our Refund Policy, please contact our <Link className="font-semibold text-[#00F0FF] hover:text-[#A855F7]" href="/contact">support team</Link> or email <span className="text-[#00F0FF] font-semibold">support@trimixiptv4k.online</span>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
