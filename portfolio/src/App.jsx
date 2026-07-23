import Background from './Background';
import Taskbar from './taskbar';
import PortfolioWindow from './PortfolioWindow';
import StartMenu from './StartMenu';
import ContactForm from './ContactForm';
import { use, useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  return (
    <>
      <Background onOpenWindow={() => setIsWindowOpen(true)}/>
      
      {isWindowOpen && (
        <PortfolioWindow onClose={() => setIsWindowOpen(false)} />
      )}

      
      <Taskbar onToggleStartMenu={() => setIsStartMenuOpen(!isStartMenuOpen)} />
        {isStartMenuOpen && (
          <StartMenu onClose={() => setIsStartMenuOpen(false)} onOpenContact={() => setIsContactOpen(true)} />
        )}
      

      <ContactForm title={"Project Categories"} categories={["Email: real.talal2025@gmail.com"]} />
    </>
  );
}

export default App;