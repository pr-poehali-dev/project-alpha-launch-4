import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    title: "Женские направления",
    category: "Формат чемпионата",
    description:
      "Hottie Fest — единственный в регионе чемпионат, в основе которого женские танцевальные направления. Уникальный формат привлекает аудиторию и создаёт особую атмосферу.",
    tags: ["Ladies Show Pro", "Женские направления", "Уникальный формат"],
  },
  {
    title: "Топовые хореографы",
    category: "Судейство",
    description:
      "Профессиональное судейство от ведущих хореографов России гарантирует высокий уровень соревнований и привлекает сильнейших участников из региона.",
    tags: ["Топовые хореографы России", "Профессиональный уровень"],
  },
  {
    title: "РК Babylon, 31 мая 2026",
    category: "Место и время",
    description:
      "Мероприятие пройдёт 31 мая 2026 года с 17:00 до 21:00 в развлекательном комплексе Babylon. Вечернее время — максимальная явка зрителей и участников.",
    tags: ["РК Babylon", "31 мая 2026", "17:00–21:00"],
  },
  {
    title: "Широкий медийный охват",
    category: "Продвижение",
    description:
      "Вконтакте vk.com/hottiefest. Телеграм @herachdetka. Инстаграм @herachdetka (*проект Meta, деятельность которой в России запрещена). Личные страницы организаторов @yulia.booka, @mumber_an. Анонсы, посты о партнёрах и репортажи с мероприятия обеспечивают максимальную видимость бренда.",
    tags: ["ВКонтакте", "Телеграм", "Инстаграм"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Почему Hottie Fest?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            8 лет репутации, профессиональный уровень и активная молодёжная аудитория — всё это делает чемпионат идеальной площадкой для вашего бренда.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">
                    {index === 0 ? "💃" : index === 1 ? "🏆" : index === 2 ? "📍" : "📣"}
                  </div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">{item.category}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}