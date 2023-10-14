import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>

      <nav>
        <Navbar />
      </nav>
      <section>
        <Intro />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Portfolio />
      </section>

    </>
  )
}

export default App;
