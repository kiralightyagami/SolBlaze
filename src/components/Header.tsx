import React from 'react';
import { Sun, Moon, Flame, Github, Twitter, Linkedin } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Flame className="h-8 w-8 text-amber-500" />
          <div className="ml-3 flex flex-col">
            <span className="font-bold text-xl text-gray-900 dark:text-white">SolBlaze</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Liquid Staking Analytics</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/kiralightyagami/SolBlaze" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white" />
          </a>
          <a 
            href="https://x.com/ShrivasAsvin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white" />
          </a>
          <a 
            href="https://www.linkedin.com/in/asvin-shrivas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white" />
          </a>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;