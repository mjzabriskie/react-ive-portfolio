import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InfoModal = (project) => {
  const {
    project: { title },
    project: { img },
    project: { deployed },
    project: { git },
  } = project;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-custom p-0" onClick={handleShow}>
        <img src={img} alt={title} className="card-style w-100" />
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-between" closeButton>
        <div></div>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Description of project will be here in future versions of the portfolio</Modal.Body> */}
        <Modal.Footer className="justify-content-center">
            <Button
              variant="dark"
              className="me-3"
              onClick={() => {
                handleClose();
                window.open(deployed, "_blank");
              }}
            >
              Deployed Site
            </Button>
            <Button
              variant="dark"
              className="ms-3"
              onClick={() => {
                handleClose();
                window.open(git, "_blank");
              }}
            >
              GitHub Repo
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoModal;
