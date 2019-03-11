import React, { Component } from 'react';
import Flexbox from 'flexbox-react';


class Education extends Component {

    render() {
            return (
                <Flexbox  flexShrink={0}  flexDirection="row">
                    <Flexbox padding="1em" alignContent="flex-start" width="80%">
                    <dl>
                      <dt><h1>Education</h1> </dt>
                      <dt><h3>SASTRA - Bachelor of Engineering</h3></dt>
                      <dd><h4>Mechanical Engineering </h4></dd>
                    </dl>
                    </Flexbox>
                    <Flexbox width="20%" padding="2.5em" alignContent="center">
                          <h5>1995 - 1999</h5>
                    </Flexbox>
                </Flexbox>
            )
    }
}

export default Education;