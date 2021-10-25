import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views/index";
import Images from "../views/images";
import Header from "../views/partials/header";

class Router extends Component {
    state = {
        content: ''
    }
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
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;