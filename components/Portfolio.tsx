import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "FinTrack Dashboard",
    category: "SaaS · Full-Stack",
    description:
      "A real-time financial analytics dashboard for SMEs with multi-currency support, automated reports, and role-based access control.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    image: "https://cdn.dribbble.com/userupload/10907753/file/original-a4161ef76b9d0367b8e0bd415268a8d5.png?resize=1600x1200",
    link: "#",
  },
  {
    title: "ShopNest E-Commerce",
    category: "E-Commerce · Frontend",
    description:
      "A blazing-fast headless e-commerce storefront integrated with Stripe payments, inventory management, and a custom CMS.",
    tech: ["React", "Tailwind CSS", "Stripe", "Sanity"],
    image: "https://s3-alpha.figma.com/hub/file/2153365206291664407/6ccc3e6e-592e-4f7f-8ac4-9988a79a3df7-cover.png",
    link: "#",
  },
  {
    title: "MediConnect Platform",
    category: "HealthTech · Full-Stack",
    description:
      "A telemedicine platform connecting patients with doctors via video consultations, appointment scheduling, and secure health records.",
    tech: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
    image: "https://www.sculptsoft.com/wp-content/uploads/2025/09/mediconnect_saas_based_healthcare_platform_card-1.webp",
    link: "#",
  },
  {
    title: "TaskFlow Pro",
    category: "Productivity · SaaS",
    description:
      "A collaborative project management tool with Kanban boards, time tracking, Slack integration, and AI-powered task suggestions.",
    tech: ["React", "GraphQL", "Redis", "OpenAI"],
    image: "https://dev.taskflowpro.com/wp-content/uploads/2022/01/new-2-1-1.png",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide mb-4">
            My Work
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of projects I&apos;ve built for clients and as personal ventures — each one
            solving a real-world problem with thoughtful engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow bg-white"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-indigo-600 font-semibold text-sm hover:gap-2 transition-all"
                >
                  View Case Study <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
