import './App.css'
import NaviBar from './components/navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects';
import Banner from './components/banner';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  StickyIn,
  Fade,
  Sticky,
  MoveOut,
  FadeIn,
  ZoomIn
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(),FadeIn(),ZoomIn())
function App() {

  return (
    <div id='page-container'>
      <NaviBar/>
      <div id='content-wrap'>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))}>
              <Banner/>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(ZoomInScrollOut)}>
              <Projects/>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
      <footer id="footr">
        <a href="#">Contact us</a>
        <a href="#">Who we are</a>
      </footer>
    </div>

  )
}

export default App
