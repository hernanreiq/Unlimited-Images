import React, { Component } from "react";

class CardImages extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.images.photos.map((image, i) => {
                    return (
                        <div className="col-md-4 my-2" key={i}>
                            <div className="card shadow">
                                <div className="card-body p-0">
                                    <img src={image.src.tiny} alt="content by pexels" className="card-img" onClick={() => {this.props.showModal(image)}} />
                                </div>
                                <div className="card-footer bg-dark">
                                    <a href={image.photographer_url} target="_blank" rel="noreferrer" className="text-warning">{image.photographer}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </React.Fragment>
        )
    }
}

export default CardImages;