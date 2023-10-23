import './App.css'
import NaviBar from './components/navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects';
import Banner from './components/banner';


function App() {

  return (
    <div id='page-container'>
      <NaviBar/>
      <div id='content-wrap'>
        <Banner/>
        <Projects/>
      </div>
      <footer id="footr">
        <a href="#">Contact us</a>
        <a href="#">Who we are</a>
      </footer>
    </div>

  )
}

export default App
