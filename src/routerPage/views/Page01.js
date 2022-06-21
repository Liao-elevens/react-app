import React, { useEffect } from 'react';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function Page01(props) {
    console.log('没有成为route的子，需要自己传参数', props);
    const history = useHistory();
    const goto = () => {
        // window.location.href = '#/page02'
        // props.history.push('/page02')
        history.push('/page02/123');
    };
    
  // 跨域——反向代理
    useEffect(() => {
        axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E8%B4%B5%E9%98%B3&ci=107&channelId=4').then(res => {
            console.log(res.data.data.hot);
        });
    }, []);
    return (
        <div>
            Page01
            <div>
                {/* <a href="#/page02">去page02</a> */}
                {/* <NavLink to="/page02" activeClassName='activeName'>去page02</NavLink> */}
                <div onClick={() => goto()}>去page02</div>
            </div>
        </div>
    );
}
