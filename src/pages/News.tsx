import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Calendar, ChevronRight } from "lucide-react";
import heroBg from "@/assets/service-1.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";

const newsImages = [news1, news2];

const articles = [
  {
    title: "The 5 winter risks that could cost you thousands – and how to prevent them",
    date: "13 Nov 2025",
    desc: "When temperatures drop and the nights draw in, the risks to people and property rise. Harsh weather, festive shutdowns, and shorter days create the perfect conditions for disruption.",
    tags: ["Advice and Guidance", "Site Security", "Vacant Property"],
  },
  {
    title: "AI, a game changer for modern security operations",
    date: "30 Sep 2025",
    desc: "Artificial intelligence is transforming the security industry with smarter surveillance, predictive analytics, and automated threat detection.",
    tags: ["Technology", "CCTV", "Corporate Security"],
  },
  {
    title: "Lone worker safety: what every employer needs to know",
    date: "30 Jun 2025",
    desc: "Protecting lone workers is a legal obligation and a moral duty. Here's how to ensure your team stays safe when working alone.",
    tags: ["Lone Worker", "Property Inspections", "Evictions"],
  },
  {
    title: "How to secure your construction site against theft",
    date: "30 Jul 2024",
    desc: "Construction site theft costs the UK industry millions each year. Discover proven strategies to protect your assets and materials.",
    tags: ["Site Security", "Construction", "Risk Management"],
  },
  {
    title: "Why retail security is more important than ever",
    date: "15 May 2024",
    desc: "Shoplifting and retail crime are on the rise. Learn how professional security officers can protect your store, staff, and customers.",
    tags: ["Retail Security", "Loss Prevention"],
  },
  {
    title: "The role of CCTV in modern security strategies",
    date: "10 Mar 2024",
    desc: "CCTV technology has evolved rapidly. Discover how modern surveillance systems integrate with manned guarding for comprehensive protection.",
    tags: ["CCTV", "Technology", "Corporate Security"],
  },
];

const categories = [
  "Advice and Guidance",
  "CCTV",
  "Construction",
  "Corporate Security",
  "Evictions",
  "Lone Worker",
  "Loss Prevention",
  "Property Inspections",
  "Retail Security",
  "Risk Management",
  "Site Security",
  "Technology",
  "Vacant Property",
];

const recentPosts = articles.slice(0, 4);

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="News" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">News</h1>
        </div>
      </section>

      {/* NEWS CONTENT */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* LEFT - Articles */}
            <div className="flex-1">
              <div className="space-y-6">
                {filtered.map((article, index) => (
                  <div
                    key={article.title}
                    className="border border-border rounded-sm overflow-hidden bg-card hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-56 shrink-0 overflow-hidden">
                        <img
                          src={newsImages[index % newsImages.length]}
                          alt={article.title}
                          className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 flex-1">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </div>
                        <h3 className="text-foreground font-bold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                          {article.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium cursor-pointer hover:gap-2 transition-all">
                          Read More <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {filtered.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg font-medium mb-1">No articles found</p>
                    <p className="text-sm">Try a different search term.</p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT - Sidebar */}
            <div className="w-full lg:w-72 shrink-0 space-y-6">
              {/* Search */}
              <div className="border border-border rounded-sm bg-card p-4">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-3">Search</h4>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-4 pr-10 py-2.5 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Categories */}
              <div className="border border-border rounded-sm bg-card p-4">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-3">Categories</h4>
                <ul className="space-y-1.5">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setSearchQuery(cat)}
                        className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-sm transition-colors cursor-pointer"
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="border border-border rounded-sm bg-card p-4">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-3">Recent Posts</h4>
                <ul className="space-y-3">
                  {recentPosts.map((post) => (
                    <li key={post.title} className="flex items-start gap-3 group cursor-pointer">
                      <img
                        src={newsImages[0]}
                        alt={post.title}
                        className="w-14 h-14 object-cover rounded-sm shrink-0"
                      />
                      <div>
                        <p className="text-foreground text-xs font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </p>
                        <span className="text-muted-foreground text-xs mt-1 block">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATION + CTA */}
      <section className="bg-secondary">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Accredited</span>
          <h2 className="text-xl md:text-2xl font-bold text-white mt-3 mb-4">
            Approved Contractor of Security Guarding, Door Supervisor, Keyholding
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Trust Vigilant as Your Security Services Company
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to enhance your security arrangements? Contact us to speak with a consultant about how our security services can protect your people, property, and peace of mind.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity text-sm"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TRUSTED PARTNERS LOGOS */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <p className="text-center text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-8">
            Trusted Partners To
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-20 items-center">
              {[...Array(4)].flatMap((_, setIndex) =>
                [partnerLogo1, partnerLogo2, partnerAchilles, partnerIso, partnerSafe].map((logo, i) => (
                  <img
                    key={`${setIndex}-${i}`}
                    src={logo}
                    alt="Partner logo"
                    className="shrink-0 h-28 md:h-36 w-auto object-contain opacity-100 transition-opacity"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
