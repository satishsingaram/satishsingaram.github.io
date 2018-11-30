import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Intro from './pages/intro';
import Awards from './pages/awards';
import IconBarDropDown from './components/dropdown-menu'
import SideNav from './components/sidenav'

class App extends Component {

    render() {
        return (
            <Router >
                <div>
                    <div className="wrapper">
                        <SideNav/>
                        <div id="content">
                            <IconBarDropDown/>
                            <Route exact path="/" component={Intro}/>
                            <Route path="/intro" component={Intro}/>
                            <Route path="/awards" component={Awards}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;