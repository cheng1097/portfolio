
//import './App.css';
import "./assets/style.css";
import Aside from './components/asside/Aside';
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";

function App() {
  return (
    <main>
      <Aside />
      <div className="main-content">
        <Navbar />
        <About />
      </div>
    </main>
  );
}

export default App;
