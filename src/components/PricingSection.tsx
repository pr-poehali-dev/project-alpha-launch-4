import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Партнёр",
    spots: "5 мест",
    price: "15 000",
    priceNote: "наличными",
    bonus: "+ сертификаты на 20 000 ₽",
    features: [
      "Упоминание ведущим 2 раза за вечер",
      "Логотип на афише мероприятия",
      "Логотип и промо-ролик на экране во время мероприятия",
      "2 VIP-приглашения (VIP-стол)",
      "Отдельный пост в соцсетях (ВК, ТГ, ИГ)",
    ],
    highlighted: false,
  },
  {
    name: "Генеральный партнёр",
    spots: "1 место",
    price: "30 000",
    priceNote: "наличными",
    bonus: "+ сертификаты на 25 000 ₽",
    features: [
      "Упоминание ведущим 3 раза (в т.ч. при награждении)",
      "Награждение победителей Ladies Show Pro на сцене",
      "Логотип и промо-ролик на экране",
      "Индивидуальный VIP-стол на 5 человек",
      "Отдельный пост в соцсетях (ВК, ТГ, ИГ)",
      "Баннер / стойка на месте проведения мероприятия",
      "Логотип в видео-ролике для соцсетей",
      "Рекламная продукция на территории мероприятия",
    ],
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Пакеты партнёрства
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Выберите <span className="text-primary">статус партнёра</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ограниченное количество мест — не упустите возможность заявить о своём бренде
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                  Максимальный охват
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="text-sm font-medium text-muted-foreground mb-1">{tier.spots}</div>
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-lg font-normal text-muted-foreground"> ₽ {tier.priceNote}</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-primary">{tier.bonus}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">Обсудить партнёрство</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Призовой взнос вносится <span className="text-primary font-semibold">наличными</span> — свяжитесь с организаторами для обсуждения деталей
          </p>
        </div>
      </div>
    </section>
  )
}