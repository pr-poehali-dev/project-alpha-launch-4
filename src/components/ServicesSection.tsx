import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const benefits = [
  {
    icon: "Megaphone",
    title: "Упоминание ведущим",
    description: "Ваш бренд звучит со сцены перед всеми участниками и зрителями во время мероприятия.",
  },
  {
    icon: "Image",
    title: "Логотип на афише",
    description: "Размещение логотипа на официальной афише чемпионата, которая распространяется в соцсетях и офлайн.",
  },
  {
    icon: "Monitor",
    title: "Экран на сцене",
    description: "Логотип и промо-ролик партнёра демонстрируются на большом экране во время всего мероприятия.",
  },
  {
    icon: "Share2",
    title: "Посты в соцсетях",
    description: "Отдельная публикация о партнёре в ВКонтакте, Телеграм и Инстаграм с охватом тысяч подписчиков.",
  },
  {
    icon: "Ticket",
    title: "VIP-приглашения",
    description: "Пригласительные билеты за VIP-столом или индивидуальный VIP-стол в зависимости от пакета.",
  },
  {
    icon: "Trophy",
    title: "Награждение на сцене",
    description: "Генеральный партнёр лично награждает победителей номинации Ladies Show Pro на сцене.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что получает партнёр
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Преимущества <span className="text-primary">партнёрства</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Ваш бренд — в центре внимания сотен активных молодых людей. Выберите удобный формат присутствия на мероприятии.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={benefit.icon} className="h-6 w-6" fallback="Star" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
