import React, { Component } from 'react';
import './css/index.css'; // 脚手架包含的 webpack的支持

export default class App extends Component {
    myRef=React.createRef()
    render() {
        return (
            <div>
                {/* <input ref='inputStr'/> */}
                <input ref={ this.myRef }/>
                <button onClick={() => {
                    // console.log(this.refs.inputStr.value);
                    console.log(this.myRef.current.value);
                    this.btn()
                }}>click</button>
            </div>
        );
    }
    btn = () => {
        console.log('11');
    };
}