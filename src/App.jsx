import './app.scss'
import Contact from './Components/contact/Contact';
import Hero from './Components/hero/Hero';
import Nav from './Components/Nav/Nav';
import Parallax from './Components/Parallax/Parallax';
import Projects from './Components/project/Projects';
import Mouse from './Components/Mouse/Mouse';
import { useEffect, useState } from 'react';

const App = () => {

  const [disableHover, setDisableHover] = useState(false);

  useEffect(() => {
    let timer = null;

    const handleScroll = () => {
      if (timer !== null) {
        clearTimeout(timer);
        setDisableHover(true);
      }

      timer = setTimeout(() => {
        setDisableHover(false);
      }, 500); // Adjust the timeout to your liking
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={disableHover ? 'disable-hover' : ''}>
    <Mouse/>
    <section id='homepage'>
      <Nav/>
      <Hero/>
    </section>
    <section>
      <Parallax/>
    </section>
    <section id='projects'>
      <Projects/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;