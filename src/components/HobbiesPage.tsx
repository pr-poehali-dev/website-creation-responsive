import { Card } from '@/components/ui/card';

export default function HobbiesPage() {
  const hobbies = [
    {
      title: 'Фотография',
      description: 'Увлекаюсь **пейзажной** и *портретной* фотографией. Особенно нравится снимать в **золотой час**, когда освещение создает *невероятную атмосферу*. Люблю экспериментировать с **композицией** и *углами съемки*.',
      image: 'https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/931febaf-819b-49f5-9143-4d2261db669c.jpg'
    },
    {
      title: 'Путешествия',
      description: 'Регулярно посещаю новые *места* и **страны**. Особый интерес вызывают **горные** маршруты и *исторические* города. В путешествиях ценю **аутентичность** и возможность познакомиться с *местной культурой*.',
      image: 'https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/f61c352f-aac7-4658-9a91-989c2972d110.jpg'
    },
    {
      title: 'Программирование',
      description: 'Изучаю современные **веб-технологии** и *фреймворки*. Разрабатываю **собственные проекты** для отработки навыков. Особенно интересны *алгоритмы* и **архитектура программных систем**.',
      image: 'https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/7ba3c383-7a60-49e5-8f79-7da90e34b073.jpg'
    },
    {
      title: 'Спорт',
      description: 'Регулярно занимаюсь **теннисом** и *бегом*. Поддержание *физической формы* является важной частью моей жизни. Участвую в **любительских турнирах** и *марафонах*.',
      image: 'https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/b683a6ec-be1d-4e56-9b03-69b0f4ac726f.jpg'
    },
    {
      title: 'Чтение',
      description: 'Читаю **научно-популярную** литературу и *классическую прозу*. Особенно интересуют книги о **психологии**, *саморазвитии* и **истории технологий**. Веду собственный список *прочитанных произведений*.',
      image: 'https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/0657ae89-9ab3-41e2-8979-40adc82d1f5c.jpg'
    },
    {
      title: 'Рисование',
      description: 'Занимаюсь **цифровой графикой** и *акварельной живописью*. Рисование помогает развивать **креативное мышление** и *внимание к деталям*. Посещаю мастер-классы по **скетчингу** и *композиции*.',
      image: 'https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/860efa3d-ffbd-4605-aa49-af7709b908c8.jpg'
    }
  ];

  const formatText = (text: string) => {
    return text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="italic">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center text-primary animate-fade-in">
          Мои увлечения
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hobbies.map((hobby, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={hobby.image} 
                alt={hobby.title}
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="p-5 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-primary">
                  {hobby.title}
                </h2>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {formatText(hobby.description)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
