export type StatCard = {
  label: string;
  value: string;
  deltaPct: number;
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
