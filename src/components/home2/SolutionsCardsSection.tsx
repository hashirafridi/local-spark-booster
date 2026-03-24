import { Link } from "react-router-dom";
import solution1 from "@/assets/solution-1.jpg";
import solution2 from "@/assets/solution-2.jpg";
import solution3 from "@/assets/solution-3.jpg";
import solution4 from "@/assets/solution-4.jpg";

const solutions = [
  { img: solution1, title: "Site Security Management", desc: "Comprehensive protection for construction sites, industrial estates, and commercial developments." },
  { img: solution2, title: "Corporate & Office Security", desc: "Professional security officers and access control for corporate buildings and business premises." },
  { img: solution3, title: "Property & Facilities Management", desc: "Integrated security solutions for retail parks, shopping centres, and mixed-use developments." },
  { img: solution4, title: "Social Housing", desc: "Dedicated security services for residential estates, housing associations, and community spaces." },
];

const SolutionsCardsSection = () => {
  return (
    <section className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Solutions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              Security solutions{" "}
              <span className="text-primary">built around you</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed self-end">
            We set the standard for comprehensive site and people protection. If you are responsible for the safety or security of your people, we can design a solution from the ground up that will keep your assets protected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item) => (
            <Link
              to="/services"
              key={item.title}
              className="relative rounded-sm overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
                <p className="text-white text-sm text-center leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCardsSection;
