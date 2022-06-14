import NavBar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Reviews from './components/reviews/Reviews'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment } from 'react'

const App = () => {
  AOS.init();
  return (
    <Fragment>
      <div className='bg'>
        <div className='bg-circle-1'></div>
        <div className='bg-circle-2'></div>
        <div className='bg-circle-3'></div>
        <div className='bg-circle-4'></div>
      </div>
      <NavBar />
      <div className="wrapper">
        <Home />
        <Skills />
        <Portfolio />
        <Reviews />
        <Contacts />
        <Footer />
      </div>
    </Fragment>
    
  );
};

export default App;
