import React from 'react';

type NavigationProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  return (
    <nav className="bg-[rgba(30,30,31,0.75)] backdrop-blur-md border border-[#333] rounded-t-[20px] fixed bottom-0 left-0 w-full z-10 lg:absolute lg:bottom-auto lg:top-0 lg:right-0 lg:left-auto lg:w-auto lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:rounded-tl-none">
      <ul className="flex justify-center flex-wrap lg:gap-8 p-2">
        {['about', 'resume', 'contact'].map((page) => (
          <li key={page} className="navbar-item">
            <button 
              className={`px-2 py-5 text-xs md:text-sm lg:text-base lg:font-medium ${activePage === page ? 'text-[#f5c45a]' : 'text-[#aaa] hover:text-[#ccc]'} transition-colors`}
              onClick={() => setActivePage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
