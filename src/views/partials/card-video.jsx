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
                                    <video className="card-img" controls>
                                        <source src={video.video_files[0].link} type={video.video_files[0].file_type} />
                                    </video>
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