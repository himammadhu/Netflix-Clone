import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, orginals, comedy, trending } from './urls';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
    </div>
  );
}

export default App;
