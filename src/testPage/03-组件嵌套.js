import React, { Component } from 'react';

class Navbar extends Component{
    render() {
        return <h1>navber</h1>
    }
}

function Swiper() {
    return <h2>Swiper</h2>
}

const Tabber = () => <h3>Tabber</h3>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Swiper />
                <Tabber />
            </div>
        );
    }
}

