import React from 'react';
import './App.css';
import MostPopularList from './components/MostPopular/MostPopularList';
import TopStories from './components/TopStories/TopStories';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <div className='container'>
        <Nav />
        <TopStories section='fashion' />
        <MostPopularList category='viewed' emoji='👀' label='eyes' />
        <TopStories section='tmagazine' />
        <MostPopularList category='emailed' emoji='📧' label='email' />
        <TopStories section='technology' />
        <MostPopularList category='shared' emoji='🔗' label='link' />
        <TopStories section='insider' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
