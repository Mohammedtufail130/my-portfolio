import React from 'react';
import { Mail, Phone as PhonePortrait, Calendar, MapPin, Facebook, Instagram, ChevronDown, Linkedin, Github, Twitter } from 'lucide-react';

type SidebarProps = {
  showContacts: boolean;
  toggleContacts: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ showContacts, toggleContacts }) => {
  return (
    <aside className={`bg-[#1e1e1f] border border-[#333] rounded-[20px] p-4 md:p-8 ${showContacts ? 'max-h-[700px]' : 'max-h-[260px]'} transition-all duration-500 overflow-hidden lg:sticky lg:top-[60px] lg:max-h-max lg:w-[350px]`}>
      <div className="flex flex-row lg:flex-col items-center gap-4 relative">
        <div className="bg-gradient-to-br from-[#404042] to-[#313133] rounded-[20px] p-2">
          <img 
            src="/my-portfolio/pic.png" 
            alt="Mohammed Tufail" 
            className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-[18px] object-cover" 
          />
        </div>
        
        <div className="info-content">
          <h1 className="text-white text-xl md:text-2xl font-medium mb-2 lg:text-center">Mohammed Tufail Ahamed</h1>
          <p className="bg-[#2b2b2c] text-white text-xs md:text-sm py-1 px-3 rounded-lg inline-block lg:mx-auto">
          Web Developer & Creative Problem Solver
          </p>
        </div>
        
        <button 
          className="absolute top-0 right-0 bg-gradient-to-br from-[#404042] to-[#313133] text-[#f5c45a] p-3 rounded-bl-[15px] lg:hidden"
          onClick={toggleContacts}
        >
          <span className="hidden md:block text-sm">Show Contacts</span>
          <ChevronDown className="md:hidden" size={18} />
        </button>
      </div>
      
      <div className={`sidebar-info-more mt-4 ${showContacts ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-500`}>
        <div className="h-[1px] bg-[#333] my-4"></div>
        
        <ul className="space-y-4 lg:space-y-6">
          <li className="flex items-center gap-4">
            <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[#aaa] text-xs uppercase">Email</p>
              <a href="mailto:tufailmuhammed031@gmail.com" className="text-white text-sm md:text-base">Tufail@gmail.com</a>
            </div>
          </li>
          
          <li className="flex items-center gap-4">
            <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
              <PhonePortrait size={18} />
            </div>
            <div>
              <p className="text-[#aaa] text-xs uppercase">Phone</p>
              <a href="tel:+911234567890" className="text-white text-sm md:text-base">+91 8050013741</a>
            </div>
          </li>
          
          <li className="flex items-center gap-4">
            <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[#aaa] text-xs uppercase">Birthday</p>
              <time className="text-white text-sm md:text-base">1 sep, 1999</time>
            </div>
          </li>
          
          <li className="flex items-center gap-4">
            <div className="relative bg-gradient-to-br from-[#404042] to-[#313133] w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-lg flex items-center justify-center text-[#f5c45a]">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[#aaa] text-xs uppercase">Location</p>
              <address className="text-white text-sm md:text-base not-italic">Bangalure, India</address>
            </div>
          </li>
        </ul>
        
        <div className="h-[1px] bg-[#333] my-4"></div>
        
        <ul className="flex gap-4 pl-2">
          <li>
            <a href="#" className="text-[#aaa] hover:text-white transition-colors">
              <Facebook size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tufail-ahamed-4121601b9/" className="text-[#aaa] hover:text-white transition-colors">
              <Linkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tufail_ahmed___/" className="text-[#aaa] hover:text-white transition-colors">
              <Instagram size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Mohammedtufail130" className="text-[#aaa] hover:text-white transition-colors">
              <Github size={30} />
            </a>
          </li>
          <li>
            <a href="#" className="text-[#aaa] hover:text-white transition-colors">
              <Twitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
