import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";


class IconBarDropDown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light collapse" id="iconBar">
               <div className="container-fluid">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret >
                      <FontAwesomeIcon icon={faAlignJustify} fixedWidth style={{ color: 'gold' }}/>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem ><Link to="/awards">Awards</Link></DropdownItem>
                      <DropdownItem ><Link to="/Intro">Intro</Link></DropdownItem>
                    </DropdownMenu>
                 </Dropdown>
               </div>
            </nav>
        )
    }
}

export default IconBarDropDown;