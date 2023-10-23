// import { scroll } from "framer-motion";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react';
// import Project from './projectComponents/project';
// find an animation to display each project instead of modal
export default function Projects() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return(
    <div>
      <div className="container pb-3">
        <h2 className="text-center">
          Case Studies
        </h2>
        {/* <Project/> */}
        <div className="project-cards">
          <div className="card-trip">
            <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694511079/portfolio/Screenshot_2023-09-12_at_5.29.31_AM_amvykb.png" />
            <div className="card-trip-infos">
              <div type='button' >
                Sidequests
              </div>
            </div>
          </div>


          <div className="card-trip">
            <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694503127/portfolio/Screenshot_2023-09-12_at_3.14.16_AM_juoxvy.png" />
            <div className="card-trip-infos">
              <div type='button' >
                Whoof
              </div>
            </div>
          </div>

          <div className="card-trip">
            <img src="https://user-images.githubusercontent.com/102884273/229380795-0fcef9dc-460f-44af-bc7b-e206538dee38.png" />
            <div className="card-trip-infos">
              <div type='button' >
                Notes
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
