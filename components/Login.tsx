import React, { useState } from 'react';
import { Sparkles, Globe, ArrowRight, User, Lock, Store } from 'lucide-react';
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
  const [isLoading, setIsLoading] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      // Simulate a network delay for a smoother UX feel
      setTimeout(() => {
        setIsLoading(false);
        onLogin();
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fff0f5]">
      {/* Sophisticated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-pink-100/60 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 bg-white/60 hover:bg-white/80 text-gray-700 px-5 py-2.5 rounded-full backdrop-blur-md transition-all text-sm font-semibold border border-white/60 shadow-sm hover:shadow-md group"
        >
          <Globe size={16} className="text-rose-500 group-hover:rotate-12 transition-transform" />
          {lang === 'en' ? 'English' : '中文'}
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-[440px] mx-4 border border-white/60 relative z-10 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)]">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-rose-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-200 transform rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105 relative z-10">
              <Store className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {t.loginTitle}
          </h1>
          <p className="text-gray-500 text-sm font-medium">{t.loginSubtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">{t.email}</label>
            <div className="relative">
              <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-rose-500 transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-rose-100 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400 shadow-sm group-hover:bg-white"
                placeholder="admin"
                required
              />
            </div>
          </div>
          
          <div className="group space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">{t.password}</label>
            <div className="relative">
               <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-rose-500 transition-colors">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-rose-100 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400 shadow-sm group-hover:bg-white"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {t.loginBtn}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
            <Sparkles size={12} className="text-rose-400" />
            <span>© 2024 BeautyPro Merchant Platform</span>
            <Sparkles size={12} className="text-rose-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;