export type StatCard = {
  label: string;
  value: string; // 已格式化的展示字符串,如 "$1,284,300"
  deltaPct: number; // 环比百分比,正负
};

export type MonthlyRevenuePoint = {
  month: string;
  revenue: number;
  profit: number;
};

export type CategorySalesPoint = {
  category: string;
  sales: number;
};

export type DashboardData = {
  stats: StatCard[];
  monthlyRevenue: MonthlyRevenuePoint[];
  categorySales: CategorySalesPoint[];
};
