import React from 'react';

export default function Page01(props) {
    console.log('page03：', props.location.query,'query传参刷新就没了'); // 获取路径跳转参数
    const goto = () => {
        props.history.push('/page01');
    };
    return (
        <div>
            Page03
            <div>
                <div onClick={() => goto()}>去page01</div>
            </div>
        </div>
    );
}
