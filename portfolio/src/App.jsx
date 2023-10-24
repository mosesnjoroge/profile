import './App.css'
import NaviBar from './components/navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects';
import Banner from './components/banner';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn,Sticky} from "react-scroll-motion";

function App() {

  return (
    <div id='page-container'>
      <NaviBar/>
      <div id='content-wrap'>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), FadeIn())}>
              <Banner/>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
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
