import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from '@fortawesome/free-solid-svg-icons';


class Experience extends Component {

    render() {
            return (
                <Flexbox width="100%" paddingLeft="1em" flexDirection="column" style={{ backgroundColor: '#fff' }}>
                    <Flexbox  paddingBottom="25px">
                        <h2>Experience</h2>
                    </Flexbox>
                    <Flexbox >
                       <ul className="list-unstyled" >
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Google Analytics Certified Developer
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Google Analytics Certified Developer
                        </li>
                       </ul>
                    </Flexbox>
                </Flexbox>
            )
    }
}

export default Experience;