export interface Flavor {
  id: string
  name: string
  nameEn: string
  description: string
  emoji: string
  color: string
  gradient: string
  textColor: string
  image?: string
}

// 12 flavors total. Card design follows the first design.
// Flavor list completeness sourced from the second design.
// All images come from /public/assets (the new asset set).
export const flavors: Flavor[] = [
  {
    id: 'strawberry',
    name: 'فراولة',
    nameEn: 'Strawberry',
    description: 'نكهة فواكه حمراء منعشة بطعم غني وحيوي.',
    emoji: '🍓',
    color: '#E8003D',
    gradient: 'from-red-500 to-rose-600',
    textColor: 'text-white',
    image: '/assets/product-strawberry.png',
  },
  {
    id: 'kiwi',
    name: 'كيوي',
    nameEn: 'Kiwi',
    description: 'انتعاش أخضر بطعم فريش ومميز.',
    emoji: '🥝',
    color: '#3D8B37',
    gradient: 'from-green-500 to-emerald-600',
    textColor: 'text-white',
    image: '/assets/product-kiwi.png',
  },
  {
    id: 'orange',
    name: 'برتقال',
    nameEn: 'Orange',
    description: 'طعم حمضي منعش يفتح يومك بطاقة.',
    emoji: '🍊',
    color: '#FF6A00',
    gradient: 'from-orange-500 to-amber-500',
    textColor: 'text-white',
    image: '/assets/product-orange.png',
  },
  {
    id: 'mango',
    name: 'مانجو',
    nameEn: 'Mango',
    description: 'طعم استوائي حلو يناسب كل الأوقات.',
    emoji: '🥭',
    color: '#F5A623',
    gradient: 'from-yellow-400 to-amber-500',
    textColor: 'text-white',
    image: '/assets/product-mango.png',
  },
  {
    id: 'pineapple',
    name: 'أناناس',
    nameEn: 'Pineapple',
    description: 'نكهة صيفية مشرقة ومنعشة.',
    emoji: '🍍',
    color: '#C8B800',
    gradient: 'from-yellow-300 to-lime-400',
    textColor: 'text-white',
    image: '/assets/product-pineapple.png',
  },
  {
    id: 'mulberry',
    name: 'توت',
    nameEn: 'Mulberry',
    description: 'مذاق غني ولون جريء لمحبي النكهات القوية.',
    emoji: '🫐',
    color: '#8B1A8B',
    gradient: 'from-purple-600 to-violet-700',
    textColor: 'text-white',
    image: '/assets/product-mulberry.png',
  },
  {
    id: 'peach',
    name: 'خوخ',
    nameEn: 'Peach',
    description: 'نعومة الخوخ بنكهة خفيفة ومحببة.',
    emoji: '🍑',
    color: '#E8711A',
    gradient: 'from-orange-400 to-rose-400',
    textColor: 'text-white',
    image: '/assets/product-peach.png',
  },
  {
    id: 'mixfruit',
    name: 'مكس فروت',
    nameEn: 'Mix Fruit',
    description: 'مزيج فواكه ممتع لكل الأذواق.',
    emoji: '🍹',
    color: '#00A8E8',
    gradient: 'from-sky-400 to-blue-500',
    textColor: 'text-white',
    image: '/assets/product-mixfruit.png',
  },
  {
    id: 'passionfruit',
    name: 'باشن فروت',
    nameEn: 'Passion Fruit',
    description: 'نكهة استوائية مختلفة لمود مليان حيوية.',
    emoji: '🌺',
    color: '#C0006E',
    gradient: 'from-pink-500 to-fuchsia-600',
    textColor: 'text-white',
    image: '/assets/product-passion.png',
  },
  {
    id: 'lychee',
    name: 'ليتشي',
    nameEn: 'Lychee',
    description: 'طعم ناعم وفريد بلمسة فاخرة.',
    emoji: '🍒',
    color: '#FF8FAB',
    gradient: 'from-pink-300 to-rose-400',
    textColor: 'text-white',
    image: '/assets/product-lychee.png',
  },
  {
    id: 'melon',
    name: 'شمام',
    nameEn: 'Melon',
    description: 'حلاوة الشمام الصيفي في كل قطرة.',
    emoji: '🍈',
    color: '#A8C800',
    gradient: 'from-lime-400 to-yellow-300',
    textColor: 'text-white',
    image: '/assets/product-melon.png',
  },
  {
    id: 'polo',
    name: 'بولو',
    nameEn: 'Polo',
    description: 'مزيج النعنع والليمون لانتعاش لحظي.',
    emoji: '🍋',
    color: '#5CC800',
    gradient: 'from-lime-500 to-green-400',
    textColor: 'text-white',
    image: '/assets/product-polo.png',
  },
]
