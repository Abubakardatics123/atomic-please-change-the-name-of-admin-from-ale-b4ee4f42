import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16 relative"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide mb-4">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-indigo-600">Asad Rana</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-2">
            Full-Stack Developer &amp; UI/UX Designer
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
            I craft beautiful, performant web applications that solve real problems. With 6+ years of
            experience, I turn complex ideas into elegant digital products — from concept to
            deployment.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:asad@example.com"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063830508484"
                alt="Asad Rana"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-indigo-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
