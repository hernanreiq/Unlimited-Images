import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views";
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
                    <Route exact path="/:page?" render={(props) => {
                        var currentPage = 1;
                        if (parseInt(props.match.params.page) > 0 || parseInt(props.match.params.page) < 267) {
                            currentPage = parseInt(props.match.params.page);
                        }
                        return (
                            <Index page={currentPage} />
                        )
                    }} />
                    {/* <Route exact path="/home" render={() => {
                        var currentPage = 1;
                        return (
                            <Index />
                        )
                    }} />
                    <Route exact path="/Unlimited-Images" render={() => {
                        var currentPage = 1;
                        return (
                            <Index />
                        )
                    }} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;