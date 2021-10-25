import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="card shadow">
                                    <div className="card-header bg-dark">
                                        <h2 className="card-title text-center mb-0 text-white">
                                            About this app
                                        </h2>
                                    </div>
                                    <div className="card-body bg-dark text-white text-justify">
                                        <img src="https://avatars.githubusercontent.com/u/42702735?u=1830c835e5101617909350395201e9faf5d35913&v=4" alt="Hernan Demorizi Ureña (Hernan.Reiq)" className="card-img mb-4" />
                                        <p>This application was developed and designed by Hernan Demorizi Ureña (Hernan.Reiq), a young Dominican graduated from the Computer and Systems Engineering career.</p>
                                        <p>All multimedia content displayed on the web comes from the Pexels API.</p>
                                    </div>
                                    <div className="card-footer bg-secondary">
                                        <a href="https://www.pexels.com/" target="_blank" rel="noreferrer" className="btn btn-primary w-100 my-2">Pexels API</a>
                                        <a href="https://bit.ly/hernanreiq" target="_blank" rel="noreferrer" className="btn btn-success w-100 my-2">Hernan's Portfolio</a>
                                        <a href="https://github.com/hernanreiq/Unlimited-Images/tree/master" target="_blank" rel="noreferrer" className="btn btn-warning w-100 my-2">Code of this app</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default About;