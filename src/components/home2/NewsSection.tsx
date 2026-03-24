import { Link } from "react-router-dom";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";

const newsImages = [news1, news2];

const news = [
  {
    title: "The 5 winter risks that could cost you thousands – and how to prevent them",
    date: "13-11-25",
    desc: "When temperatures drop, the risks to people and property rise. Harsh weather and festive shutdowns create conditions for disruption.",
    tags: ["Advice and Guidance", "Site Security", "Vacant Property"],
  },
  {
    title: "AI, a game changer for modern security operations",
    date: "30-09-25",
    desc: "Artificial intelligence is transforming the security industry with smarter surveillance, predictive analytics, and automated threat detection.",
    tags: ["Technology", "CCTV", "Corporate Security"],
  },
  {
    title: "Lone worker safety: what every employer needs to know",
    date: "30-06-25",
    desc: "Protecting lone workers is a legal obligation and a moral duty. Here's how to ensure your team stays safe when working alone.",
    tags: ["Lone Worker", "Property Inspections", "Evictions"],
  },
  {
    title: "How to secure your construction site against theft",
    date: "30-07-24",
    desc: "Construction site theft costs the UK industry millions each year. Discover proven strategies to protect your assets and materials.",
    tags: ["Site Security", "Construction", "Risk Management"],
  },
];

const NewsSection = () => {
  return (
    <section className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="text-center mb-10">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Latest</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">News & Views</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((item, index) => (
            <div key={item.title} className="bg-card overflow-hidden border border-border hover:shadow-md transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={newsImages[index % newsImages.length]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
