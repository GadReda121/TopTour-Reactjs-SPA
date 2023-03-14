import React, { Component } from 'react';
import './FifthSection.css';

class FifthSection extends Component {
    render() {
        return (
            <section className='fiveSection'>
                    {/* images */}

                    {/* img1 */}
                    <div className='img1'>
                        <img src= '/Images/head1.jpg' alt= ''/>
                    </div>
                    {/* img2 */}
                    <div className='img2'>
                        <img src= '/Images/head2.jpg' alt= ''/>
                    </div>
                    {/* img3 */}
                    <div className='img3'>
                        <img src= '/Images/headr3.jpg' alt= ''/>
                    </div>

                    {/* title */}
                    <div className='Title'>
                        <h3>SAMPLE HEADLINE</h3>
                        <p>Sample text. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, expedita.</p>
                    </div>
            </section>
        );
    }
}

export default FifthSection;