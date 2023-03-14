import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            Like : 0
        }
    }

    Increment(){
        const myMemory = window.localStorage.getItem('Increment');
        this.setState({
            Like :  +myMemory + 1
        })
    }
    
    componentDidUpdate(){
        window.localStorage.setItem('Increment',`${this.state.Like}`)
    }
    
    componentDidMount(){
        document.querySelector('.inc').innerHTML = window.localStorage.getItem('Increment');
        document.querySelector('.font').addEventListener('click',()=>{
            document.querySelector('header .contact').style.cssText = 'display : flex';
            document.querySelector('header .contact').classList.add('animate__animated');
            document.querySelector('header .contact').classList.add('animate__backInDown');
            document.querySelector('.font').style.cssText = 'display : none';
            document.querySelector('.close').style.cssText = 'display : flex';
        });
        document.querySelector('.close').addEventListener('click',()=>{
            document.querySelector('header .contact').style.cssText = 'display : none';
            document.querySelector('.close').style.cssText = 'display : none';
            document.querySelector('.font').style.cssText = 'display : flex';
        });
    }

    render() {
        return (

            <header>
                <div className='navbarr'>
                    <h4><FontAwesomeIcon icon="fa-solid fa-plane-departure" style={{marginRight:'5px'}}/>TOP TOURS</h4>
                    <FontAwesomeIcon icon="fa-solid fa-bars-staggered" className='font'/>
                    <FontAwesomeIcon icon="fa-solid fa-square-xmark" className='close' />
                </div>

                <div className='contact'>
                    <div><a href='mailto:khtabjab@gmail.com'><FontAwesomeIcon icon="fa-solid fa-envelope" /></a></div>
                    <span onClick={this.Increment.bind(this)} className='like'><FontAwesomeIcon icon="fa-solid fa-thumbs-up"/> <span className='inc'>{this.state.Like}</span></span>
                </div>
            </header>


    
        )
    }
}

export default Navbar;