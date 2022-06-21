import React, { Component } from 'react';
// import propTypes from 'prop-types';

class Navbar extends Component {
    // 默认值1
    static defaultProps = {
        title: '默认值',
        flag: true,
    };
    // 属性父组件传过来的，this.props
    render() {
        let { title, flag } = this.props;
        return (
            <h1>
                navber - {title} - {flag ? '真' : '否'}
            </h1>
        );
    }
}
// 默认值2
// Navbar.defaultProps = {
//     title: '默认值',
//     flag: true,
// }
// 类属性 —— 做属性验证
// Navbar.proptypes = {
// title: propTypes.string,
// flag: propTypes.bool,
// };

function Swiper() {
    return <h2>Swiper</h2>;
}

const Tabber = () => <h3>Tabber</h3>;

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar title="传参" flag={true} />
                <Navbar title="传参2" flag={false} />
                <Navbar />
            </div>
        );
    }
}
