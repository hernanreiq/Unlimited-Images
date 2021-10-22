import React, { Component } from "react";
import { changePage } from "../helpers/functions";

class Pagination extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.content === 'images' &&
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-4 offset-md-4 text-center">
                                {changePage(this.props.page, this.props.content, 'back')}
                                <span className="px-3 h5">{this.props.page}</span>
                                {changePage(this.props.page, this.props.content, 'next')}
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Pagination;