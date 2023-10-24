import './App.css'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Projects from './components/projects';
import Banner from './components/banner';
import {
  ScrollContainer,
  ScrollPage
} from "react-scroll-motion";
import { Form } from 'react-bootstrap';


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
              <div className='container pt-5'>
                <div className="card-product">
                  <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537478/portfolio/Screenshot_2023-09-12_at_12.47.14_PM_sx6w2u.png"/>
                  <div className="card-product-infos">
                    <h2>SideQuests</h2>
                    <p>
                      A mobile web app where users can personalize their road trip by adding stops based on their interests.
                      One of the main challenges was figuring out a way to add stops based on user selection and having that reflected on the Mapbox api.
                    </p>
                    <a target="_blank"  rel="noreferrer" className="btn btn-flat" role="button"  href="https://github.com/mosesnjoroge/SideQuest">
                        See More
                    </a>
                  </div>
                  {/* <div className="card-product">
                    <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537478/portfolio/Screenshot_2023-09-12_at_12.47.14_PM_sx6w2u.png"/>
                    <div className="card-product-infos">
                      <h2>SideQuests</h2>
                      <p>
                        An Airbnb clone marketplace concept, where users can rent dogs for their required needs or rent out their own dogs to other users. Built with Ruby on Rails framework. Front-end re-imagined from one of the final group projects i took part in.
                      </p>
                    </div>
                  </div>
                  <div className="card-product">
                    <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537478/portfolio/Screenshot_2023-09-12_at_12.47.14_PM_sx6w2u.png"/>
                    <div className="card-product-infos">
                      <h2>SideQuests</h2>
                      <p>
                        A Dynamic web application that not only allows users to search for their favourite movies but also create a curated list of movies of interest. With a variety of user preference customization options. Built with Ruby on Rails, with postgresql db, bootstrapJS, stimulusJS.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </ScrollPage>
          <ScrollPage ScrollPage={2}>
            <div className='container pt-5'>
              <div className="card-product about-card">
                <div >
                  <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694367324/portfolio/profilephoto_efbve2.jpg" alt="Profile Photo" />
                </div>
                <div className="card-product-infos">
                  <h2>About Me</h2>
                  <p>
                    I am a Full-Stack Software Developer, with a user-centeric approach to developing software.
                    When I am not coding I can be found at the nearest gym or art gallery.
                    If I was to describe myself as a person who is also curious and eager to learn, creative thinker always looking for efficiencies, and likes to take an initiative.
                    Interested to learn more about me and work process I would love to get in touch.
                  </p>
                </div>
              </div>
            </div>
          </ScrollPage>
          <ScrollPage ScrollPage={3}>
            <div className='container pt-5'>
              <h2 className='text-center'>
                Tech skills
              </h2>
            </div>
          </ScrollPage>
        </div>
        <ScrollPage ScrollPage={4}>
          <div className='container pt-5'>
            <div>
              <h2>
                Contact me
              </h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  <p>
                    We will never share your email with anyone else.
                  </p>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <button className='btn btn-flat' type="submit">
                Submit
              </button>
            </Form>
          </div>
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
