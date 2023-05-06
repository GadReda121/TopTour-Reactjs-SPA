import React from 'react';
import { Component } from 'react';
import "./Router.css";
import axios from 'axios';

class TravelThree extends Component{
    constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        axios.get('http://api.quotable.io/random')
        .then(response => {
            this.setState({ data: response.data });
        })
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className='travel'>
                {data.content}
            </div>
        );
    }
}

export default TravelThree;