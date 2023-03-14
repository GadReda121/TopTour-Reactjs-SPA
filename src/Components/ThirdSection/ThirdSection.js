import React, { Component } from 'react';
import './ThirdSection.css';

class ThirdSection extends Component {
    constructor(props) {
        super(props);
        console.log();
    }

    render() {
        return (
            <section className='row d-flex container-fluid justify-content-center justify-items-center'>
                {/* col1 */}
                <div className='col-lg-3 parent'>
                    {/* img */}
                    <div>
                        <img src = '/Images/travel1.jpg' alt='' className='w-100'/>
                    </div>
                    {/* Text (Under Img) */}
                    <div className='child child1'>
                        <h3>GROUP TOURS</h3>
                        <p>The first thing to say about our private group tours of ireland is that each one is different and every itinerary is tailored.</p>
                    </div>
                </div>
                {/* col2 */}
                <div className='col-lg-3 parent'>
                    {/* img */}
                    <div>
                        <img src = '/Images/travel2.jpg' alt='' className='w-100'/>
                    </div>
                    {/* Text (Under Img) */}
                    <div className='child child2'>
                        <h3>BUS TRAVEL</h3>
                        <p>Each bus tour has been carefully architected so that you can take in the sights and scenery that ireland has to offer, in a relaxed.</p>
                    </div>
                </div>
                {/* col3 */}
                <div className='col-lg-3 parent'>
                    {/* img */}
                    <div>
                        <img src = '/Images/travel3.jpg' alt='' className='w-100'/>
                    </div>
                    {/* Text (Under Img) */}
                    <div className='child child3'>
                        <h3>ROMANTIC</h3>
                        <p>We have the perfect hideaways for your irish honeymoon or romantic getaway. Throughout ireland, in the most stunning locations.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ThirdSection;