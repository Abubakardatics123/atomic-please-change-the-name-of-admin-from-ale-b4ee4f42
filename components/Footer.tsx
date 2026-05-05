import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#home" className="text-2xl font-bold text-white tracking-tight">
            Asad<span className="text-indigo-400">Rana</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:asad@example.com"
              className="hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Asad Rana. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400 mx-1" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
