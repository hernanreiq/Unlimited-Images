import React, { Component } from "react";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container mt-5 py-4">
                        <div className="card-index shadow">
                            <h1 className="text-center display-4">Unlimited Images</h1>
                            <h4 className="text-center">Watch and enjoy the best royalty-free images and videos</h4>
                            <div className="text-center mt-4">
                                <a href="/images" className="btn btn-success shadow m-2" >Images</a>
                                <a href="/videos" className="btn btn-success shadow m-2" >Videos</a>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;