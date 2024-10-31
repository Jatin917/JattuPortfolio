import './app.scss'
import Contact from './Components/contact/Contact';
import Hero from './Components/hero/Hero';
import Nav from './Components/Nav/Nav';
import Parallax from './Components/Parallax/Parallax';
import Projects from './Components/project/Projects';
import Mouse from './Components/Mouse/Mouse';
import { useEffect, useState } from 'react';
// import { properties } from '../../react-expandable-card-v1/src/constants/data';
import Card from './Components/Card/Card';
import { properties } from './constants/data';

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
    {/* <section>
      <Parallax/>
    </section> */}
    <section id="projects">
    <div className="properties">
        {properties.map((item) => (
          <>
          <Card data={item} key={item.id} />
          </>
        ))}
      </div>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;