const moments = [
  {
    icon: '📚',
    title: 'الدراسة',
    desc: 'رفيقك المثالي لساعات المذاكرة والتركيز',
    color: '#4F46E5',
    bg: 'from-indigo-100 to-blue-50',
    border: 'border-indigo-200',
  },
  {
    icon: '🚗',
    title: 'الطلعات',
    desc: 'انتعاش دائم في كل طلعة مع الأصحاب',
    color: '#FF6A00',
    bg: 'from-orange-100 to-amber-50',
    border: 'border-orange-200',
  },
  {
    icon: '🛋️',
    title: 'الجلسات',
    desc: 'تحلى القعدة بنكهات بان سيلا المميزة',
    color: '#059669',
    bg: 'from-emerald-100 to-green-50',
    border: 'border-emerald-200',
  },
  {
    icon: '🎮',
    title: 'الألعاب',
    desc: 'رفيقك وقت اللعب بانتعاش يزيد الحماس',
    color: '#7C3AED',
    bg: 'from-violet-100 to-purple-50',
    border: 'border-violet-200',
  },
  {
    icon: '🌙',
    title: 'الاسترخاء',
    desc: 'لحظة هدوء منعشة بعد يوم طويل',
    color: '#0891B2',
    bg: 'from-cyan-100 to-sky-50',
    border: 'border-cyan-200',
  },
]

export default function Moments() {
  return (
    <section
      id="moments"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #FFF8F0 100%)' }}
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5" style={{ background: '#FF6A00', filter: 'blur(100px)' }} />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-5" style={{ background: '#FFD21A', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="inline-block bg-amber-100 text-amber-600 font-bold text-sm font-arabic px-5 py-2 rounded-full">
            ✦ لحظات بان سيلا ✦
          </span>
        </div>

        <h2 className="section-title text-center mb-4">
          معك بكل <span className="text-gradient">لحظة</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-full mx-auto mb-6" />

        <p className="section-subtitle text-center max-w-xl mx-auto mb-14">
          من أول النهار لآخر الليل، بان سيلا بنكهاتا قريبة من كل لحظة.
        </p>

        {/* Moments grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {moments.map((m, i) => (
            <div
              key={m.title}
              className={`card bg-gradient-to-b ${m.bg} border ${m.border} p-7 text-center group cursor-default`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: `${m.color}18`, border: `2px solid ${m.color}33` }}
              >
                {m.icon}
              </div>

              {/* Title */}
              <h3
                className="font-black text-xl font-arabic mb-3 transition-colors duration-300 group-hover:text-current"
                style={{ color: m.color }}
              >
                {m.title}
              </h3>

              {/* Line */}
              <div
                className="w-8 h-1 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:w-12"
                style={{ background: m.color }}
              />

              {/* Desc */}
              <p className="text-gray-600 text-sm font-arabic leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner strip */}
        <div
          className="mt-16 rounded-3xl overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #FF2E2E, #FF6A00, #FFD21A)' }}
        >
          {/* Bubbles decoration */}
          {[20, 50, 80].map((left, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 rounded-full border-2 border-white/20 bg-white/10"
              style={{
                width: 60 + i * 20,
                height: 60 + i * 20,
                left: `${left}%`,
                animation: `float-bubble ${3 + i}s ease-in-out ${i * 0.5}s infinite`,
              }}
            />
          ))}

          <div className="relative z-10 py-10 px-8 text-center">
            <p className="text-white font-black text-2xl sm:text-3xl font-arabic">
              كل رشفة انتعاش 💧
            </p>
            <p className="text-white/80 mt-2 font-arabic text-lg">
              بان سيلا… لكل مود نكهة
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
