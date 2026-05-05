import { Check } from "lucide-react";

const skills = [
  "React & Next.js",
  "TypeScript",
  "Node.js & Express",
  "PostgreSQL & MongoDB",
  "Tailwind CSS",
  "Docker & CI/CD",
  "AWS & Vercel",
  "Figma & UI Design",
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEE0RJA9VbeHg/profile-displayphoto-shrink_200_200/B56ZcZlSUrHwAc-/0/1748480896600?e=2147483647&v=beta&t=EnHxcjwP0LaLfLpYHOtOA5ArFcmQY3lj1dsD8U2By-I"
                alt="Asad Rana at work"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-indigo-50 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-indigo-600">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Passionate about building great software
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m Asad Rana, a full-stack developer based in Lahore, Pakistan. I specialize in
              building scalable web applications with modern technologies. My journey started with a
              Computer Science degree and evolved into a career working with startups and enterprises
              across the globe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              When I&apos;m not coding, I&apos;m mentoring junior developers, contributing to open-source
              projects, or exploring the latest trends in AI and cloud infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Check size={16} className="text-indigo-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <a
              href="/resume-asad-rana.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
