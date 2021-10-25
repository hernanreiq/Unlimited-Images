import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class PopUpVideo extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.props.showModal} animation={false} >
                    <Modal.Header className="bg-dark">
                        <Modal.Title>
                            <a href={this.props.video.user.url} target="_blank" rel="noreferrer" className="text-warning">{this.props.video.user.name}</a>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="bg-dark">
                        <video className="card-img" controls>
                            <source src={this.props.video.video_files[0].link} type={this.props.video.video_files[0].file_type} />
                        </video>
                    </Modal.Body>

                    <Modal.Footer className="bg-dark">
                        <Button variant="danger" onClick={() => { this.props.closeModal() }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default PopUpVideo;