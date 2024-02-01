import { BrowserRouter } from 'react-router-dom';
import { About, Contact, DancingLines, Experience,Hero, Navbar, Tech, Works } from './components';
import { StarsCanvas } from './components/canvas';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from './components/Footer';

library.add(fab);

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div 
          // className='bg-cover bg-nop-repeat bg-center'
          className='relative z-0'
        >
          <Hero />
          <DancingLines />
          <StarsCanvas />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
      
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
