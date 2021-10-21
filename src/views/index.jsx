import React, { Component } from "react";
import { getImages } from "./helpers/pexels";;

class Index extends Component {
    state = {
        images: ''
    }
    getImage = () => {
        getImages().then(res => {
            this.setState({
                images: res
            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <h1 className="text-center">Unlimited Images</h1>
                        <h2 className="text-center">Watch and enjoy the best royalty-free images</h2>
                    </div>
                    <div className="container py-4">
                        <div className="row">
                            {this.state.images &&
                                this.state.images.photos.map((image, i) => {
                                    return (
                                        <div className="col-md-4" key={i}>
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <img src={image.src.tiny} alt="mario" className="card-img" />
                                                </div>
                                                <div className="card-footer">
                                                    Hernán Demorizi Ureña
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
                <button onClick={this.getImage}>Get Images</button>
            </React.Fragment>
        )
    }
}

export default Index;