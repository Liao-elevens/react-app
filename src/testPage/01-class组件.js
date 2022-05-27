// class Test1{
//     constructor() {
//         this.a=1
//     }
//     testA() {
//         console.log("testA");
//     }
// }

// class ChildTest1 extends Test1{
//     testB() {
//         console.log("testB");
//     }
// }

// var obj1 = new ChildTest1()
// obj1.testA()
// obj1.testB()
// console.log(obj1.a);

import React from "react";
class App extends React.Component{
    render() {
        return <h1>01-class组件</h1>
    }
}
export default App