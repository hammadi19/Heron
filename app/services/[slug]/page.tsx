import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { Footer, PageHero } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

const servicePages = {
  "web-design-services": {
    eyebrow: "Web Design Services",
    title: "Websites that build trust, perform fast, and convert.",
    intro: "Your website is often the first impression customers have of your business, so it needs to do more than just look good. It should build trust, showcase your brand, and convert visitors into customers.",
    sections: [
      "Whether you are starting from scratch or refreshing an existing website, we design and develop modern, responsive websites tailored to your business goals and built for a seamless experience across desktop, tablet, and mobile devices.",
      "From complete website development and redesigns to secure web hosting and ongoing support, we provide everything you need to establish and maintain a professional online presence. Every website is designed with performance, user experience, and search engine best practices in mind.",
      "Already have a website and just need a redesign? We regularly modernise existing websites without requiring you to start again. We can work with your existing setup, transform appearance and performance, then hand everything back so you remain in complete control.",
      "A great website deserves reliable, secure, and high-performing hosting. Our hosting services keep your website running smoothly with fast loading speeds, strong security, backups, monitoring, updates, migrations, and ongoing maintenance.",
    ],
    bullets: ["Website design", "Website redesign", "Responsive development", "Secure web hosting", "Ongoing support", "Performance and SEO foundations"],
  },
  "social-media-advertising": {
    eyebrow: "Social Media Advertising",
    title: "Reach the right audience at the right time.",
    intro: "Social media is one of the most powerful ways to reach new customers, build brand awareness, and generate high-quality leads.",
    sections: [
      "We create targeted social media advertising campaigns across Facebook, Instagram, LinkedIn, and TikTok, helping your business connect with the right audience at the right time.",
      "Every campaign is tailored to your objectives, whether that is increasing website traffic, generating enquiries, promoting products, or growing your brand.",
    ],
    bullets: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads", "Lead generation", "Campaign creative"],
  },
  "seo-aeo": {
    eyebrow: "SEO & AEO",
    title: "Be visible wherever your customers are searching.",
    intro: "Being found online is no longer just about ranking highly on Google. It is about being visible wherever your customers are searching.",
    sections: [
      "Traditional SEO remains the foundation of online visibility, but search is evolving. More people now ask AI platforms such as ChatGPT, Gemini, Copilot, and Google's AI-powered search experiences for instant answers.",
      "Our approach combines proven SEO techniques with Answer Engine Optimisation strategies so your business can rank well in Google while increasing the likelihood of being referenced by AI assistants.",
      "Today's customers do not just search Google; they ask AI. We help make sure your business is visible in both.",
    ],
    bullets: ["Technical SEO", "On-page SEO", "Local SEO", "Schema markup", "AI search visibility", "Content authority"],
  },
  ppc: {
    eyebrow: "PPC",
    title: "Fast, focused campaigns for high-intent demand.",
    intro: "When you need results quickly, Pay-Per-Click advertising is one of the fastest and most effective ways to put your business in front of potential customers.",
    sections: [
      "We create and manage targeted advertising campaigns across Google Ads, Microsoft Ads, and social media, ensuring your adverts are seen by the people most likely to be interested in your products or services.",
      "Our PPC management covers keyword research, audience targeting, advert creation, budget management, bid optimisation, and ongoing performance analysis. We continuously refine campaigns to reduce wasted spend and generate high-quality leads.",
    ],
    bullets: ["Google Ads", "Microsoft Ads", "Keyword research", "Audience targeting", "Bid optimisation", "Performance reporting"],
  },
  youtube: {
    eyebrow: "YouTube",
    title: "Video strategy and advertising that captures attention.",
    intro: "With billions of videos watched every day, YouTube gives businesses a powerful way to build awareness and reach customers through engaging visual content.",
    sections: [
      "Whether you want to promote products, generate leads, increase website traffic, or grow your brand, we create targeted YouTube advertising campaigns that place your message in front of the right audience.",
      "We also help businesses create a professional video content strategy, from promotional videos and product demonstrations to customer testimonials, educational content, and brand storytelling.",
    ],
    bullets: ["YouTube Ads", "Video campaign planning", "Channel strategy", "Promotional content", "Educational content", "Brand storytelling"],
  },
  "customised-digital-solutions": {
    eyebrow: "Customised Digital Solutions",
    title: "Bespoke online tools built around your business.",
    intro: "If you can imagine it, we can probably build it. Not every business fits neatly into an off-the-shelf solution.",
    sections: [
      "Sometimes the way you work is unique, your customers need something different, or the software you need simply does not exist. That is where Heron comes in.",
      "We can design and build customised booking systems, e-commerce platforms, customer portals, payment solutions, AI tools, and automated workflows around the way your business actually works.",
    ],
    bullets: ["Booking systems", "Customer portals", "Payment integrations", "AI chatbots", "Workflow automation", "Bespoke integrations"],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages[slug as keyof typeof servicePages];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow={service.eyebrow} title={service.title} copy={service.intro} />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-6">
            <h2 className="text-2xl font-black">What we cover</h2>
            <div className="mt-5 grid gap-3">
              {service.bullets.map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-bold text-white/72">
                  <Check className="size-4 shrink-0 text-[#7ce8d9]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {service.sections.map((copy) => (
              <p key={copy} className="rounded-2xl border border-white/10 bg-white/6 p-6 text-base leading-8 text-white/66">
                {copy}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 text-center sm:px-8 sm:pb-16">
        <h2 className="mx-auto max-w-3xl text-4xl font-light leading-tight">
          Want Heron to help with {service.eyebrow.toLowerCase()}?
        </h2>
        <Button asChild className="mt-6 h-12 w-full rounded-xl bg-white px-8 font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto">
          <Link href="/contact-us">
            Contact Us
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>

      <Footer />
    </main>
  );
}
