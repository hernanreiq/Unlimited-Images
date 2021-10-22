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
                                    <img src={image.src.tiny} alt="mario" className="card-img" />
                                </div>
                                <div className="card-footer">
                                    <a href={image.photographer_url} target="_blank" rel="noreferrer">{image.photographer}</a>
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