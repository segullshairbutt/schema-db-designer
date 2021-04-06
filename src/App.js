import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import Sidebar from "./components/Sidebar/Sidebar";

import './App.css';
import Canvas from "./components/Canvas/Canvas";

function App() {
  const [sidebar, setSidebar] = React.useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  
  const [grid, setGrid] = React.useState(true);
  const toggleGrid = () => setGrid(!grid);
  
  return (
    <main>
      
      <Toolbar toggleSidebar={toggleSidebar} toggleGrid={toggleGrid} status={sidebar}/>
      <Sidebar status={sidebar} />
      <Canvas sidebar={sidebar} grid={grid} />
    </main>
  );
}

export default App;
