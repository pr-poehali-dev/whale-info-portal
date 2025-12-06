import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedWhale, setSelectedWhale] = useState<number | null>(null);

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
      description: 'Арктический «единорог океана» с уникальным спиральным бивнем длиной до 3 метров.'
    }
  ];

  const stats = [
    { number: '90+', label: 'Видов китообразных', icon: 'Fish' },
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
            <Button variant="default" size="lg" className="hidden md:flex">
              <Icon name="Heart" className="mr-2" size={18} />
              Поддержать
            </Button>
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
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg">
                <Icon name="ArrowDown" className="mr-2" size={20} />
                Начать исследование
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
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

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-accent/5 to-ocean-light/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-secondary mb-4">Познакомьтесь с китами</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый вид уникален и восхитителен по-своему
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whaleSpecies.map((whale, index) => (
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
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Ареал:</span>
                          <span className="ml-2 font-medium">{whale.habitat}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Продолжительность жизни:</span>
                          <span className="ml-2 font-medium">{whale.lifespan}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
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
    </div>
  );
}