import Hero from '../components/home/Hero.jsx';
import HomeActionBar from '../components/home/HomeActionBar.jsx';
import HomeContentSection from '../components/home/HomeContentSection.jsx';
import Announcements from '../components/home/Announcements.jsx';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <HomeActionBar timeLeft={{ months: 3, days: 10, hours: 9 }} />
            <HomeContentSection />
            <Announcements />
        </div>
    );
};

export default HomePage;
