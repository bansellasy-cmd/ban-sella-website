const features = [
  {
    icon: '🌿',
    title: 'حبوب الريحان الطبيعية',
    desc: 'نضيف حبوب الريحان الحقيقية لكل زجاجة لمسة صحية ومميزة.',
  },
  {
    icon: '🍑',
    title: 'نكهات فواكه أصيلة',
    desc: 'كل نكهة مستوحاة من أفضل أنواع الفواكه الطازجة.',
  },
  {
    icon: '❄️',
    title: 'انتعاش في كل لحظة',
    desc: 'مصمم ليمنحك لحظة انتعاش حقيقية في أي وقت وأي مكان.',
  },
  {
    icon: '🎯',
    title: 'مناسب للجميع',
    desc: 'للطلاب، العائلات، وكل من يحب تجربة نكهات مختلفة.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: '#FF6A00', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5" style={{ background: '#FFD21A', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-orange-50 text-orange-500 font-bold text-sm font-arabic px-5 py-2 rounded-full border border-orange-100">
            ✦ من نحن ✦
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title text-center mb-4">
          عن <span className="text-gradient">بان سيلا</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-full mx-auto mb-8" />

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="text-right">
            <p className="section-subtitle text-gray-700 leading-loose text-xl">
              من دمشق بدأت الحكاية، من فكرة إبداعية أرادت أن تصنع فارقًا حقيقيًا في عالم المشروبات في سوريا. لم تكن الفكرة مجرد
              إنتاج مشروب جديد، بل تقديم تجربة أصلية ومختلفة، تنبض بالهوية السورية وتواكب أسلوب الحياة العصري.<br />
              من هنا وُلد بان سيلا، أول مشروب من نوعه في سوريا، ليقدم مفهومًا جديدًا للانتعاش، ويمنح الناس طعمًا مميزًا يرافقهم في
            كل لحظة: في الدراسة، في الطلعات، في القعدات، وفي أجمل الأوقات مع الأصدقاء والعائلة.            </p>

            <div dir="rtl" className="mt-8 flex flex-col gap-4 items-start text-right">
              {[
                { label: 'مشروب فواكه طبيعي ١٠٠٪', color: '#FF6A00' },
                { label: 'بحبوب الريحان الأصلية', color: '#FF2E2E' },
                { label: 'نكهات متعددة تناسب كل ذوق', color: '#FFD21A' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: item.color }}
                  >
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>

                  <span className="text-gray-800 font-arabic font-semibold text-lg text-right">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-l from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-orange-300/40 hover:scale-105 transition-transform duration-300 cursor-pointer font-arabic text-lg"
                onClick={() => document.querySelector('#flavors')?.scrollIntoView({ behavior: 'smooth' })}>
                اكتشف النكهات 🍹
              </div>
            </div>
          </div>

          {/* Logo visual */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #FF6A00, #FFD21A)' }} />
              <img
                src="/assets/logo.png"
                alt="بان سيلا درينك"
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-contain animate-float-product"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(255,106,0,0.3))' }}
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card p-6 text-center hover:border-orange-200 border border-transparent"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)' }}
              >
                {f.icon}
              </div>
              <h3 className="font-black text-lg text-gray-900 font-arabic mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm font-arabic leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
