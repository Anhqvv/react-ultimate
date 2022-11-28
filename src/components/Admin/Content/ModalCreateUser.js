import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCreateUser() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Button variant="primary" onClick={handleShow}>
            ADD NEW USER
         </Button>

         <Modal
            centered
            size="xl"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form className="row g-3">
                  <div className="col-md-6">
                     <label className="form-label">Email</label>
                     <input type="email" className="form-control" />
                  </div>
                  <div className="col-md-6">
                     <label className="form-label">Password</label>
                     <input type="password" className="form-control" />
                  </div>
                  <div className="col-6">
                     <label className="form-label">Username</label>
                     <input type="text" className="form-control" />
                  </div>

                  <div className="col-6">
                     <label className="form-label">Role</label>
                     <select className="form-select">
                        <option selected="" value="USER">
                           USER
                        </option>
                        <option value="ADMIN">ADMIN</option>
                     </select>
                  </div>
                  <div className="col-12">
                     <label className="form-label">Image</label>
                     <input type="file" />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary">Save</Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default ModalCreateUser