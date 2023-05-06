import React from 'react';
import "./Router.css";
import { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TravelOne from './TravelOne';
import TravelTwo from './TravelTwo';
import TravelThree from './TravelThree';

class Routes1 extends Component{
    render() {
        return (
            <div className='parent'>
                <BrowserRouter>
                    <div className='content'>
                        <Link to="/Travel1">
                            <a href="">
                                Travel 1
                            </a>
                            </Link>
                        <Link to="/Travel2">
                            <a href="">
                                Travel 2
                            </a>
                        </Link>
                        <Link to="/Travel3">
                            <a href="">
                                Travel 3
                            </a>    
                        </Link>
                    </div>
                    <Routes>
                        <Route path='/Travel1' element={<TravelOne />}/>
                        <Route path='/Travel2' element={<TravelTwo />}/>
                        <Route path='/Travel3' element={<TravelThree />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes1;