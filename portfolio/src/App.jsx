import './App.css'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Projects from './components/projects';
import Banner from './components/banner';
import {
  ScrollContainer,
  ScrollPage
} from "react-scroll-motion";


function App() {

  return (
    <ScrollContainer snap="mandatory">
      <div id='page-container'>
        <div id='content-wrap'>
          <ScrollPage ScrollPage={0}>
            <NavBar/>
            <Banner/>
          </ScrollPage>

          <ScrollPage ScrollPage={1}>
            <div className='pt-3'>
              <h2 className="text-center">
                Case Studies
              </h2>
            </div>
            <div className="card-trip">
              <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694511079/portfolio/Screenshot_2023-09-12_at_5.29.31_AM_amvykb.png" />
              <div className="card-trip-infos">
                <div type='button' >
                  Sidequests
                </div>
              </div>
            </div>
          </ScrollPage>

          <ScrollPage ScrollPage={2}>
            <div className='section-2'>
                <div className="card-trip">
                  <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694511079/portfolio/Screenshot_2023-09-12_at_5.29.31_AM_amvykb.png" />
                  <div className="card-trip-infos">
                    <div type='button' >
                      Sidequests
                    </div>
                  </div>
                </div>
            </div>
          </ScrollPage>


          <ScrollPage ScrollPage={3}>
              {/* <Projects/> */}
              <div className="card-trip">
                <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694503127/portfolio/Screenshot_2023-09-12_at_3.14.16_AM_juoxvy.png" />
                <div className="card-trip-infos">
                  <div type='button' >
                    Whoof
                  </div>
                </div>
              </div>
            {/* <Animator animation={batch(FadeIn(), FadeOut())}>
            </Animator> */}
          </ScrollPage>

          <ScrollPage ScrollPage={4}>
              {/* <Projects/> */}
            <div className="card-trip">
              <img src="https://user-images.githubusercontent.com/102884273/229380795-0fcef9dc-460f-44af-bc7b-e206538dee38.png" />
              <div className="card-trip-infos">
                <div type='button' >
                  Notes
                </div>
              </div>
            </div>
          </ScrollPage>
        </div>
        <ScrollPage>
          <footer id="footr">
            <a href="#">Contact us</a>
            <a href="#">Who we are</a>
          </footer>
        </ScrollPage>
      </div>
    </ScrollContainer>

  )
}

export default App
