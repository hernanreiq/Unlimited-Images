import React, { Component } from "react";
import CardVideos from "./partials/card-video";
import Pagination from "./partials/pagination";
import { getVideos } from "./helpers/pexels";
import PopUpVideo from "./partials/popup/popup-video";

class Videos extends Component {
    state = {
        videos: '',
        videoClicked: {},
        show: false
    }

    getVideo = () => {
        getVideos(this.props.page).then(res => {
            this.setState({
                videos: res
            });
        });
    }

    componentDidMount() {
        this.getVideo();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.page !== this.props.page) {
            this.getVideo();
        }
    }

    showModal = (video) => {
        this.setState({
            videoClicked: video,
            show: true
        })
    }

    closeModal = () => {
        this.setState({
            videoClicked: {},
            show: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <div className="row">
                            {this.state.videos &&
                                <CardVideos videos={this.state.videos} showModal={this.showModal} />
                            }
                        </div>
                    </div>
                    <Pagination content={this.props.contentPage} page={this.props.page} />
                    {this.state.show &&
                        <PopUpVideo video={this.state.videoClicked} showModal={this.state.show} closeModal={this.closeModal} />
                    }
                </main>
            </React.Fragment>
        )
    }
}

export default Videos;