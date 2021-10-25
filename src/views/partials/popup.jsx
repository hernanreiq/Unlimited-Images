import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class PopUp extends Component {
    showData = () => {
        console.log(this.props.image);
    }

    render() {
        return (
            <React.Fragment>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.props.showModal} animation={false} >
                    <Modal.Header className="bg-dark">
                        <Modal.Title>
                            <a href={this.props.image.photographer_url} target="_blank" rel="noreferrer" className="text-warning">{this.props.image.photographer}</a>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="bg-dark">
                        <img src={this.props.image.src.original} alt="content by pexels" className="card-img" />
                    </Modal.Body>

                    <Modal.Footer className="bg-dark">
                        <Button variant="danger" onClick={() => { this.props.closeModal() }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default PopUp;