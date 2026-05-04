import { socialLinks } from '../data/links'

const contactButtons = [
  {
    label: 'راسلنا على واتساب',
    href: socialLinks.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    bg: 'from-green-500 to-emerald-600',
    shadow: 'shadow-green-300/40',
    hover: 'hover:shadow-green-400/60',
  },
  {
    label: 'تابعنا على فيسبوك',
    href: socialLinks.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    bg: 'from-blue-600 to-blue-700',
    shadow: 'shadow-blue-300/40',
    hover: 'hover:shadow-blue-400/60',
  },
  {
    label: 'تابعنا على إنستغرام',
    href: socialLinks.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    bg: 'from-pink-500 via-red-500 to-yellow-500',
    shadow: 'shadow-pink-300/40',
    hover: 'hover:shadow-pink-400/60',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2D1200 30%, #4A1F0F 60%, #6B2D00 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: '#FF6A00', filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15" style={{ background: '#FFD21A', filter: 'blur(100px)' }} />

        {/* Bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10 bg-white/5"
            style={{
              width: 30 + i * 15,
              height: 30 + i * 15,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animation: `float-bubble ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden rotate-180">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block border border-orange-400/40 text-orange-300 font-bold text-sm font-arabic px-5 py-2 rounded-full bg-orange-500/10">
            ✦ تواصل معنا ✦
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-arabic leading-tight mb-4">
          حابب تعرف{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FF6A00, #FFD21A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            كل جديد؟
          </span>
        </h2>

        <div className="w-20 h-1.5 rounded-full mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, #FF6A00, #FFD21A)' }} />

        <p className="text-white/70 text-lg sm:text-xl font-arabic leading-relaxed max-w-lg mx-auto mb-12">
          تابعنا على صفحاتنا وتواصل معنا مباشرة لمعرفة أحدث النكهات والعروض.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {contactButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 bg-gradient-to-l ${btn.bg} text-white font-bold py-4 px-8 rounded-full text-base font-arabic shadow-xl ${btn.shadow} ${btn.hover} hover:scale-105 transition-all duration-300`}
            >
              {btn.icon}
              {btn.label}
            </a>
          ))}
        </div>

        {/* Tagline */}
        <div className="border-t border-white/10 pt-10 mt-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-orange-400 text-2xl">💧</span>
            <span className="text-white/80 font-arabic text-xl font-bold">انتعاشك اليومي من أول رشفة</span>
            <span className="text-orange-400 text-2xl">💧</span>
          </div>
          <p className="text-white/50 font-arabic text-sm">
            بان سيلا… لكل مود نكهة
          </p>
        </div>
      </div>
    </section>
  )
}
