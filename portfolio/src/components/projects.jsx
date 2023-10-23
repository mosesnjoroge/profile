// import { scroll } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function Projects() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <div className="container pb-3">
        <h2 className="text-center">
          Case Studies
        </h2>
        <div className="project-cards">
          <div className="card-trip">
            <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694511079/portfolio/Screenshot_2023-09-12_at_5.29.31_AM_amvykb.png" />
            <div className="card-trip-infos">
              <div type='button' onClick={handleShow}>
                Sidequests
              </div>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="banner-header">
                A mobile web app where users can personalize their road trip by adding stops based on their interests.
                One of the main challenges was figuring out a way to add stops based on user selection and having that reflected on the Mapbox api.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="card-trip">
            <img src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694503127/portfolio/Screenshot_2023-09-12_at_3.14.16_AM_juoxvy.png" />
            <div className="card-trip-infos">
              <div type='button' onClick={handleShow}>
                Whoof
              </div>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="banner-header">
                An Airbnb clone marketplace concept, where users can rent dogs for their required needs or rent out their own dogs to other users. Built with Ruby on Rails framework. Front-end re-imagined from one of the final group projects i took part in.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="card-trip">
            <img src="https://user-images.githubusercontent.com/102884273/229380795-0fcef9dc-460f-44af-bc7b-e206538dee38.png" />
            <div className="card-trip-infos">
              <div type='button' onClick={handleShow}>
                Notes
              </div>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <p className="banner-header">
              A personal notes app built purely with for reactJs with use of local storage as back-end storage.
              </p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
