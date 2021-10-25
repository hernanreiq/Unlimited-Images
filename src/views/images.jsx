import React, { Component } from "react";
import PopUp from "./partials/popup";
import CardImages from "./partials/card-image";
import Pagination from "./partials/pagination";
import { getImages } from "./helpers/pexels";

class Images extends Component {
    state = {
        images: '',
        imageClicked: {},
        show: false
    }

    getImage = () => {
        getImages(this.props.page).then(res => {
            this.setState({
                images: res
            });
        });
    }

    componentDidMount() {
        this.getImage();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.page !== this.props.page) {
            this.getImage();
        }
    }

    showModal = (image) => {
        this.setState({
            imageClicked: image,
            show: true
        })
    }

    closeModal = () => {
        this.setState({
            imageClicked: {},
            show: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <div className="row">
                            {this.state.images &&
                                <CardImages images={this.state.images} showModal={this.showModal} />
                            }
                        </div>
                    </div>
                    <Pagination content={this.props.contentPage} page={this.props.page} />
                    {this.state.show &&
                        <PopUp image={this.state.imageClicked} showModal={this.state.show} closeModal={this.closeModal} />
                    }
                </main>
            </React.Fragment>
        )
    }
}

export default Images;