
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SideSearch from './components/searchSidebar/SideSearch';

function App() {
  const [isSideSearch,setIsSideSearch] = useState(false)
  return (
    <>
      
    <Navbar sideSearchView={(isSideSearch) => setIsSideSearch(isSideSearch)}/>
    {isSideSearch?<SideSearch sideSearchView={(isSideSearch) => setIsSideSearch(isSideSearch)}/>:null}

    </>
  );
}

export default App;
