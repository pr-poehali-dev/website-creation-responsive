import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  currentPage: 'home' | 'hobbies';
  onNavigate: (page: 'home' | 'hobbies') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/9696383d-a951-4e85-8a70-45003a319fa3/files/8cd4b3b3-3e17-4ce0-afec-c44667e58668.jpg" 
              alt="Логотип" 
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg object-cover"
            />
            <span className="text-lg lg:text-xl font-semibold">А. Иванов</span>
          </div>

          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>

          <nav className="hidden lg:flex gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'bg-white/20 font-semibold' 
                  : 'hover:bg-white/10'
              }`}
            >
              <Icon name="Home" size={20} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => onNavigate('hobbies')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                currentPage === 'hobbies' 
                  ? 'bg-white/20 font-semibold' 
                  : 'hover:bg-white/10'
              }`}
            >
              <Icon name="Heart" size={20} />
              <span>Мои увлечения</span>
            </button>
          </nav>
        </div>

        {menuOpen && (
          <nav className="lg:hidden pb-4 animate-fade-in">
            <button 
              onClick={() => {
                onNavigate('home');
                setMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'bg-white/20 font-semibold' 
                  : 'hover:bg-white/10'
              }`}
            >
              <Icon name="Home" size={20} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => {
                onNavigate('hobbies');
                setMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-md transition-colors mt-2 ${
                currentPage === 'hobbies' 
                  ? 'bg-white/20 font-semibold' 
                  : 'hover:bg-white/10'
              }`}
            >
              <Icon name="Heart" size={20} />
              <span>Мои увлечения</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
