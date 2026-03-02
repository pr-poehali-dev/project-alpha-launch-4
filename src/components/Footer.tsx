import { Send } from "lucide-react"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🔥 Hottie Fest 2026</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Танцевальный чемпионат по женским направлениям. 31 мая 2026, РК Babylon.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О мероприятии
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Пакеты партнёрства
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a
                href="https://vk.com/hottiefest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Users" size={20} />
                <span className="sr-only">ВКонтакте</span>
              </a>
              <a
                href="https://t.me/herachdetka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Телеграм</span>
              </a>
              <a
                href="https://instagram.com/herachdetka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Camera" size={20} />
                <span className="sr-only">Инстаграм</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Инстаграм — проект Meta, деятельность которой в России запрещена
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Hottie Fest. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
