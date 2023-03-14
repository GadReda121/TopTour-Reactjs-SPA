import React, { Component } from 'react';
import './FourSection.css';

class FourSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour : 52 ,
            Happy : 2000 ,
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                hour : this.state.hour + 1,
            })
        },3000);

        setInterval(()=>{
            this.setState({
                Happy : this.state.Happy + 1
            })
        },3000);
    }

    render() {
        return (
           <section className='timer'>
            {/* Hour */}
            <div className='hour'>
                <h1>{this.state.hour}</h1>
                <p>Tours</p>
            </div>
            {/* Exp */}
            <div className='Exp'>
                <h1>+15</h1>
                <p>experience</p>
            </div>
            {/* Destinations */}
            <div className='Destinations'>
                <h1>72</h1>
                <p>Destinations</p>
            </div>
            {/* Happy */}
            <div className='Happy'>
                <h1>{this.state.Happy}</h1>
                <p>Happy clients</p>
            </div>
           </section>
        )
    }
}

export default FourSection;