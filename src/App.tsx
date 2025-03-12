import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [showContacts, setShowContacts] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    setFormValid(formData.fullname !== '' && formData.email !== '' && formData.message !== '');
  }, [formData]);

  return (
    <main className="min-h-screen bg-[#111111] text-white p-4 md:p-8 lg:p-15">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar showContacts={showContacts} toggleContacts={() => setShowContacts(!showContacts)} />
        <div className="flex-1 relative">
          <Navigation activePage={activePage} setActivePage={setActivePage} />
          {activePage === 'about' && <About />}
          {activePage === 'resume' && <Resume />}
          {activePage === 'contact' && (
            <Contact 
              formData={formData} 
              handleInputChange={handleInputChange} 
              formValid={formValid} 
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
