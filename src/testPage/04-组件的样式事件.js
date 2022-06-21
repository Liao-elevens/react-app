import React, { Component } from 'react';
import './css/index.css'; // 脚手架包含的 webpack的支持

export default class App extends Component {
    outStr = 'outStr';
    render() {
        var str = '{变量}';
        var styleObj = {
            backgroundColor: 'yellow', // background-color 要变驼峰
        };
        return (
            <div style={styleObj} className="red">
                {10 + 20} -- {str}
                <button
                    onClick={() => {
                        console.log('click', this.outStr);
                    }}
                    onMouseOver={() => {
                        console.log('onMouseOver');
                    }}
                >
                    click
                </button>
                <br />
                <button onClick={this.btn.bind(this)}>click22 - bind</button>
                <br />
                <button onClick={this.btn33}>click箭头函数33</button>
                <br />
                <button onClick={() => this.btn44()}>click44</button>
            </div>
        );
    }

    // 事件代理 - 根结点上
    btn() {
        console.log('this.btn', this.outStr);
        console.log('谁调用函数this就指向谁；bind改变this指向，');
    }
    btn33 = () => {
        console.log('this.btn33 , 箭头函数this永远保持外部作用域App一样的', this.outStr);
    };
    btn44 = () => {
        console.log('this.btn44 , 箭头函数的箭头函数', this.outStr);
    };
}

/**
 * 改变this指向的方法
 * call、apply  自动执行
 *
 * bind  不会自动执行
 */
var obj1 = {
    name: 'obj1',
    getName() {
        console.log(this.name);
    },
};
var obj2 = {
    name: 'obj2',
    getName() {
        console.log(this.name);
    },
};
obj1.getName.call(obj2);
obj1.getName.apply(obj2);
obj1.getName.bind(obj2)();
obj2.getName();
