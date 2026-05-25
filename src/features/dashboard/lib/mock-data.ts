import type { DashboardData } from './types';

export const dashboardMock: DashboardData = {
  stats: [
    { label: 'Total Revenue', value: '$1,284,300', deltaPct: 12.5 },
    { label: 'Orders', value: '8,742', deltaPct: 8.2 },
    { label: 'Avg. Order Value', value: '$147', deltaPct: 3.1 },
    { label: 'Conversion Rate', value: '3.8%', deltaPct: -0.4 }
  ],
  monthlyRevenue: [
    { month: 'Jan', revenue: 82000, profit: 23400 },
    { month: 'Feb', revenue: 91000, profit: 26800 },
    { month: 'Mar', revenue: 104000, profit: 31200 },
    { month: 'Apr', revenue: 98000, profit: 28100 },
    { month: 'May', revenue: 112000, profit: 34600 },
    { month: 'Jun', revenue: 121000, profit: 37900 },
    { month: 'Jul', revenue: 118000, profit: 35200 },
    { month: 'Aug', revenue: 132000, profit: 41800 },
    { month: 'Sep', revenue: 127000, profit: 39500 },
    { month: 'Oct', revenue: 141000, profit: 44200 },
    { month: 'Nov', revenue: 156000, profit: 49700 },
    { month: 'Dec', revenue: 168000, profit: 53100 }
  ],
  categorySales: [
    { category: 'Apparel', sales: 412000 },
    { category: 'Electronics', sales: 368000 },
    { category: 'Home', sales: 254000 },
    { category: 'Beauty', sales: 198000 },
    { category: 'Food', sales: 142000 }
  ]
};
