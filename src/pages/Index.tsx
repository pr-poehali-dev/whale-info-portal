import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const whaleSpecies = [
    {
      name: 'Синий кит',
      latin: 'Balaenoptera musculus',
      size: 'До 30 метров',
      weight: 'До 200 тонн',
      status: 'Под угрозой',
      color: 'bg-blue-500',
      icon: '🐋',
      description: 'Самое крупное животное на планете'
    },
    {
      name: 'Горбатый кит',
      latin: 'Megaptera novaeangliae',
      size: 'До 16 метров',
      weight: 'До 40 тонн',
      status: 'Уязвимый',
      color: 'bg-ocean-deep',
      icon: '🐳',
      description: 'Известен своими песнями и акробатикой'
    },
    {
      name: 'Косатка',
      latin: 'Orcinus orca',
      size: 'До 9 метров',
      weight: 'До 10 тонн',
      status: 'Стабильный',
      color: 'bg-secondary',
      icon: '🐋',
      description: 'Высокоинтеллектуальный хищник'
    },
    {
      name: 'Серый кит',
      latin: 'Eschrichtius robustus',
      size: 'До 15 метров',
      weight: 'До 35 тонн',
      status: 'Восстановленный',
      color: 'bg-muted',
      icon: '🐳',
      description: 'Совершает самые длинные миграции'
    }
  ];

  const migrationRoutes = [
    {
      species: 'Серый кит',
      route: 'Аляска → Мексика',
      distance: '20,000 км',
      season: 'Октябрь - Февраль',
      description: 'Самая длинная миграция среди млекопитающих'
    },
    {
      species: 'Горбатый кит',
      route: 'Антарктида → Экватор',
      distance: '8,000 км',
      season: 'Июнь - Сентябрь',
      description: 'Мигрируют для размножения в теплых водах'
    },
    {
      species: 'Синий кит',
      route: 'Северный океан → Тропики',
      distance: '6,000 км',
      season: 'Круглый год',
      description: 'Следуют за скоплениями криля'
    }
  ];

  const facts = [
    {
      title: 'Сердце синего кита',
      fact: 'Размером с автомобиль и весит около 600 кг',
      icon: 'Heart'
    },
    {
      title: 'Песни горбатых китов',
      fact: 'Могут длиться до 30 минут и слышны на расстоянии до 30 км',
      icon: 'Music'
    },
    {
      title: 'Интеллект косаток',
      fact: 'Имеют собственные диалекты и передают культуру поколениям',
      icon: 'Brain'
    },
    {
      title: 'Продолжительность жизни',
      fact: 'Гренландские киты могут жить более 200 лет',
      icon: 'Clock'
    },
    {
      title: 'Глубина погружения',
      fact: 'Кашалоты ныряют на глубину до 3000 метров',
      icon: 'Waves'
    },
    {
      title: 'Социальная структура',
      fact: 'Косатки живут матриархальными семьями всю жизнь',
      icon: 'Users'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ocean-light">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl animate-wave">🐋</span>
              <h1 className="text-2xl font-bold text-primary">Мир Китов</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('species')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Виды
              </button>
              <button
                onClick={() => setActiveSection('migration')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Миграция
              </button>
              <button
                onClick={() => setActiveSection('facts')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Факты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
            Величественные гиганты океана
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Исследуйте удивительный мир китов — самых крупных и умных обитателей морских глубин.
            Узнайте об их невероятных миграциях, социальной жизни и уникальных способностях.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => setActiveSection('species')}
          >
            <Icon name="Waves" className="mr-2" size={24} />
            Начать исследование
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-secondary mb-4">Виды китов</h3>
            <p className="text-lg text-muted-foreground">
              Познакомьтесь с самыми известными представителями китообразных
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whaleSpecies.map((whale, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-6xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {whale.icon}
                    </span>
                    <Badge variant="secondary">{whale.status}</Badge>
                  </div>
                  <CardTitle className="text-xl">{whale.name}</CardTitle>
                  <CardDescription className="italic">{whale.latin}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{whale.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Размер:</span>
                      <span>{whale.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Вес:</span>
                      <span>{whale.weight}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-ocean-light to-ocean-deep/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-secondary mb-4">Интерактивная карта миграций</h3>
            <p className="text-lg text-muted-foreground">
              Узнайте о невероятных путешествиях китов через океаны
            </p>
          </div>

          <Tabs defaultValue="gray" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gray">Серый кит</TabsTrigger>
              <TabsTrigger value="humpback">Горбатый кит</TabsTrigger>
              <TabsTrigger value="blue">Синий кит</TabsTrigger>
            </TabsList>

            {migrationRoutes.map((route, index) => (
              <TabsContent
                key={index}
                value={route.species === 'Серый кит' ? 'gray' : route.species === 'Горбатый кит' ? 'humpback' : 'blue'}
                className="mt-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{route.species}</CardTitle>
                    <CardDescription>{route.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-ocean-deep to-ocean-aqua h-64 rounded-lg relative overflow-hidden mb-6">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Icon name="Navigation" size={48} className="mx-auto mb-4 animate-float" />
                          <p className="text-xl font-semibold">{route.route}</p>
                          <p className="text-lg mt-2">{route.distance}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ocean-navy/50 to-transparent" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <Icon name="Calendar" className="mb-2 text-primary" />
                        <p className="font-semibold mb-1">Сезон миграции</p>
                        <p className="text-sm text-muted-foreground">{route.season}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <Icon name="Ruler" className="mb-2 text-primary" />
                        <p className="font-semibold mb-1">Расстояние</p>
                        <p className="text-sm text-muted-foreground">{route.distance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-secondary mb-4">Удивительные факты</h3>
            <p className="text-lg text-muted-foreground">
              Невероятные способности и особенности китов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facts.map((fact, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={fact.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{fact.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-t from-ocean-deep to-ocean-light text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Защитим океаны вместе</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Киты играют важнейшую роль в экосистеме океана. Узнайте, как вы можете помочь сохранить этих удивительных созданий для будущих поколений.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Heart" className="mr-2" size={24} />
            Поддержать защиту китов
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2024 Мир Китов. Создано с заботой об океане 🌊
          </p>
        </div>
      </footer>
    </div>
  );
}
