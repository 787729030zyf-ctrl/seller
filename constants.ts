import { Product, Review, SalesData, CategoryData, Language } from './types';

// Translations
export const TRANSLATIONS = {
  en: {
    loginTitle: 'Beauty Merchant Portal',
    loginSubtitle: 'Manage your cosmetics empire',
    email: 'Account ID',
    password: 'Password',
    loginBtn: 'Enter Workstation',
    dashboard: 'Store Overview',
    products: 'Cosmetics',
    feedback: 'Reviews',
    settings: 'Shop Settings',
    logout: 'Exit',
    totalSales: 'Gross Merchandise Value (GMV)',
    totalOrders: 'Total Orders',
    visitors: 'Store Visitors',
    salesTrend: 'Sales Trend (Last 7 Days)',
    hotCategories: 'Top Beauty Categories',
    recentFeedback: 'Latest Beauty Reviews',
    productManagement: 'Inventory Management',
    status: 'Status',
    price: 'Retail Price',
    stock: 'Stock',
    category: 'Category',
    action: 'Operations',
    active: 'On Shelf',
    draft: 'Warehouse',
    outStock: 'Sold Out',
    welcome: 'Hello,',
    searchPlaceholder: 'Search SKUs, product names...',
  },
  zh: {
    loginTitle: '美妆商家工作台',
    loginSubtitle: '高效管理您的美妆生意',
    email: '商家账号',
    password: '登录密码',
    loginBtn: '进入工作台',
    dashboard: '店铺概况',
    products: '美妆宝贝',
    feedback: '评价管理',
    settings: '店铺设置',
    logout: '退出系统',
    totalSales: '支付金额 (GMV)',
    totalOrders: '支付订单数',
    visitors: '访客数 (UV)',
    salesTrend: '销售趋势 (近7天)',
    hotCategories: '热门美妆品类',
    recentFeedback: '最新买家评价',
    productManagement: '宝贝列表',
    status: '商品状态',
    price: '销售价',
    stock: '库存数量',
    category: '所属类目',
    action: '操作',
    active: '出售中',
    draft: '仓库中',
    outStock: '已售罄',
    welcome: '你好，',
    searchPlaceholder: '搜索SKU、商品名称...',
  }
};

// Mock Data - Tailored for Cosmetics
export const MOCK_SALES_DATA: SalesData[] = [
  { name: 'Mon', sales: 12500, revenue: 8400 },
  { name: 'Tue', sales: 15000, revenue: 9398 },
  { name: 'Wed', sales: 18000, revenue: 12800 },
  { name: 'Thu', sales: 22000, revenue: 15908 },
  { name: 'Fri', sales: 27890, revenue: 19800 },
  { name: 'Sat', sales: 34390, revenue: 25800 },
  { name: 'Sun', sales: 31490, revenue: 23300 },
];

export const MOCK_CATEGORY_DATA: CategoryData[] = [
  { name: 'Skincare', value: 450 },
  { name: 'Makeup', value: 350 },
  { name: 'Perfume', value: 150 },
  { name: 'Tools', value: 50 },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: '101', name: 'Advanced Night Repair Serum', price: 890, stock: 1240, category: 'Skincare', status: 'active', sales: 5420, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=100&q=80' },
  { id: '102', name: 'Velvet Matte Lipstick #Ruby', price: 280, stock: 56, category: 'Makeup', status: 'active', sales: 8900, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=100&q=80' },
  { id: '103', name: 'Floral Bloom Eau de Parfum', price: 1250, stock: 0, category: 'Perfume', status: 'out_stock', sales: 340, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=100&q=80' },
  { id: '104', name: 'Hydrating Face Mask Set', price: 159, stock: 2000, category: 'Skincare', status: 'draft', sales: 0, image: 'https://zyflgj.oss-cn-beijing.aliyuncs.com/f70bfb49daaa62af702be204c12a51b3.jpg' },
  { id: '105', name: 'Professional Brush Kit', price: 499, stock: 88, category: 'Tools', status: 'active', sales: 210, image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=100&q=80' },
];

export const MOCK_REVIEWS: Review[] = [
  { id: '1', user: 'Sophie Li', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', rating: 5, comment: 'The texture of this serum is incredible. My skin feels so hydrated!', date: '2023-11-02', productName: 'Advanced Night Repair Serum' },
  { id: '2', user: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', rating: 4, comment: 'Bought this for my wife. She loves the color but says it dries a bit fast.', date: '2023-11-01', productName: 'Velvet Matte Lipstick #Ruby' },
  { id: '3', user: 'Jessica Wu', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', rating: 5, comment: 'Packaging is exquisite and the scent lasts all day. Will buy again.', date: '2023-10-30', productName: 'Floral Bloom Eau de Parfum' },
];