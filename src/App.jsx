import './app.scss'
import Hero from './Components/hero/Hero';
import Nav from './Components/Nav/Nav';

const App = () => {
  return <div>
    <section>
      <Nav/>
      <Hero/>
    </section>
    <section>Parallax</section>
    <section>Footer</section>
  </div>;
};

export default App;
