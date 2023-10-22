

export default function Projects() {
  return(
    <div>
      <div>
        <h2>
          Case Studies
        </h2>
        <div className="highlight-projects" style="background-color: #FEA330;">
        <div style="margin-left: 8px;">
          <h1>Case Studies</h1>
        </div>
        <!-- Project cards -->
        <div class="cards">
          <div className="card-category"
            style="
              background-image:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
              url(https://res.cloudinary.com/dtxxea3qi/image/upload/v1694511079/portfolio/Screenshot_2023-09-12_at_5.29.31_AM_amvykb.png)">
            <!-- Button trigger modal -->
            <div className="project-btn"type="button"
              data-bs-toggle="modal"
              data-bs-target="#sidequestModal">
              SideQuest
            </div>
            <!--  Sidequest Modal -->
            <div className="modal fade" id="sidequestModal" tabindex="-1" aria-labelledby="sidequestModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 navbar-brand" id="sidequestModalLabel">
                      SideQuests
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body banner mt-0">
                    <div className="cards">
                      <!-- SideQuest carousel -->
                      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style="width: fit-content;">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="card-category d-block" style="height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537478/portfolio/Screenshot_2023-09-12_at_12.47.14_PM_sx6w2u.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537476/portfolio/Screenshot_2023-09-12_at_12.47.43_PM_ep5ojc.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537477/portfolio/Screenshot_2023-09-12_at_12.49.18_PM_crikxa.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category" style="height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694537477/portfolio/Screenshot_2023-09-12_at_12.49.18_PM_crikxa.png"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <!-- project mini description -->
                      <p className="banner-header">
                        A mobile web app where users can personalize their road trip by adding stops based on their interests.
                        One of the main challenges was figuring out a way to add stops based on user selection and having that reflected on the Mapbox api.
                      </p>
                      <a target="_blank" className="btn btn-flat" role="button"  href="https://github.com/mosesnjoroge/SideQuest">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Whoof project card -->
          <div className="card-category"
            style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(https://res.cloudinary.com/dtxxea3qi/image/upload/v1694503127/portfolio/Screenshot_2023-09-12_at_3.14.16_AM_juoxvy.png)">
            <!-- Button trigger modal -->
            <div className="project-btn" type="button"
              data-bs-toggle="modal"
              data-bs-target="#whoofModal">WHOOF
            </div>
            <!-- Whoof Modal -->
            <div className="modal fade" id="whoofModal" tabindex="-1" aria-labelledby="whoofModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 navbar-brand" id="whoofModalLabel">
                      Whoof
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body banner mt-0">
                    <div className="cards">
                      <!-- whoof carousel -->
                      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694503127/portfolio/Screenshot_2023-09-12_at_3.14.16_AM_juoxvy.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/c_scale,w_503/v1694503138/portfolio/Screenshot_2023-09-12_at_3.14.44_AM_cbuyuq.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694503133/portfolio/Screenshot_2023-09-12_at_3.14.37_AM_fivk3b.png"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <!-- project mini description -->
                      <p className="banner-header">
                        An Airbnb clone marketplace concept, where users can rent dogs for their required needs or rent out their own dogs to other users. Built with Ruby on Rails framework. Front-end re-imagined from one of the final group projects i took part in.
                      </p>

                      <a target="_blank" className="btn btn-flat" role="button" href="https://github.com/mosesnjoroge/WHOOF-">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Notes project card -->
          <div className="card-category"
            style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(https://user-images.githubusercontent.com/102884273/229380795-0fcef9dc-460f-44af-bc7b-e206538dee38.png)">
            <!-- Button trigger modal -->
            <div className="project-btn" type="button"
              data-bs-toggle="modal"
              data-bs-target="#notesappModal">
              Notes
            </div>
            <!-- Notes Modal -->
            <div className="modal fade" id="notesappModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 navbar-brand" id="notesappModalLabel">
                      Notes App
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body banner mt-0">
                    <div className="cards">
                      <!-- caousel -->
                      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner container">
                          <div className="carousel-item active">
                            <img className="card-category d-block" style="width: 420px; height: 200px;" src="https://user-images.githubusercontent.com/102884273/229380793-d5ccf618-3e1e-41f6-b60e-5e751198898a.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://user-images.githubusercontent.com/102884273/229380795-0fcef9dc-460f-44af-bc7b-e206538dee38.png"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div>
                       <!-- project mini description -->
                      <p className="banner-header">
                        A personal notes app built purely with for reactJs with use of local storage as back-end storage.
                      </p>

                      <a target="_blank" className="btn btn-flat" role="button" href="https://github.com/mosesnjoroge/react-notes-app">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Watch List Project card -->
          <div className="card-category"
            style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(https://user-images.githubusercontent.com/102884273/216784234-c721e291-8199-49c2-8e5f-ebb975923e8f.png)">
            <!-- Button trigger modal -->
            <div className="project-btn" type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchlistModal">
              Watch List
            </div>
            <!-- Watch List Modal -->
            <div className="modal fade" id="watchlistModal" tabindex="-1" aria-labelledby="watchlistModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 navbar-brand" id="watchlistModalLabel">
                      Watch List
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body banner mt-0">
                    <!-- photo carousel -->
                    <div className="cards">
                      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner container">
                          <div className="carousel-item active">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://user-images.githubusercontent.com/102884273/216784230-ed424e6a-e726-4b86-ad7c-3b5a38c86dcf.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://user-images.githubusercontent.com/102884273/216784234-c721e291-8199-49c2-8e5f-ebb975923e8f.png"/>
                          </div>
                          <div className="carousel-item">
                            <img className="card-category d-block" style="width: 420px; height: 200px" src="https://user-images.githubusercontent.com/102884273/216784235-d1ea609a-9356-4b29-b271-f26456d388cc.png"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <!-- project mini description -->
                      <p className="banner-header mt-2">
                        A Dynamic web application that not only allows users to search for their favourite movies but also create a curated list of movies of interest. With a variety of user preference customization options. Built with Ruby on Rails, with postgresql db, bootstrapJS, stimulusJS.
                      </p>
                      <a target="_blank" className="btn btn-flat" role="button" href="https://github.com/mosesnjoroge/rails-watch-list">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tech Stacks banner -->
        <div className="techskills-banner container">
          <div>
            <h1>Technical Skills</h1>
          </div>
          <div className="cards">
            <div>
              <h3>Front-end</h3>
              CSS, HTML, Javascript, StimulusJS, Bootstrap, React, Ruby on Rails
            </div>
            <div>
              <h3>Back-end</h3>
              Ruby, Python, SQlite, PostgreSQL
            </div>
            <div>
              <h3>Tools</h3>
              Figma, Mapbox, Heroku, Git, Cloudinary
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
