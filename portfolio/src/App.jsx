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
                Projects
              </h2>
            </div>
            <div>
              <div className='container pt-4'>
                <div className="card-product">
                  <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537478/portfolio/Screenshot_2023-09-12_at_12.47.14_PM_sx6w2u.png"/>
                  <div className="card-product-infos">
                    <h2>SideQuests</h2>
                    <p>
                      A mobile web app where users can personalize their road trip by adding stops based on their interests.
                      One of the main challenges was figuring out a way to add stops based on user selection and having that reflected on the Mapbox api.
                    </p>
                  </div>
                </div>
              </div>
              <div className='project-card-img'>
                {/* <img  style={{height:  "300px"}} src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537478/portfolio/Screenshot_2023-09-12_at_12.47.14_PM_sx6w2u.png"/> */}
                {/* <img  style={{height:  "200px"}} src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537476/portfolio/Screenshot_2023-09-12_at_12.47.43_PM_ep5ojc.png"/> */}
                {/* <img  style={{height:  "200px"}} src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537477/portfolio/Screenshot_2023-09-12_at_12.49.18_PM_crikxa.png"/> */}
              </div>
                {/* <!-- SideQuest carousel --> */}
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
