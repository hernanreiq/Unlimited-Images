import React, { Component } from "react";
import CardVideos from "./partials/card-video";
import Pagination from "./partials/pagination";
import { getVideos } from "./helpers/pexels";

class Videos extends Component {
    state = {
        videos: ''
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

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <div className="row">
                            {this.state.videos &&
                                <CardVideos videos={this.state.videos} />
                            }
                        </div>
                    </div>
                    <Pagination content={this.props.contentPage} page={this.props.page} />
                </main>
            </React.Fragment>
        )
    }
}

export default Videos;