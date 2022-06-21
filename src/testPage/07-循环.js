import React, { Component } from 'react';

export default class App extends Component {
    inputRef=React.createRef()
    state = {
        list: ['111', '222', '333'],
    };

    render() {
        return (
            <div>
                <div>
                    <input ref={this.inputRef}/>
                    <button onClick={()=>this.add()}>添加</button>
                </div>
                <ul>
                    {this.state.list.map((item,index) => (
                        <li key={index}>
                            {index} - {item}
                            <button onClick={()=>this.del(index)}>x</button>
                        </li>
                    ))}
                </ul>
                {this.state.list.length===0&&<h2>暂无数据</h2>}
            </div>
        );
    }

    // 不能直接修改原状态
    // slice、concat不修改原数组(浅拷贝)、splice修改原数组

    add = () => {
        this.setState({
            list:[...this.state.list,this.inputRef.current.value]
        })
        console.log(this.inputRef.current.value, this.state.list);
        this.inputRef.current.value=''
    }

    del = (index) => {
        console.log(index);
        let newList = this.state.list.concat()
        newList.splice(index,1)
        this.setState({
            list:newList
        })
    }
}

// 原生js - map
var list = ['111', '222', '333'];
var newList = list.map(item => `<li>${item}</li>`);
// console.log(newList.join(""));
