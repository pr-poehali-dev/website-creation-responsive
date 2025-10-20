import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
        <div className="text-center mb-8 lg:mb-12 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/b3101cef-5c53-43bb-b94c-26875f2d207e.jpg" 
            alt="Аватар" 
            className="w-40 h-40 lg:w-52 lg:h-52 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white"
          />
          
          <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-primary">
            Иванов Алексей Владимирович
          </h1>
        </div>

        <Card className="p-6 lg:p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-primary flex items-center gap-2">
            <Icon name="Calendar" size={24} />
            Дата рождения
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">15 марта 1998 года</p>
        </Card>

        <Card className="p-6 lg:p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-primary flex items-center gap-2">
            <Icon name="GraduationCap" size={24} />
            Группа
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">ИС-401</p>
        </Card>

        <Card className="p-6 lg:p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-primary flex items-center gap-2">
            <Icon name="Briefcase" size={24} />
            Специальность
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Информационные системы и технологии
          </p>
        </Card>

        <Card className="p-6 lg:p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-lg lg:text-xl font-semibold mb-4 text-primary flex items-center gap-2">
            <Icon name="User" size={22} />
            О себе
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Студент с активной жизненной позицией, увлекающийся современными технологиями 
            и разработкой программного обеспечения. Стремлюсь к постоянному развитию 
            и получению новых знаний в области IT.
          </p>
        </Card>

        <Card className="p-6 lg:p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-lg lg:text-xl font-semibold mb-4 text-primary flex items-center gap-2">
            <Icon name="Link" size={22} />
            Контакты
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={20} className="text-accent" />
              <a 
                href="mailto:ivanov.alex@example.com" 
                className="text-base lg:text-lg text-accent hover:underline"
              >
                ivanov.alex@example.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://vk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Icon name="Share2" size={20} />
                <span>VK</span>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Icon name="Send" size={20} />
                <span>Telegram</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Icon name="Github" size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 lg:p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-lg lg:text-xl font-semibold mb-4 text-primary flex items-center gap-2">
            <Icon name="Star" size={22} />
            Сильные качества
          </h3>
          <ul className="space-y-2 text-base lg:text-lg">
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Ответственность и исполнительность</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Аналитическое мышление</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Быстрое обучение новым технологиям</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Коммуникабельность и работа в команде</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Креативный подход к решению задач</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
