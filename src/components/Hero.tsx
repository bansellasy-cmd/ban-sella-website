export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #CC1A00 0%, #FF4500 25%, #FF6A00 55%, #FFB800 80%, #FFD21A 100%)',
      }}
    >
      {/* Decorative bubbles */}
      {[
        { size: 80, top: '10%', right: '5%', delay: '0s', opacity: 0.15 },
        { size: 50, top: '20%', left: '8%', delay: '1s', opacity: 0.2 },
        { size: 120, bottom: '15%', right: '10%', delay: '0.5s', opacity: 0.1 },
        { size: 40, top: '55%', left: '3%', delay: '1.5s', opacity: 0.25 },
        { size: 65, top: '40%', right: '22%', delay: '2s', opacity: 0.15 },
        { size: 30, bottom: '30%', left: '20%', delay: '0.8s', opacity: 0.2 },
        { size: 90, top: '5%', left: '35%', delay: '1.2s', opacity: 0.1 },
        { size: 45, bottom: '10%', left: '45%', delay: '2.2s', opacity: 0.2 },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm"
          style={{
            width: b.size,
            height: b.size,
            top: (b as any).top,
            bottom: (b as any).bottom,
            right: (b as any).right,
            left: (b as any).left,
            opacity: b.opacity,
            animation: `float-bubble ${3 + i * 0.4}s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}

      {/* Shine rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left h-px"
            style={{
              width: '80vw',
              transform: `rotate(${deg}deg)`,
              background: 'linear-gradient(90deg, rgba(255,255,255,0.12), transparent)',
            }}
          />
        ))}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Text content - RTL so this shows on right */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6 animate-fade-up">
              <span className="text-yellow-200 font-arabic text-sm font-bold">✦ عصير بذور الريحان الأول من نوعه في سوريا ✦</span>
            </div>

            {/* Main headline */}
            <h1 className="animate-slide-right delay-100 overflow-visible pb-4">
              <span className="block text-5xl sm:text-6xl md:text-7xl font-black text-white font-arabic leading-[1.25] mb-1 overflow-visible">
                بان سيلا…
              </span>

              <span
                className="block text-5xl sm:text-6xl md:text-7xl font-black leading-[1.28] pb-3 overflow-visible"
                style={{
                  background: 'linear-gradient(135deg, #FFD21A, #FFED80, #FFD21A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 8px rgba(255,210,26,0.5))',
                }}
              >
                لكل مود نكهة
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-white/90 text-lg sm:text-xl font-arabic leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-up delay-300">
              مشروب فواكه منعش بحبوب الريحان، بنكهات مميزة ترافقك بالدراسة، بالطلعات، وبأحلى المناسبات.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-fade-up delay-500">
              <button
                onClick={() => handleScroll('#flavors')}
                className="btn-shimmer text-white font-bold py-4 px-10 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform duration-300 font-arabic"
              >
                 🍹اكتشف النكهات
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-outline font-arabic text-lg"
              >
                تابعنا لتعرف كل جديد
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 justify-center lg:justify-end animate-fade-up delay-600">
              {[
                { num: '12+', label: 'نكهة مميزة' },
                { num: '100%', label: 'طبيعي' },
                { num: '∞', label: 'انتعاش' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-yellow-200 font-arabic">{stat.num}</div>
                  <div className="text-white/80 text-sm font-arabic mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product visual */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            {/* Glow behind banner */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, #FFD21A 0%, transparent 70%)' }}
            />

            {/* Main banner image */}
            <div
              className="relative w-full max-w-2xl animate-float-product"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.3))' }}
            >
              <img
                src="/assets/banner.png"
                alt="بان سيلا درينك - نكهات متعددة"
                className="w-full h-auto object-contain rounded-3xl"
                style={{ filter: 'brightness(1.05) saturate(1.1)' }}
              />
            </div>

            {/* Floating fruit emoji decorations — 4 total. */}
            {/* 🥭 Mango added above 🥝 Kiwi as requested. */}
            <div className="absolute top-8 left-4 text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>🍓</div>
            <div className="absolute bottom-28 right-4 text-4xl animate-bounce" style={{ animationDelay: '0.55s' }}>🥭</div>
            <div className="absolute bottom-16 right-4 text-3xl animate-bounce" style={{ animationDelay: '0.8s' }}>🥝</div>
            <div className="absolute top-1/2 left-0 text-3xl animate-bounce" style={{ animationDelay: '1.3s' }}>🍊</div>
          </div>
        </div>
      </div>
    </section>
  )
}
