import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App() {
    const [list, setList] = useState(['aa', 'bb', 'cc']);
    const [text, setText] = useState('aaaaaa');

    // 副作用函数
    // 第二个参数传空数组只调用一次
    useEffect(() => {
        axios.get('/test.json').then(res => {
            console.log('组件create：',res.data.features);
            setList(res.data.features);
        });
    }, []);
    // 第二个参数传被改变的变量名，更新即触发
    useEffect(() => {
        setText(text.substring(0, 1).toUpperCase() + text.substring(1));
        return () => {
            console.log('做组件销毁');
        };
    }, [text]);

    return (
        <div>
            <button onClick={() => setText('bbbbbbb')}>{text}</button>
        </div>
    );
}
