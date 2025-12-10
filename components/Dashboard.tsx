import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  Globe,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingBag,
  Sparkles,
  Heart
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Language, Product, Review } from '../types';
import { TRANSLATIONS, MOCK_PRODUCTS, MOCK_REVIEWS, MOCK_SALES_DATA, MOCK_CATEGORY_DATA } from '../constants';

interface DashboardProps {
  onLogout: () => void;
  lang: Language;
  toggleLang: () => void;
}

type Tab = 'overview' | 'products' | 'feedback';

// Updated Color Palette for Beauty Theme
const COLORS = ['#ec4899', '#a855f7', '#f472b6', '#c084fc'];

const Dashboard: React.FC<DashboardProps> = ({ onLogout, lang, toggleLang }) => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  // Helper component for Navigation Items
  const NavItem = ({ tab, icon: Icon, label }: { tab: Tab; icon: any; label: string }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setIsSidebarOpen(false);
      }}
      className={`flex items-center w-full px-6 py-4 transition-all duration-200 group ${
        activeTab === tab 
          ? 'bg-rose-50 text-rose-600 border-r-4 border-rose-600' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon size={20} className={`mr-3 transition-transform group-hover:scale-110 ${activeTab === tab ? 'text-rose-600' : 'text-gray-400'}`} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-2xl lg:shadow-none border-r border-gray-100 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-center h-20 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-rose-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">BeautyPro</span>
            </div>
          </div>

          <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
            <NavItem tab="overview" icon={LayoutDashboard} label={t.dashboard} />
            <NavItem tab="products" icon={Package} label={t.products} />
            <NavItem tab="feedback" icon={Heart} label={t.feedback} />
            <button className="flex items-center w-full px-6 py-4 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors group">
              <Settings size={20} className="mr-3 text-gray-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{t.settings}</span>
            </button>
          </nav>

          <div className="p-4 border-t border-gray-100">
            <button 
              onClick={onLogout}
              className="flex items-center w-full px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              <LogOut size={20} className="mr-3" />
              <span className="font-medium">{t.logout}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f8fafc]">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 border-b border-gray-100 h-20 flex items-center justify-between px-6 z-10 transition-shadow hover:shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-xl font-bold text-gray-800 hidden md:block tracking-tight">
              {activeTab === 'overview' ? t.dashboard : activeTab === 'products' ? t.products : t.feedback}
            </h2>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors bg-gray-50 border border-gray-200 hover:border-rose-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide"
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'EN' : '中'}</span>
            </button>

            <div className="relative hidden md:block">
              <Bell size={20} className="text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="h-9 w-9 rounded-full ring-2 ring-rose-100 object-cover"
              />
              <div className="hidden md:block">
                <p className="text-xs text-gray-400 uppercase font-semibold">Merchant</p>
                <p className="text-sm font-bold text-gray-700">Sophie Beauty</p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8">
            {activeTab === 'overview' && (
              <div className="animate-fade-in space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard 
                    title={t.totalSales} 
                    value="¥ 124,500" 
                    trend="+12.5%" 
                    icon={<DollarSign className="text-white" size={24} />}
                    color="bg-gradient-to-br from-rose-400 to-rose-600"
                    shadow="shadow-rose-200"
                  />
                  <StatCard 
                    title={t.totalOrders} 
                    value="1,482" 
                    trend="+5.2%" 
                    icon={<ShoppingBag className="text-white" size={24} />}
                    color="bg-gradient-to-br from-purple-400 to-purple-600"
                    shadow="shadow-purple-200"
                  />
                  <StatCard 
                    title={t.visitors} 
                    value="8,540" 
                    trend="+18.7%" 
                    icon={<Users className="text-white" size={24} />}
                    color="bg-gradient-to-br from-indigo-400 to-indigo-600"
                    shadow="shadow-indigo-200"
                  />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-lg font-bold text-gray-800">{t.salesTrend}</h3>
                      <select className="text-sm border-none bg-gray-50 rounded-lg px-3 py-1 text-gray-600 focus:ring-0">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                      </select>
                    </div>
                    <div className="h-[320px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MOCK_SALES_DATA}>
                          <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#94a3b8', fontSize: 12}} 
                            dy={10} 
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#94a3b8', fontSize: 12}} 
                          />
                          <Tooltip 
                            contentStyle={{ 
                              borderRadius: '12px', 
                              border: 'none', 
                              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                              padding: '12px'
                            }}
                            cursor={{stroke: '#f472b6', strokeWidth: 1, strokeDasharray: '5 5'}}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="sales" 
                            stroke="#ec4899" 
                            strokeWidth={3} 
                            fillOpacity={1} 
                            fill="url(#colorSales)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{t.hotCategories}</h3>
                    <p className="text-sm text-gray-400 mb-8">Revenue breakdown by type</p>
                    <div className="flex-1 min-h-[250px] relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={MOCK_CATEGORY_DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={5}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                            cornerRadius={6}
                          >
                            {MOCK_CATEGORY_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* Center Text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-bold text-gray-800">100%</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">Total</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      {MOCK_CATEGORY_DATA.map((entry, index) => (
                        <div key={entry.name} className="flex items-center text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
                          <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                          {entry.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
                <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.productManagement}</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage your inventory and stock levels</p>
                  </div>
                  <div className="relative w-full sm:w-72 group">
                    <input 
                      type="text" 
                      placeholder={t.searchPlaceholder}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-rose-500/20 text-sm transition-all group-hover:bg-gray-100"
                    />
                    <Search className="absolute left-4 top-3 text-gray-400" size={18} />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                        <th className="px-8 py-5 rounded-tl-3xl">Product Info</th>
                        <th className="px-6 py-5">{t.category}</th>
                        <th className="px-6 py-5">{t.price}</th>
                        <th className="px-6 py-5">{t.stock}</th>
                        <th className="px-6 py-5">{t.status}</th>
                        <th className="px-8 py-5 rounded-tr-3xl text-right">{t.action}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {MOCK_PRODUCTS.map((product) => (
                        <tr key={product.id} className="group hover:bg-rose-50/30 transition-colors">
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-xl bg-gray-100 p-1 border border-gray-100">
                                <img src={product.image} alt={product.name} className="h-full w-full rounded-lg object-cover" />
                              </div>
                              <div>
                                <span className="block font-semibold text-gray-900 text-sm">{product.name}</span>
                                <span className="text-xs text-gray-400">ID: #{product.id}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-sm font-bold text-gray-900">¥{product.price}</td>
                          <td className="px-6 py-5 text-sm text-gray-600 font-medium">{product.stock}</td>
                          <td className="px-6 py-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border
                              ${product.status === 'active' 
                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                                : product.status === 'draft' 
                                  ? 'bg-gray-50 text-gray-500 border-gray-200' 
                                  : 'bg-rose-50 text-rose-600 border-rose-100'}`
                            }>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                product.status === 'active' ? 'bg-emerald-500' : 
                                product.status === 'draft' ? 'bg-gray-400' : 'bg-rose-500'
                              }`}></span>
                              {product.status === 'active' ? t.active : product.status === 'draft' ? t.draft : t.outStock}
                            </span>
                          </td>
                          <td className="px-8 py-5 text-right">
                            <button className="text-gray-400 hover:text-rose-600 font-medium transition-colors p-2 hover:bg-rose-50 rounded-lg">
                              <Settings size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 animate-fade-in overflow-hidden">
                <div className="p-8 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">{t.recentFeedback}</h3>
                  <p className="text-sm text-gray-500 mt-1">What your customers are saying</p>
                </div>
                <div className="divide-y divide-gray-50">
                  {MOCK_REVIEWS.map((review) => (
                    <div key={review.id} className="p-8 hover:bg-gray-50/50 transition-colors">
                      <div className="flex items-start gap-5">
                        <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full object-cover ring-4 ring-gray-50" />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">{review.user}</h4>
                              <p className="text-xs font-medium text-rose-500 mt-0.5">{review.productName}</p>
                            </div>
                            <span className="text-xs text-gray-400 mt-1 sm:mt-0">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-3 bg-orange-50 w-fit px-2 py-1 rounded-lg">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-orange-400 fill-current' : 'text-orange-200'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-xs font-bold text-orange-600">{review.rating}.0</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl rounded-tl-none inline-block">
                            "{review.comment}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, trend, icon, color, shadow }: any) => (
  <div className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-xl transition-all duration-300 group`}>
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
      <div className="flex items-center mt-3">
        <span className="text-xs font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full flex items-center gap-1">
          <TrendingUp size={12} />
          {trend}
        </span>
        <span className="text-xs text-gray-400 ml-2 font-medium">vs last week</span>
      </div>
    </div>
    <div className={`w-14 h-14 ${color} ${shadow} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
      {icon}
    </div>
  </div>
);

export default Dashboard;