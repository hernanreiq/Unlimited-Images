import React, { Component } from "react";
import CardImages from "./partials/card-image";
import Pagination from "./partials/pagination";
import { getImages } from "./helpers/pexels";

class Images extends Component {
    state = {
        images: ''
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

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <div className="row">
                            {this.state.images &&
                                <CardImages images={this.state.images} />
                            }
                        </div>
                    </div>
                    <Pagination content={this.props.contentPage} page={this.props.page} />
                </main>
            </React.Fragment>
        )
    }
}

export default Images;