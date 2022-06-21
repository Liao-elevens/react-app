import React from 'react'; // 16之前不引用会报错，17以后不引入不会报错
// import ReactDOM from 'react-dom/client';

// jsx = js + xml
// import App from './testPage/01-class组件';
// import App from './testPage/02-函数式组件';
// import App from './testPage/03-组件嵌套';
// import App from './testPage/04-组件的样式事件';
// import App from './testPage/05-ref';
// import App from './testPage/06-state';
// import App from './testPage/07-循环';
// import App from './testPage/08-组件传参';
// import App from './testPage/09-生命周期';
// import App from './hooksPage/01-useState';
// import App from './hooksPage/02-todolist';
// import App from './hooksPage/03-useEffect';
// import App from './hooksPage/04-useCallback';
import App from './routerPage/App'

import ReactDOM from 'react-dom';
ReactDOM.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
    ,
    document.getElementById('root')
);

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
