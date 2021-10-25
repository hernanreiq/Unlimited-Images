import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views/index";
import Images from "../views/images";
import Header from "../views/partials/header";
import Videos from "../views/videos";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/Unlimited-Images/" component={Index} />
                    <Route exact path="/" component={Index} />
                    <Route exact path="/home" component={Index} />
                    <Route exact path="/images/:page?" render={(props) => {
                        var currentPage = 1;
                        if (parseInt(props.match.params.page) > 0 || parseInt(props.match.params.page) < 267) {
                            currentPage = parseInt(props.match.params.page);
                        }
                        return (
                            <Images page={currentPage} contentPage={'images'} />
                        )
                    }} />
                    <Route exact path="/videos/:page?" render={(props) => {
                        var currentPage = 1;
                        if (parseInt(props.match.params.page) > 0 || parseInt(props.match.params.page) < 100) {
                            currentPage = parseInt(props.match.params.page);
                        }
                        return (
                            <Videos page={currentPage} contentPage={'videos'} />
                        )
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;