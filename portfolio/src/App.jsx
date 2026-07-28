import Background from './Background';
import Taskbar from './taskbar';
import PortfolioWindow from './PortfolioWindow';
import StartMenu from './StartMenu';
import ContactForm from './ContactForm';
import About from './About';
import { use, useState } from 'react';
import Resume from './Resume';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Background 
        onOpenWindow={() => setIsWindowOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
      
      {isWindowOpen && (
        <PortfolioWindow onClose={() => setIsWindowOpen(false)} />
      )}

      
      <Taskbar onToggleStartMenu={() => setIsStartMenuOpen(!isStartMenuOpen)} />
        {isStartMenuOpen && (
          <StartMenu onClose={() => setIsStartMenuOpen(false)} onOpenContact={() => setIsContactOpen(true)} />
        )}
      

      {isContactOpen && (
        <ContactForm title={"Project Categories"} categories={["Email: real.talal2025@gmail.com"]} onClose={() => setIsContactOpen(false)} />
      )}

      {isAboutOpen && <About onClose={() => setIsAboutOpen(false)} />}
      {isResumeOpen && <Resume onClose={() => setIsResumeOpen(false)} />}
    </>
  );
}

export default App;