import React, { Component } from 'react';
import './SevenSection.css';

class SevenSection extends Component {
    constructor(props) {
        super(props);
        console.log();
    }
    
    render() {
        return (
            <section className='SevenSection'>
                {/* iMg */}
                <div className='image'>
                    <img src='/Images/about.jpg' alt='' className='rounded'/>
                </div>
                {/* Text */}
                <div className='Text'>
                    <h3>A TOUR IS A PERCETIY PLANNED VACATION</h3>
                    <p>Agency takes away the hassle and itroduces you to places you've never  throught about going - just sit back, relax and have all the fun!</p>
                </div>
            </section>
        );
    }
}

export default SevenSection;