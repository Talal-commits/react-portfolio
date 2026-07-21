import Background from './Background';
import Taskbar from './taskbar';
import PortfolioWindow from './PortfolioWindow';
import { use, useState } from 'react';

function App() {

  const[isWindowOpen, setIsWindowOpen] = useState(false);

  return (
    <>
      <Background onOpenWindow={() => setIsWindowOpen(true)}/>
      
      {isWindowOpen && (
        <PortfolioWindow onClose={() => setIsWindowOpen(false)} />
      )}

      <Taskbar />
      
    </>
  );
}

export default App;