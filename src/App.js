import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Intro from './pages/intro';
import Awards from './pages/awards';
import Experience from './pages/experience';
import Interests from './pages/interests';
import Education from './pages/education';
import Skills from './pages/skills';
import IconBarDropDown from './components/dropdown-menu'
import SideNav from './components/sidenav'

class App extends Component {

    render() {
        return (
            <Router >
                <div>
                    <div className="wrapper">
                        <SideNav/>
                        <div id="content" className="container-fluid">
                            <IconBarDropDown/>
                            <Route exact path="/" component={Intro}/>
                            <Route path="/intro" component={Intro}/>
                            <Route path="/experience" component={Experience}/>
                            <Route path="/education" component={Education}/>
                            <Route path="/skills" component={Skills}/>
                            <Route path="/interests" component={Interests}/>
                            <Route path="/awards" component={Awards}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;