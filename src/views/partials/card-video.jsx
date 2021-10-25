import React, { Component } from "react";

class CardVideos extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.videos.map((video, i) => {
                    return (
                        <div className="col-md-4 my-2" key={i}>
                            <div className="card shadow">
                                <div className="card-header bg-dark">
                                    <a href={video.user.url} target="_blank" rel="noreferrer" className="text-warning">{video.user.name}</a>
                                </div>
                                <div className="card-body p-0">
                                    <img src={video.image} alt="content by pexels" className="card-img"/>
                                </div>
                                <div className="card-footer bg-dark">
                                    <button className="btn btn-success d-block w-100" onClick={() => {this.props.showModal(video)}} >Play</button>
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

export default CardVideos;