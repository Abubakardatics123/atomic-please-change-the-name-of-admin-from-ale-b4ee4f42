import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, FinTrack Inc.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/25/Minister_Mitchell_July_20_headshot_DSC6710a.jpg",
    rating: 5,
    text: "Asad delivered our dashboard ahead of schedule and exceeded every expectation. His attention to detail and proactive communication made the entire process seamless. Highly recommended!",
  },
  {
    name: "James Thornton",
    role: "CTO, ShopNest",
    avatar: "https://resizing.flixster.com/-WD7pTsWmgAwZfQPlIUIa8lVqrY=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/167391_v9_ba.jpg",
    rating: 5,
    text: "Working with Asad was a game-changer for our e-commerce platform. He brought both technical depth and creative problem-solving that our team lacked. We will definitely work together again.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Founder, MediConnect",
    avatar: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3623905594098115014",
    rating: 5,
    text: "Asad built our telemedicine platform from scratch in just 3 months. The code quality is outstanding and the UX is exactly what our patients needed. A true professional.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-indigo-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500 text-indigo-100 text-xs font-semibold tracking-wide mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl font-extrabold text-white mb-4">What Clients Say</h2>
          <p className="text-indigo-200 max-w-xl mx-auto">
            I take pride in building long-term relationships with my clients. Here&apos;s what some of
            them have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-100"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
