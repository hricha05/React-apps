import React, { Component } from 'react';

export default class validationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            0: 'Text too short',
            1: 'Text long enough' 
        };
    }

    render() {
        return(
            <div>
                <p>{ this.state }</p>
            </div>
        );
    }
}