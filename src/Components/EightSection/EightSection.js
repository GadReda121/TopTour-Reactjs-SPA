import React, { Component } from 'react';
import './EightSection.css';
import Typed from 'typed.js';

class EightSection extends Component {
    constructor(props) {
        super(props);
        console.log();
    }

    componentDidMount(){
        var typed = new Typed('.element', {
            strings: ['Gad Reda'],
            smartBackspace: true,
            loop : true,
            typeSpeed: 100
        });
    }
    
    render() {
        return (
            <footer>
                <h4>All rights reserved by <span className='element'></span> | 2022 &copy;</h4>
            </footer>
        );
    }
}

export default EightSection;