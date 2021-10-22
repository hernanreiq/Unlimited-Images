import React, { Component } from "react";
import { getImages } from "./helpers/pexels";

class Index extends Component {
    state = {
        images: ''
    }
    getImage = () => {
        getImages(this.props.page).then(res => {
            this.setState({
                images: res
            });
        })
    }

    componentDidMount() {
        this.getImage();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.page !== this.props.page) {
            this.getImage();
        }
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <h1 className="text-center display-4">Unlimited Images</h1>
                        <h4 className="text-center">Watch and enjoy the best royalty-free images</h4>
                    </div>
                    <div className="container py-4">
                        <div className="row">
                            {this.state.images &&
                                this.state.images.photos.map((image, i) => {
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
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;