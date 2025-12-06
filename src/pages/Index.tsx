import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedWhale, setSelectedWhale] = useState<number | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [showAll, setShowAll] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('Все');

  const scrollToWhales = () => {
    const element = document.getElementById('whales-section');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const rateWhale = (index: number, rating: number) => {
    setRatings(prev => ({ ...prev, [index]: rating }));
  };

  const whaleSpecies = [
    {
      name: 'Синий кит',
      latin: 'Balaenoptera musculus',
      size: '24-30 м',
      weight: '150-200 т',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      icon: '🐋',
      habitat: 'Все океаны мира',
      lifespan: '80-90 лет',
      photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'Самое крупное животное, когда-либо существовавшее на Земле. Его сердце размером с автомобиль, а язык весит как слон.'
    },
    {
      name: 'Горбатый кит',
      latin: 'Megaptera novaeangliae',
      size: '12-16 м',
      weight: '25-40 т',
      status: 'Уязвимый',
      statusColor: 'bg-orange-500',
      gradient: 'from-indigo-600 via-purple-500 to-pink-400',
      icon: '🐳',
      habitat: 'Мировой океан',
      lifespan: '45-50 лет',
      photo: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800&q=80',
      description: 'Известен своими сложными песнями длительностью до 30 минут и впечатляющими прыжками из воды.'
    },
    {
      name: 'Косатка',
      latin: 'Orcinus orca',
      size: '6-9 м',
      weight: '4-10 т',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-slate-900 via-slate-700 to-slate-500',
      icon: '🐬',
      habitat: 'Все океаны',
      lifespan: '50-80 лет',
      photo: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80',
      description: 'Высокоинтеллектуальный хищник с собственными диалектами и культурой, передающейся через поколения.'
    },
    {
      name: 'Серый кит',
      latin: 'Eschrichtius robustus',
      size: '12-15 м',
      weight: '15-35 т',
      status: 'Восстановленный',
      statusColor: 'bg-emerald-500',
      gradient: 'from-gray-600 via-gray-500 to-blue-300',
      icon: '🐋',
      habitat: 'Тихий океан',
      lifespan: '50-70 лет',
      photo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      description: 'Совершает самую длинную миграцию среди млекопитающих — до 20,000 км в год между Аляской и Мексикой.'
    },
    {
      name: 'Финвал',
      latin: 'Balaenoptera physalus',
      size: '18-24 м',
      weight: '40-70 т',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-teal-600 via-cyan-500 to-blue-400',
      icon: '🐋',
      habitat: 'Все океаны',
      lifespan: '80-90 лет',
      photo: 'https://images.unsplash.com/photo-1530885988677-30d2a3aeade4?w=800&q=80',
      description: 'Второй по величине кит в мире, способен развивать скорость до 40 км/ч — самый быстрый из крупных китов.'
    },
    {
      name: 'Кашалот',
      latin: 'Physeter macrocephalus',
      size: '11-20 м',
      weight: '35-57 т',
      status: 'Уязвимый',
      statusColor: 'bg-orange-500',
      gradient: 'from-slate-700 via-blue-800 to-blue-600',
      icon: '🐳',
      habitat: 'Глубокие океаны',
      lifespan: '60-70 лет',
      photo: 'https://images.unsplash.com/photo-1567213502996-a3c8e5cf0dd3?w=800&q=80',
      description: 'Обладает самым большим мозгом среди всех животных и может нырять на глубину до 3000 метров.'
    },
    {
      name: 'Белуха',
      latin: 'Delphinapterus leucas',
      size: '4-6 м',
      weight: '1.5-2 т',
      status: 'Близок к угрозе',
      statusColor: 'bg-yellow-500',
      gradient: 'from-blue-200 via-white to-blue-100',
      icon: '🐳',
      habitat: 'Арктика',
      lifespan: '35-50 лет',
      photo: 'https://images.unsplash.com/photo-1559828260-0ba30c6aa25c?w=800&q=80',
      description: 'Белоснежный «морской канареец», издающий множество звуков и обладающий невероятной мимикой.'
    },
    {
      name: 'Нарвал',
      latin: 'Monodon monoceros',
      size: '4-5.5 м',
      weight: '0.8-1.6 т',
      status: 'Близок к угрозе',
      statusColor: 'bg-yellow-500',
      gradient: 'from-indigo-400 via-blue-300 to-cyan-200',
      icon: '🦄',
      habitat: 'Арктические воды',
      lifespan: '40-50 лет',
      photo: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
      description: 'Арктический «единорог океана» с уникальным спиральным бивнем длиной до 3 метров.'
    },
    {
      name: 'Малый полосатик',
      latin: 'Balaenoptera acutorostrata',
      size: '7-10 м',
      weight: '5-10 т',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-blue-500 via-teal-400 to-cyan-300',
      icon: '🐋',
      habitat: 'Все океаны',
      lifespan: '50-60 лет',
      photo: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80',
      description: 'Самый мелкий из усатых китов, быстрый и любопытный, часто подплывает к судам.'
    },
    {
      name: 'Гренландский кит',
      latin: 'Balaena mysticetus',
      size: '14-18 м',
      weight: '75-100 т',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-slate-600 via-blue-700 to-cyan-600',
      icon: '🐋',
      habitat: 'Арктика',
      lifespan: '150-200 лет',
      photo: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&q=80',
      description: 'Рекордсмен по продолжительности жизни среди млекопитающих — может жить более 200 лет!'
    },
    {
      name: 'Южный гладкий кит',
      latin: 'Eubalaena australis',
      size: '13-16 м',
      weight: '40-80 т',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-gray-700 via-slate-600 to-gray-500',
      icon: '🐋',
      habitat: 'Южное полушарие',
      lifespan: '70-100 лет',
      photo: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
      description: 'Медлительный и дружелюбный гигант с характерными наростами на голове.'
    },
    {
      name: 'Северный плавун',
      latin: 'Hyperoodon ampullatus',
      size: '7-10 м',
      weight: '5-8 т',
      status: 'Уязвимый',
      statusColor: 'bg-orange-500',
      gradient: 'from-indigo-700 via-blue-600 to-cyan-500',
      icon: '🐳',
      habitat: 'Северная Атлантика',
      lifespan: '40-50 лет',
      photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'Глубоководный ныряльщик с крупной выпуклой головой и социальным поведением.'
    },
    {
      name: 'Сейвал',
      latin: 'Balaenoptera borealis',
      size: '12-16 м',
      weight: '20-30 т',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-blue-700 via-slate-600 to-gray-500',
      icon: '🐋',
      habitat: 'Все океаны',
      lifespan: '60-70 лет',
      photo: 'https://images.unsplash.com/photo-1567213502996-a3c8e5cf0dd3?w=800&q=80',
      description: 'Элегантный и стройный кит, один из самых быстрых усатых китов после финвала.'
    },
    {
      name: 'Северный гладкий кит',
      latin: 'Eubalaena glacialis',
      size: '13-18 м',
      weight: '40-70 т',
      status: 'Критически под угрозой',
      statusColor: 'bg-red-700',
      gradient: 'from-gray-800 via-slate-700 to-gray-600',
      icon: '🐋',
      habitat: 'Северная Атлантика',
      lifespan: '70 лет',
      photo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      description: 'Один из самых редких китов в мире, осталось менее 400 особей.'
    },
    {
      name: 'Японский гладкий кит',
      latin: 'Eubalaena japonica',
      size: '15-18 м',
      weight: '60-80 т',
      status: 'Критически под угрозой',
      statusColor: 'bg-red-700',
      gradient: 'from-slate-800 via-gray-700 to-blue-600',
      icon: '🐋',
      habitat: 'Северная часть Тихого океана',
      lifespan: '70 лет',
      photo: 'https://images.unsplash.com/photo-1559828260-0ba30c6aa25c?w=800&q=80',
      description: 'Крайне редкий вид, находится на грани исчезновения с популяцией около 300 особей.'
    },
    {
      name: 'Карликовый кит',
      latin: 'Caperea marginata',
      size: '6-6.5 м',
      weight: '3-4 т',
      status: 'Недостаточно данных',
      statusColor: 'bg-gray-500',
      gradient: 'from-gray-500 via-slate-400 to-blue-300',
      icon: '🐋',
      habitat: 'Южное полушарие',
      lifespan: '30-40 лет',
      photo: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80',
      description: 'Самый маленький усатый кит, очень скрытный и малоизученный вид.'
    },
    {
      name: 'Афалина',
      latin: 'Tursiops truncatus',
      size: '2-4 м',
      weight: '150-650 кг',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-blue-500 via-cyan-400 to-teal-300',
      icon: '🐬',
      habitat: 'Прибрежные воды',
      lifespan: '40-50 лет',
      photo: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80',
      description: 'Самый известный и изученный дельфин, обладающий высоким интеллектом и дружелюбием.'
    },
    {
      name: 'Длинноклювый продельфин',
      latin: 'Stenella longirostris',
      size: '1.3-2.4 м',
      weight: '23-80 кг',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-teal-500 via-blue-400 to-cyan-300',
      icon: '🐬',
      habitat: 'Тропические воды',
      lifespan: '20-25 лет',
      photo: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800&q=80',
      description: 'Акробатический дельфин, способный совершать впечатляющие вращения в прыжке до 7 раз!'
    },
    {
      name: 'Морская свинья',
      latin: 'Phocoena phocoena',
      size: '1.5-2 м',
      weight: '50-75 кг',
      status: 'Уязвимый',
      statusColor: 'bg-orange-500',
      gradient: 'from-slate-500 via-gray-400 to-blue-300',
      icon: '🐬',
      habitat: 'Прибрежные умеренные воды',
      lifespan: '20-25 лет',
      photo: 'https://images.unsplash.com/photo-1567213502996-a3c8e5cf0dd3?w=800&q=80',
      description: 'Небольшое скромное китообразное, один из самых маленьких представителей отряда.'
    },
    {
      name: 'Обыкновенная гринда',
      latin: 'Globicephala melas',
      size: '4-6 м',
      weight: '1-2 т',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-slate-800 via-gray-700 to-slate-600',
      icon: '🐬',
      habitat: 'Умеренные и холодные воды',
      lifespan: '35-60 лет',
      photo: 'https://images.unsplash.com/photo-1530885988677-30d2a3aeade4?w=800&q=80',
      description: 'Социальные животные с сильными семейными связями, часто путешествуют большими группами.'
    },
    {
      name: 'Малая косатка',
      latin: 'Pseudorca crassidens',
      size: '4-6 м',
      weight: '1-2.5 т',
      status: 'Близок к угрозе',
      statusColor: 'bg-yellow-500',
      gradient: 'from-slate-900 via-gray-800 to-slate-700',
      icon: '🐬',
      habitat: 'Тропические и субтропические воды',
      lifespan: '60 лет',
      photo: 'https://images.unsplash.com/photo-1559827260-0ba30c6aa25c?w=800&q=80',
      description: 'Активный хищник, не являющийся близким родственником косатки, несмотря на название.'
    },
    {
      name: 'Иравадийский дельфин',
      latin: 'Orcaella brevirostris',
      size: '2-2.7 м',
      weight: '90-200 кг',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-blue-400 via-cyan-300 to-teal-200',
      icon: '🐬',
      habitat: 'Прибрежные воды Индо-Тихоокеанского региона',
      lifespan: '30 лет',
      photo: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
      description: 'Уникальный дельфин с округлой головой, обитающий в реках и прибрежных водах.'
    },
    {
      name: 'Полосатый дельфин',
      latin: 'Stenella coeruleoalba',
      size: '1.8-2.5 м',
      weight: '90-150 кг',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-indigo-500 via-blue-400 to-cyan-300',
      icon: '🐬',
      habitat: 'Умеренные и тропические воды',
      lifespan: '55-60 лет',
      photo: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80',
      description: 'Красивый дельфин с характерными синими полосами вдоль тела.'
    },
    {
      name: 'Амазонский речной дельфин',
      latin: 'Inia geoffrensis',
      size: '1.8-2.5 м',
      weight: '85-185 кг',
      status: 'Под угрозой',
      statusColor: 'bg-red-500',
      gradient: 'from-pink-400 via-rose-300 to-pink-200',
      icon: '🐬',
      habitat: 'Река Амазонка',
      lifespan: '30 лет',
      photo: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&q=80',
      description: 'Уникальный розовый дельфин, живущий в пресных водах Амазонки, обладающий гибкой шеей.'
    },
    {
      name: 'Китайский речной дельфин',
      latin: 'Lipotes vexillifer',
      size: '2-2.5 м',
      weight: '135-230 кг',
      status: 'Возможно вымер',
      statusColor: 'bg-black',
      gradient: 'from-gray-600 via-slate-500 to-gray-400',
      icon: '🐬',
      habitat: 'Река Янцзы (Китай)',
      lifespan: '24 года',
      photo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      description: 'Трагически вымерший вид, последний раз наблюдался в 2002 году — жертва индустриализации.'
    },
    {
      name: 'Клюворыл',
      latin: 'Ziphius cavirostris',
      size: '5-7 м',
      weight: '2-3 т',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-slate-700 via-blue-600 to-cyan-500',
      icon: '🐳',
      habitat: 'Глубокие воды всех океанов',
      lifespan: '40-60 лет',
      photo: 'https://images.unsplash.com/photo-1567213502996-a3c8e5cf0dd3?w=800&q=80',
      description: 'Рекордсмен по глубине погружения среди млекопитающих — до 2992 метров!'
    },
    {
      name: 'Карликовый кашалот',
      latin: 'Kogia breviceps',
      size: '2.7-3.5 м',
      weight: '300-500 кг',
      status: 'Недостаточно данных',
      statusColor: 'bg-gray-500',
      gradient: 'from-gray-700 via-slate-600 to-blue-500',
      icon: '🐳',
      habitat: 'Тропические и умеренные воды',
      lifespan: '23 года',
      photo: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800&q=80',
      description: 'Миниатюрная версия кашалота, способная выпускать чернильное облако для защиты.'
    },
    {
      name: 'Бутылконос Бэрда',
      latin: 'Berardius bairdii',
      size: '10-12 м',
      weight: '10-15 т',
      status: 'Недостаточно данных',
      statusColor: 'bg-gray-500',
      gradient: 'from-slate-800 via-gray-700 to-blue-600',
      icon: '🐳',
      habitat: 'Северная часть Тихого океана',
      lifespan: '80-90 лет',
      photo: 'https://images.unsplash.com/photo-1530885988677-30d2a3aeade4?w=800&q=80',
      description: 'Крупный клюворыл с глубоким нырянием и малоизученным образом жизни.'
    },
    {
      name: 'Сернобрюхий дельфин',
      latin: 'Lagenorhynchus obliquidens',
      size: '1.9-2.5 м',
      weight: '90-200 кг',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-slate-600 via-gray-500 to-teal-400',
      icon: '🐬',
      habitat: 'Северная часть Тихого океана',
      lifespan: '40 лет',
      photo: 'https://images.unsplash.com/photo-1559828260-0ba30c6aa25c?w=800&q=80',
      description: 'Энергичный дельфин с характерным серым брюхом и любовью к прыжкам.'
    },
    {
      name: 'Атлантический белобокий дельфин',
      latin: 'Lagenorhynchus acutus',
      size: '2-2.7 м',
      weight: '180-230 кг',
      status: 'Стабильный',
      statusColor: 'bg-green-500',
      gradient: 'from-blue-600 via-cyan-500 to-white',
      icon: '🐬',
      habitat: 'Северная Атлантика',
      lifespan: '25-30 лет',
      photo: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
      description: 'Социальный и игривый дельфин с яркими белыми пятнами на боках.'
    }
  ];

  const stats = [
    { number: '30+', label: 'Видов в коллекции', icon: 'Fish' },
    { number: '200', label: 'Лет максимальный возраст', icon: 'Clock' },
    { number: '3000м', label: 'Глубина погружения', icon: 'Waves' },
    { number: '30км', label: 'Дальность песен китов', icon: 'Radio' }
  ];

  const features = [
    {
      icon: 'Heart',
      title: 'Гиганты природы',
      description: 'Синий кит — самое большое животное в истории планеты, превосходящее даже динозавров'
    },
    {
      icon: 'Music',
      title: 'Океанские певцы',
      description: 'Горбатые киты создают сложные песни, которые могут меняться год от года'
    },
    {
      icon: 'Brain',
      title: 'Высокий интеллект',
      description: 'Косатки обладают культурой и передают знания через поколения'
    },
    {
      icon: 'Globe',
      title: 'Мировые путешественники',
      description: 'Серые киты совершают миграции длиной до 20,000 километров ежегодно'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-ocean-light/20 to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-5xl animate-float">🐋</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Мир Китов
                </h1>
                <p className="text-xs text-muted-foreground">Величие океана</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" onClick={() => setShowGallery(true)}>
                <Icon name="Camera" className="mr-2" size={18} />
                Фотографии
              </Button>
              <Button variant="default" size="lg" className="hidden md:flex">
                <Icon name="Heart" className="mr-2" size={18} />
                Поддержать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Sparkles" className="mr-2" size={16} />
                Исследуйте океан
              </Badge>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-ocean-deep via-primary to-ocean-aqua bg-clip-text text-transparent">
                Величественные
              </span>
              <br />
              <span className="text-secondary">гиганты океана</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Погрузитесь в удивительный мир китов — самых крупных, умных и загадочных обитателей морских глубин
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg" onClick={scrollToWhales}>
                <Icon name="ArrowDown" className="mr-2" size={20} />
                Начать исследование
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => setShowGallery(true)}>
                <Icon name="Images" className="mr-2" size={20} />
                Смотреть фотографии
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-8 pb-6">
                  <Icon name={stat.icon as any} className="mx-auto mb-4 text-primary" size={32} />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="whales-section" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-accent/5 to-ocean-light/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-secondary mb-4">Познакомьтесь с китами</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              30 удивительных видов — от гигантских синих китов до проворных дельфинов!
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Button 
                variant={statusFilter === 'Все' ? 'default' : 'outline'} 
                onClick={() => setStatusFilter('Все')}
                size="lg"
              >
                <Icon name="List" className="mr-2" size={18} />
                Все ({whaleSpecies.length})
              </Button>
              <Button 
                variant={statusFilter === 'Под угрозой' ? 'default' : 'outline'} 
                onClick={() => setStatusFilter('Под угрозой')}
                size="lg"
                className={statusFilter === 'Под угрозой' ? '' : 'hover:bg-red-50'}
              >
                <span className="mr-2">🚨</span>
                Под угрозой ({whaleSpecies.filter(w => w.status.includes('Под угрозой')).length})
              </Button>
              <Button 
                variant={statusFilter === 'Критически под угрозой' ? 'default' : 'outline'} 
                onClick={() => setStatusFilter('Критически под угрозой')}
                size="lg"
                className={statusFilter === 'Критически под угрозой' ? '' : 'hover:bg-red-100'}
              >
                <span className="mr-2">⚠️</span>
                Критические ({whaleSpecies.filter(w => w.status === 'Критически под угрозой').length})
              </Button>
              <Button 
                variant={statusFilter === 'Уязвимый' ? 'default' : 'outline'} 
                onClick={() => setStatusFilter('Уязвимый')}
                size="lg"
                className={statusFilter === 'Уязвимый' ? '' : 'hover:bg-orange-50'}
              >
                <span className="mr-2">⚡</span>
                Уязвимые ({whaleSpecies.filter(w => w.status === 'Уязвимый').length})
              </Button>
              <Button 
                variant={statusFilter === 'Стабильный' ? 'default' : 'outline'} 
                onClick={() => setStatusFilter('Стабильный')}
                size="lg"
                className={statusFilter === 'Стабильный' ? '' : 'hover:bg-green-50'}
              >
                <span className="mr-2">✅</span>
                Стабильные ({whaleSpecies.filter(w => w.status === 'Стабильный').length})
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAll 
              ? (statusFilter === 'Все' ? whaleSpecies : whaleSpecies.filter(w => w.status.includes(statusFilter))) 
              : (statusFilter === 'Все' ? whaleSpecies : whaleSpecies.filter(w => w.status.includes(statusFilter))).slice(0, 12)
            ).map((whale, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                onClick={() => setSelectedWhale(selectedWhale === index ? null : index)}
              >
                <div className={`h-48 bg-gradient-to-br ${whale.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl group-hover:scale-110 transition-transform duration-500">
                      {whale.icon}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${whale.statusColor} text-white font-semibold shadow-lg border-0`}>
                      {whale.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-1">{whale.name}</CardTitle>
                      <CardDescription className="italic text-base">{whale.latin}</CardDescription>
                    </div>
                    <Icon 
                      name={selectedWhale === index ? "ChevronUp" : "ChevronDown"} 
                      className="text-muted-foreground" 
                      size={24} 
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Размер</div>
                      <div className="font-semibold">{whale.size}</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Вес</div>
                      <div className="font-semibold">{whale.weight}</div>
                    </div>
                  </div>
                  
                  {selectedWhale === index && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <p className="text-muted-foreground mb-4">{whale.description}</p>
                      <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                        <div>
                          <span className="text-muted-foreground">Ареал:</span>
                          <span className="ml-2 font-medium">{whale.habitat}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Продолжительность жизни:</span>
                          <span className="ml-2 font-medium">{whale.lifespan}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Ваша оценка:</p>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={(e) => {
                                e.stopPropagation();
                                rateWhale(index, star);
                              }}
                              className="transition-transform hover:scale-125"
                            >
                              <Icon 
                                name={ratings[index] >= star ? "Star" : "Star"}
                                className={ratings[index] >= star ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                size={24}
                              />
                            </button>
                          ))}
                        </div>
                        {ratings[index] && (
                          <p className="text-xs text-primary mt-2">Спасибо за вашу оценку! ⭐</p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

{!showAll && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => setShowAll(true)}>
                <Icon name="ChevronDown" className="mr-2" size={20} />
                Показать ещё {(statusFilter === 'Все' ? whaleSpecies : whaleSpecies.filter(w => w.status.includes(statusFilter))).length - 12} видов
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-secondary mb-4">Удивительные способности</h3>
            <p className="text-xl text-muted-foreground">
              Киты — одни из самых невероятных созданий на планете
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={feature.icon as any} className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-ocean-deep via-primary to-ocean-aqua text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-float">🐋</div>
          <div className="absolute bottom-10 right-10 text-9xl animate-float" style={{ animationDelay: '1s' }}>🐳</div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Icon name="Heart" className="mx-auto mb-6" size={64} />
          <h3 className="text-5xl font-bold mb-6">Защитим океаны вместе</h3>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Киты играют критическую роль в поддержании здоровья океанов и всей планеты. Их защита — это инвестиция в будущее нашей Земли.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="HandHeart" className="mr-2" size={20} />
              Поддержать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 hover:bg-white/20 text-white">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🐋</span>
              <div>
                <div className="font-bold text-xl">Мир Китов</div>
                <div className="text-sm opacity-70">Создано с любовью к океану</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Icon name="Globe" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Icon name="Share2" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-70">
            © 2024 Мир Китов. Все права защищены. 🌊
          </div>
        </div>
      </footer>

      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl">Фотографии китов из реальной жизни</DialogTitle>
            <DialogDescription className="text-lg">
              Коллекция из {whaleSpecies.length} видов — невероятные кадры величественных обитателей океана
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {whaleSpecies.map((whale, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={whale.photo} 
                    alt={whale.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="text-xl font-bold mb-1">{whale.name}</h4>
                    <p className="text-sm opacity-90 italic">{whale.latin}</p>
                  </div>
                  <Badge className={`${whale.statusColor} text-white font-semibold absolute top-3 right-3 border-0`}>
                    {whale.status}
                  </Badge>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{whale.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}