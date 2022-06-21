import React, { Component } from 'react';

export default class App extends Component {
    // state = {
    //     flag:false
    // }
    constructor() {
        super()
        this.state = {
            flag:false
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    this.btn()
                }}>{this.state.flag?"收藏了":"取消了"}</button>
            </div>
        );
    }
    btn = () => {
        this.setState({
            flag:!this.state.flag
        })
    };
}