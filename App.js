import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Search from './components/Search';
import FeaturedJobs from './components/FeaturedJob';
import FeaturedEmployee from './components/FeaturedEmployee';
import MobileAppSection from './components/Advertise';
import JobsLocationSection from './components/Jobs';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Search/>
      <FeaturedJobs/>
      <FeaturedEmployee/>
      <MobileAppSection/>
      <JobsLocationSection/>
    </div>
  );
}

export default App;
