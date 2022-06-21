# react——17<hooks函数式编程
[中文官网](https://react.docschina.org/)
## 1、创建项目
    方法1、安装全局的Create React App脚手架配置：npm i -g create-react-app
        npx create-react-app <js的项目名>
            npx 是 npm v5.2 版本新添加的命令，用来简化 npm 中工具包的使用
            create-react-app 是 React 脚手架的名称
    方法2、npx create-react-app <ts的项目名> --template typescript
## 2、基础知识
### 2.1、setState:——状态只能自己用
        在同步逻辑中——异步更新状态、真实dom
        在异步逻辑中——同步。。。
        setState接受第二个参数，状态和dom更新完就会出发第二个参数式回调函数【或者用setTimeout变成异步】
### 2.2、父子通信：
        父传子：属性
        子传父：回调函数
### 2.3、非父子通信：
        1、状态提升（中间人模式）
        2、发布订阅模式
        3、context状态树传参
### 2.4、插槽：子组件通过 { this.props.children } 留位置
### 2.5、生命周期：v16.2
        初始化：
            componentWillMount 在ssr中这个方法会多次调用，如果在这里绑定事件，将无法解绑，导致内存泄漏【不安全】
            render
            componentDidMount
        运行中：
            componentWillReceiveProps 外部组件频繁传入多次不同的props会导致不必要的异步请求
            shouldComponentUpdate
            render
            componentDidUpdate
        销毁：
            componentWillUnmount
## 3、hooks
    1、useState（保存组件状态）
    2、useEffect（处理副作用）—— 整个页面渲染完才会调用 ； useLayoutEffect（可以做页面防抖）、componentDidMount、componentDidUpdate在DOM更新完同步调用（会阻塞页面渲染）;[]：只调用一次，可以做axios
    3、useCallback（记忆函数）？？类似于闭包
    4、useMemo（记忆组件）——vue的computed
    5、useRef（保存引用值）——让普通声明的变量像useState声明的变量一样可以自己被缓存了——vue3.x的ref、reactive？
    6、useContext（减少层级组件）——简化里context里消费者获取value的方式
    7、useReducer（减少层级组件）——相当于vue的store；redux——降低组件的耦合度；不能异步操作
## 4、router
    npm i react-router-dom@5
    声明式：标签
    编程式：js跳转
## 5、跨域——反向代理
    yarn add http-proxy-middleware

## 6、Redux——相当于vuex