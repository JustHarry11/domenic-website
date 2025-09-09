import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
    </div>
  );

}

export default App
