import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from '@fortawesome/free-solid-svg-icons';


class Interests extends Component {

    render() {
            return (
                <Flexbox width="100%" paddingLeft="1em" flexDirection="column" style={{ backgroundColor: '#fff' }}>
                    <Flexbox  paddingBottom="25px">
                        <h2>Interests</h2>
                    </Flexbox>
                    <Flexbox >
                       <ul className="list-unstyled" >
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Winner CTO contest - Cool Foss Tool -2011
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Connoisseur - Best Architect for BAS, BC3 - 2012
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Proficient - Best Project Team - Dotcom - BAS,BC3 - 2012
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Best Project - Commerce API 2012
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> CTO - RCTG Tech Fusion Award - Winner - 2013
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Connoisseur - Best Solution Architect - RCTG Business Unit - 2013
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> Connoisseur - Best Architect - BestBuy - 2015
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAward} fixedWidth style={{ color: 'gold' }}/> CCX Inspiring Performance - 2017
                        </li>
                       </ul>
                    </Flexbox>
                </Flexbox>
            )
    }
}

export default Interests;