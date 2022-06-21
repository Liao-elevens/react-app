import axios from 'axios';
import React, { Component } from 'react';

class Child extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('child c Will ReceiveProps', nextProps);
        this.setState({
            p: '接收' + nextProps.text,
        });
    }
    state = {
        p: 'default',
    };
    render() {
        return <div>child - {this.state.p}</div>;
    }
    componentDidMount() {
        window.onresize = () => {
            console.log('resize');
        };
    }
    UNSAFE_componentWillUnmount() {
        console.log('child c will unmount');
        window.onresize = null;
    }
}

/** react优化方案：
 * 1、shouldComponentUpdate —— 是否更新组件
 * 2、pureComponent —— 相当于1的返回功能 ； state、props老变不适合，速度慢（rpc）
 */
export default class App extends Component {
// export default class App extends pureComponent {
    state = {
        name: '123',
        flag: true,
    };

    // 新生命周期
    // == componentWillMount + componentWillUpdate
    static getDerivedStateFromProps(prevProps, prevState) {
        console.log('getDerivedStateFromProps —— 初始化会覆盖stste —— 不能发axios请求，return会立即执行', prevState);
        return {
            nameC: 'getDerivedStateFromProps',
        };
    }
    // == componentWillUpdate + componentDidUpdate
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return 'getSnapshotBeforeUpdate的返回值在cdup中';
    }

    // 初始化
    // UNSAFE_componentWillMount() {
    //     console.log('16.2之后加 UNSAFE_ 优先级很低');
    //     console.log('c will Mount —— dom还没渲染', document.getElementById('divId'));
    // }
    componentDidMount() {
        console.log('c did Mount —— dom渲染完 —— axios、订阅、setInterval', document.getElementById('divId'));
        // axios.get("/test.json").then(res => {
        //     console.log(res.data);
        // })
    }

    // 运行更新中
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should c update —— 判断是否更新component', nextState);
        return JSON.stringify(this.state) != JSON.stringify(nextState);
    }
    // UNSAFE_componentWillUpdate() {
    //     console.log('c will update', document.getElementById('divId').innerHTML);
    // }
    componentDidUpdate(prevProps, prevState, value) {
        // axios.get("/test.json").then(res => {
        //     console.log(res.data);
        // })
        console.log('c did update', value, document.getElementById('divId').innerHTML);
    }

    render() {
        console.log('render');
        return (
            <div>
                {/* {this.state.flag ? <Child text={this.state.name}></Child> : ''} */}
                {this.state.flag && <Child text={this.state.name}></Child>}
                {/* <Child text={this.state.name}></Child> */}
                <div id="divId">{this.state.name}</div>
                <button
                    onClick={() => {
                        this.setState({
                            name: 'change',
                            flag: !(this.state.name == 'change' && this.state.name != true),
                        });
                    }}
                >
                    {!(this.state.name == 'change' && this.state.name != true) ? '改变' : '删除child'}
                </button>
            </div>
        );
    }
}
