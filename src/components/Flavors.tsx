import { useState } from 'react'
import { flavors, type Flavor } from '../data/flavors'

function FlavorCard({ flavor }: { flavor: Flavor }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flavor-card rounded-3xl overflow-hidden cursor-pointer group relative"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${flavor.color}ee, ${flavor.color}cc)`
          : `linear-gradient(135deg, ${flavor.color}22, ${flavor.color}11)`,
        border: `2px solid ${flavor.color}44`,
        boxShadow: hovered ? `0 25px 50px -10px ${flavor.color}55` : '0 4px 20px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top: image or emoji */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${flavor.color}33, ${flavor.color}11)` }}
      >
        {flavor.image ? (
          <img
            src={flavor.image}
            alt={flavor.name}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="text-7xl transition-transform duration-300 group-hover:scale-125">{flavor.emoji}</span>
          </div>
        )}

        {/* Overlay on hover */}
        {hovered && (
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(circle at center, white, transparent)` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 text-right">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">{flavor.emoji}</span>
          <h3
            className="text-xl font-black font-arabic transition-colors duration-300"
            style={{ color: hovered ? 'white' : flavor.color }}
          >
            {flavor.name}
          </h3>
        </div>
        <p
          className="text-sm font-arabic leading-relaxed transition-colors duration-300"
          style={{ color: hovered ? 'rgba(255,255,255,0.85)' : '#6B7280' }}
        >
          {flavor.description}
        </p>

        {/* Flavor name en */}
        <div className="mt-3 flex justify-end">
          <span
            className="text-xs font-english font-semibold px-3 py-1 rounded-full transition-all duration-300"
            style={{
              background: hovered ? 'rgba(255,255,255,0.2)' : `${flavor.color}22`,
              color: hovered ? 'white' : flavor.color,
              border: `1px solid ${hovered ? 'rgba(255,255,255,0.3)' : flavor.color + '44'}`,
            }}
          >
            {flavor.nameEn}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Flavors() {
  return (
    <section
      id="flavors"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FFF3E0 50%, #FFF8F0 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full opacity-10" style={{ background: '#FF6A00', filter: 'blur(60px)' }} />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-10" style={{ background: '#FFD21A', filter: 'blur(70px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-orange-100 text-orange-500 font-bold text-sm font-arabic px-5 py-2 rounded-full">
            ✦ اختار نكهتك ✦
          </span>
        </div>

        <h2 className="section-title text-center mb-4">
          نكهات تناسب <span className="text-gradient">كل مود</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-full mx-auto mb-6" />

        <p className="section-subtitle text-center max-w-2xl mx-auto mb-14">
          جرب أطيب النكهات، من الفراولة الحمراء إلى الكيوي المنعش، ومن المانجو الاستوائي إلى الأناناس الصيفي.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {flavors.map((flavor, i) => (
            <div
              key={flavor.id}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <FlavorCard flavor={flavor} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className="inline-flex items-center gap-3 text-white font-bold py-4 px-12 rounded-full text-lg font-arabic cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #FF6A00, #FF2E2E)' }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>تابعنا لتعرف كل جديد</span>
            <span className="text-2xl">🍹</span>
          </div>
        </div>
      </div>
    </section>
  )
}
