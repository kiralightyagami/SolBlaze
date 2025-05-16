import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileNavigation from './components/MobileNavigation';
import Overview from './views/Overview';
import GrowthMetrics from './views/GrowthMetrics';
import DefiUsage from './views/DefiUsage';
import Strategies from './views/Strategies';
import Transactions from './views/Transactions';
import Validators from './views/Validators';
import AIAssistant from './components/AIAssistant/AIAssistant';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'growth':
        return <GrowthMetrics />;
      case 'defi':
        return <DefiUsage />;
      case 'strategies':
        return <Strategies />;
      case 'transactions':
        return <Transactions />;
      case 'validators':
        return <Validators />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="flex-1 p-4 md:p-6">
            <div className="md:hidden mb-4 flex items-center justify-between">
              <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
              <h1 className="text-xl font-bold">
                {activeTab === 'overview' && 'Dashboard'}
                {activeTab === 'growth' && 'Growth Metrics'}
                {activeTab === 'defi' && 'DeFi Usage'}
                {activeTab === 'strategies' && 'Strategies'}
                {activeTab === 'transactions' && 'Transactions'}
                {activeTab === 'validators' && 'Validators'}
              </h1>
            </div>
            
            {renderTabContent()}
          </main>
        </div>
        
        <AIAssistant />
      </div>
    </div>
  );
}

export default App;