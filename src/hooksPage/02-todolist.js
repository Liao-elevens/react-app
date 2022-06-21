import React, { useState } from 'react';

export default function App() {
    const [text, setText] = useState('');
    const textChange = p => {
        setText(p.target.value);
    };
    const [list, setList] = useState(['aa', 'bb', 'cc']);

    const add = () => {
        setList([...list, text]);
        setText('');
    };
    const del = index => {
        let newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };
    return (
        <div>
            <input value={text} onChange={textChange} /> <button onClick={add}>add</button>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>
                                {index} - {item}
                            </span>{' '}
                            <button onClick={() => del(index)}>x</button>
                        </li>
                    );
                })}
            </ul>
            {!list.length && <h3>暂无数据</h3>}
        </div>
    );
}
