import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({
    isOpen: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({
      isOpen: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#0b0819] text-slate-100 selection:bg-purple-600 selection:text-white font-sans">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Navigation Bar */}
        <Navbar onShowToast={showToast} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Hero onShowToast={showToast} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact onShowToast={showToast} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Toast Notification */}
        <Toast
          isOpen={toast.isOpen}
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
