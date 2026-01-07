import Hero from '../components/home/Hero.jsx';
import HomeActionBar from '../components/home/HomeActionBar.jsx';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <HomeActionBar timeLeft={{ months: 3, days: 10, hours: 9 }} />
        </div>
    );
};

export default HomePage;
