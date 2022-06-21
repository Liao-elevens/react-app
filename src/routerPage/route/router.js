import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Page01 from '../views/Page01';
import Page02 from '../views/Page02';
import Page03 from '../views/Page03';
import Error from '../views/404';

export default function router() {
    return (
        <div>
            <HashRouter>
                {/* Swich针对Redirect的模糊查询 来找到第一个被匹配到的路由就停止查找了 */}
                <Switch>
                    <Route path="/page01" render={(props) => {
                        // 路由拦截
                        console.log('路由拦截');
                        // {...props} === 可以用withRouter包裹
                        return <Page01 id='123' {...props} />
                    }} />
                    {/* 动态路由：【 /:params】 */}
                    <Route path="/page02/:id" component={Page02} />
                    <Route path="/page03" component={Page03} />

                    {/* 重定向  【精确查询】——exact from="/【模糊查询】——会匹配所有/开头的路径" */}
                    <Redirect from="/" to="/page01" exact />

                    {/* 没匹配到的页面就进来了 */}
                    <Route component={Error} />
                </Switch>
            </HashRouter>
        </div>
    );
}
