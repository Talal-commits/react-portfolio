import Background from './Background';
import Taskbar from './taskbar';
import PortfolioWindow from './PortfolioWindow';
import StartMenu from './StartMenu';
import { use, useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const[isWindowOpen, setIsWindowOpen] = useState(false);

  return (
    <>
      <Background onOpenWindow={() => setIsWindowOpen(true)}/>
      
      {isWindowOpen && (
        <PortfolioWindow onClose={() => setIsWindowOpen(false)} />
      )}

      <StartMenu />
      <Taskbar />
      
    </>
  );
}

export default App;