import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home' ? <HomePage /> : <ProfilePage />}
      <Footer />
    </div>
  );
};

export default App;
