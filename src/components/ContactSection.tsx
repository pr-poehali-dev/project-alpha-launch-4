import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Send } from "lucide-react"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Контакты
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Давайте <span className="text-primary">обсудим партнёрство</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Позвоните или напишите организаторам — ответим быстро и расскажем обо всех деталях сотрудничества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Юлия</h3>
              <a href="tel:+79224883896" className="text-primary hover:underline font-medium">
                8(922)-488-38-96
              </a>
              <p className="text-sm text-muted-foreground mt-2">Позвоните или напишите</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Анастасия</h3>
              <a href="tel:+79227772647" className="text-primary hover:underline font-medium">
                8(922)-777-26-47
              </a>
              <p className="text-sm text-muted-foreground mt-2">Позвоните или напишите</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Место проведения</h3>
              <p className="text-primary font-medium">РК Babylon</p>
              <p className="text-sm text-muted-foreground mt-2">31 мая 2026, 17:00–21:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://vk.com/hottiefest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            <Icon name="Users" size={18} />
            ВКонтакте
          </a>
          <a
            href="https://t.me/herachdetka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            <Send className="h-4 w-4" />
            Телеграм
          </a>
          <a
            href="https://instagram.com/herachdetka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            <Icon name="Camera" size={18} />
            Инстаграм
          </a>
        </div>
      </div>
    </section>
  )
}
