export type Language = 'en' | 'zh';

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'draft' | 'out_stock';
  sales: number;
  image: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  productName: string;
}

export interface SalesData {
  name: string;
  sales: number;
  revenue: number;
  [key: string]: any;
}

export interface CategoryData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
}