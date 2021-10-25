import React, { Component } from "react";

class CardVideos extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.videos.map((video, i) => {
                    return (
                        <div className="col-md-4 my-2" key={i}>
                            <div className="card shadow">
                                <div className="card-body p-0">
                                    {/* <img src={video.src.tiny} alt="mario" className="card-img" /> */}
                                    <img src={video.image} alt="video by vimeo" className="card-img" />
                                </div>
                                <div className="card-footer bg-dark">
                                    <a href={video.user.url} target="_blank" rel="noreferrer" className="text-warning">{video.user.name}</a>
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