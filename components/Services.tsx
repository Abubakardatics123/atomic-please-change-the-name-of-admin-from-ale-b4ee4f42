import { Layout, FileCode, Terminal, Activity, Star, Settings } from "lucide-react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
};

const services: Service[] = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces designed in Figma with a focus on usability, accessibility, and delightful user experiences.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: FileCode,
    title: "Frontend Development",
    description:
      "High-performance React and Next.js applications with clean code, responsive layouts, and smooth animations.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Terminal,
    title: "Backend Development",
    description:
      "Robust REST and GraphQL APIs built with Node.js, Express, and PostgreSQL — secure, scalable, and well-documented.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Activity,
    title: "Performance Optimization",
    description:
      "Auditing and refactoring existing apps to achieve top Lighthouse scores, faster load times, and better Core Web Vitals.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Settings,
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, Docker containerization, and cloud deployments on AWS and Vercel for zero-downtime releases.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Star,
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology stack selection, and strategic guidance to help your team ship faster and smarter.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide mb-4">
            What I Do
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From design to deployment, I provide end-to-end development services tailored to your
            business goals and technical requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-5 " + s.iconBg + " " + s.iconColor}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
