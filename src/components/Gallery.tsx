// Gallery section
//   - Section header (badge + title + underline) sourced from FIRST design.
//   - Card layout (4 lifestyle images, 2x2 grid with two large cards) sourced from SECOND design.
//   - Card image styling, hover zoom, dark→orange overlay, and rising caption sourced from SECOND design.
//   - Uses the 4 lifestyle images from /public/assets.

const galleryItems = [
  {
    src: '/assets/lifestyle-orange.png',
    alt: 'بان سيلا برتقال في حديقة زجاجية مليئة بضوء الشمس',
    flavor: '🍊 برتقال',
    title: 'انتعاش بضو الشمس',
    caption: 'نكهة منعشة بتحمل جو دافي وحيوي بكل رشفة',
    large: true,
  },
  {
    src: '/assets/lifestyle-kiwi.jpg',
    alt: 'بان سيلا كيوي في بيئة طبيعية تحت الماء',
    flavor: '🥝 كيوي',
    title: 'نكهة جريئة بتلفت الانتباه',
    caption: 'نكهة حادة ومميزة للي بيحبوا شيء مختلف ومليان شخصية',
    large: false,
  },
  {
    src: '/assets/lifestyle-peach.png',
    alt: 'بان سيلا خوخ في جلسة ليلية رومانسية مع الورود',
    flavor: '🍑 خوخ',
    title: ' جلسة مسائية بطابع ناعم',
    caption: 'نكهة هادئة ولطيفة بتكمل أجواء الراحة',
    large: false,
  },
  {
    src: '/assets/lifestyle-mango.png',
    alt: 'بان سيلا مانجو كورال بعرض درامي مميز',
    flavor: '🥭 مانجو كورال',
    title: 'طعم منعش وغني',
    caption: 'تجربة خفيفة ومميزة لعشاق الطعم المختلف',
    large: true,
  },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #FFF8F0 100%)' }}
    >
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5" style={{ background: '#FF6A00', filter: 'blur(100px)' }} />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-5" style={{ background: '#FFD21A', filter: 'blur(100px)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ===== Section header — FIRST DESIGN STYLE ===== */}
        <div className="text-center mb-4">
          <span className="inline-block bg-amber-100 text-amber-600 font-bold text-sm font-arabic px-5 py-2 rounded-full">
            ✦ معرض بان سيلا ✦
          </span>
        </div>

        <h2 className="section-title text-center mb-4">
          صور من عالم <span className="text-gradient">بان سيلا</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-full mx-auto mb-6" />

        <p className="section-subtitle text-center max-w-xl mx-auto mb-14">
          كل صورة بتحكي قصة مختلفة… وانتعاش حقيقي.
        </p>

        {/* ===== Cards — SECOND DESIGN LAYOUT (2-col grid, large + small + small + large) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`life-card relative rounded-3xl overflow-hidden cursor-default group ${
                item.large ? 'aspect-[3/2]' : 'aspect-[4/3]'
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Image with hover zoom (second design behavior) */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.background = `linear-gradient(135deg, #FF6A00, #FFD21A)`
                  }
                }}
              />

              {/* Dark gradient overlay → shifts to orange tint on hover (second design) */}
              <div
                className="absolute inset-0 transition-all duration-500 flex items-end p-6 sm:p-7"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(255,106,0,0.78) 0%, rgba(0,0,0,0.1) 65%, transparent 100%)',
                  }}
                />

                {/* Caption content (rises slightly on hover, second design behavior) */}
                <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Flavor pill — gold-tinted on dark backdrop, like second design */}
                  <span
                    className="inline-block text-xs sm:text-sm font-extrabold font-arabic px-3.5 py-1 rounded-full backdrop-blur-sm mb-2"
                    style={{
                      color: '#FFD21A',
                      background: 'rgba(0,0,0,0.35)',
                    }}
                  >
                    {item.flavor}
                  </span>

                  <h3 className="text-white font-black text-xl sm:text-2xl font-arabic leading-tight mb-1 drop-shadow">
                    {item.title}
                  </h3>
                  <p className="text-white/85 text-sm sm:text-base font-arabic leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
