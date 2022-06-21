// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

// export default class Page02 extends Component {
//     render() {
//         return (
//             <div>
//                 Page02
//                 <div>
//                     {/* <a href="#/page01">去page01</a> */}
//                     <NavLink to="/page01" activeClassName="activeName">
//                         去page01
//                     </NavLink>
//                 </div>
//             </div>
//         );
//     }
// }
import React from 'react';

export default function Page01(props) {
    console.log('page02：', props.match.params); // 获取路径跳转参数
    const goto = () => {
      props.history.push({ pathname: '/page03', query: { id: 222 } });
    };
    return (
        <div>
            Page02
            <div>
                <div onClick={() => goto()}>去page03</div>
            </div>
        </div>
    );
}
