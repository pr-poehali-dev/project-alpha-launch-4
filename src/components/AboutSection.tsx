import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "8 лет опыта", description: "Чемпионат успешно проводится на протяжении 8 лет — с устоявшейся репутацией и лояльной аудиторией" },
  { title: "Топовые судьи", description: "В судействе участвуют ведущие хореографы России — гарантия профессионального уровня" },
  { title: "География", description: "На конкурс съезжаются участники из разных городов округа — широкий охват аудитории" },
  { title: "Женские направления", description: "Уникальный формат: соревнования исключительно по женским танцевальным направлениям" },
  { title: "Активная аудитория", description: "Молодёжь 18–40 лет — платёжеспособная и активная целевая аудитория для партнёров" },
  { title: "Медийность", description: "Продвижение через ВКонтакте, Телеграм, Инстаграм и личные страницы организаторов" },
]

const stats = [
  { number: "8", label: "Лет проводится" },
  { number: "180+", label: "Участников" },
  { number: "400+", label: "Зрителей" },
  { number: "31 мая", label: "Дата 2026" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            О Hottie Fest
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Чемпионат, который{" "}
            <span className="text-primary relative">
              зажигает
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Hottie Fest — это ежегодный танцевальный чемпионат по женским направлениям. Мероприятие собирает лучших танцоров региона, топовых хореографов России и сотни зрителей в одном месте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}