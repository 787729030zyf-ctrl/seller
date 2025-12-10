import React, { useState } from 'react';
import { Sparkles, Globe, ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LoginProps {
  onLogin: () => void;
  lang: Language;
  toggleLang: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, lang, toggleLang }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-300 opacity-20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-400 opacity-20 rounded-full blur-[100px]"></div>

      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md transition-all text-sm font-medium border border-white/20"
        >
          <Globe size={16} />
          {lang === 'en' ? 'English' : '中文'}
        </button>
      </div>

      <div className="bg-white/95 backdrop-blur-2xl p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md mx-4 border border-white/60 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-tr from-rose-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform rotate-3">
            <Sparkles className="text-white" size={36} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{t.loginTitle}</h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">{t.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">{t.email}</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400"
              placeholder="admin"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">{t.password}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            {t.loginBtn}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">© 2024 BeautyPro Merchant Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Login;