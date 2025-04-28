import React from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart3, 
  Calculator, 
  Search,
  Shield
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'growth', label: 'Growth Metrics', icon: <TrendingUp size={20} /> },
    { id: 'defi', label: 'DeFi Usage', icon: <BarChart3 size={20} /> },
    { id: 'strategies', label: 'Strategies', icon: <Calculator size={20} /> },
    { id: 'transactions', label: 'Transactions', icon: <Search size={20} /> },
    { id: 'validators', label: 'Validators', icon: <Shield size={20} /> }
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 hidden md:block transition-colors duration-200">
      <div className="p-4 pt-8">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className={`${
                    activeTab === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="ml-3 font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;