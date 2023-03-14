import React, { Component } from 'react';
import './SecondSection.css';
import 'animate.css';

class SecondSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email : [],
        }
    }
    
    componentDidUpdate(){
        window.localStorage.setItem('Email',`${this.state.email}`);
    }

    handelSubmit(e){
        e.preventDefault();
        document.querySelector('.span').classList.add('alert');
        document.querySelector('.span').classList.add('alert-success');
        document.querySelector('.span').classList.add('justify-content-center');
        document.querySelector('.span').classList.add('text-center');
        document.querySelector('.span').setAttribute( 'role' , "alert");
        document.querySelector('.span').innerHTML = `<span>Success! <br/> Your Email is : ${window.localStorage.getItem('Email')}</span>`;
    }

    handelChange(e){
        const Email = e.target.value;
        const EmailRe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.([A-Z]{2,4}$)/igm
        this.setState({email : Email.match(EmailRe)});
    }

    render() {
        return (
            <div className='sectionTwo'>

            {/* Row 1 */}
            <div className='subscribe'>

                <h1 className='animate__animated animate__headShake animate__infinite infinite animate__slower 3s'>SUBSCRIBE</h1>
                <p>subscribe our newsletter to stay updated every moment.</p>
                <form className='span' onSubmit = {this.handelSubmit.bind(this)} >
                    <input type='email' required placeholder = 'Enter a valid email address' onChange={this.handelChange.bind(this)} />
                    <button>SUBMIT</button>
                </form>

            </div>
            {/* Row 2 */}
            <div className='subscribeDetails'>
                {/* col1 */}
                <div className='col-lg-3 first'>
                    <h1>EVERYDAY IS A JOURNEY</h1>
                </div>
                {/* col2 */}
                <div className='col-lg-3'>
                    <p>We have consultants with an average of 20 years of experience and a passion for travel available who will work out the details and create unforgettable vacations</p>
                </div>
                {/* col3 */}
                <div className='col-lg-4'>
                    <p>When you plan your vacation with us we are there throughout the entire process. This means making ourselves available to your before, during and after travel.</p>
                    <p>We plan river and ocean cruises, romantic honeymoon packages to sunny destinations, family, adventure and wellness travel along with international and domestic customized itineraries.</p>
                </div>
            </div>

            </div>
        );
    }
}
export default SecondSection;