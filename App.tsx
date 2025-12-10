import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Language } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    // Check local storage for persisted auth or language preferences if needed
    // For this demo, we start logged out
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {isAuthenticated ? (
        <Dashboard 
          onLogout={handleLogout} 
          lang={language}
          toggleLang={toggleLanguage}
        />
      ) : (
        <Login 
          onLogin={handleLogin}
          lang={language}
          toggleLang={toggleLanguage}
        />
      )}
    </div>
  );
};

export default App;
