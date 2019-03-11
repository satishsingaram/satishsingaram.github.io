import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from '@fortawesome/free-solid-svg-icons';


class Awards extends Component {

    render() {
            return (
                <Flexbox width="100%" alignSelf="center" alignItems='left' paddingLeft="1em" flexDirection="column" style={{ backgroundColor: '#fff' }}>
                    <Flexbox  paddingBottom="25px">
                        <h2>AWARDS & CERTIFICATIONS</h2>
                    </Flexbox>
                    <Flexbox >
                       <ul className="list-unstyled" >
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Connoisseur - Best Solution Architect - RCTG - 2013
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Winner - CTO - RCTG - Tech Fusion Award
                        </li>
                       </ul>
                    </Flexbox>
                </Flexbox>
            )
    }
}

export default Awards;