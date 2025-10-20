import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import HobbiesPage from "./components/HobbiesPage";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'hobbies'>('home');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen">
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
          {currentPage === 'home' ? <HomePage /> : <HobbiesPage />}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;