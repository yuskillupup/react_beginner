import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// NG例
// class Divider extends React.Component{
//   render(){
//     const text = "hello";
//     return(
//       <div className={if(text){classRed}}>
//         <h1>{text}</h1>
//       </div>
//     );
//   }
// }

//三項演算子を使う
// class Divider extends React.Component{
//   render(){
//     let colorFlag = true;
//     const text = "hello";
//     return(
//       <div className={colorFlag ? 'fontRed' : ''}>
//         <h1>{text}</h1>
//       </div>
//     );
//   }
// }

// // 変数を使う
// class Divider extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {color:'red'};
//   }
//   getIsColorFlag(){
//     return this.state.color == 'red' ? 'fontRed' : '';
//   }
//   render(){
//     const text = "hello";
//     // 関数呼び出し、代入
//     let fontRed = this.getIsColorFlag();
//     return(
//       <div className={fontRed}>
//         <h1>{text}</h1>
//       </div>
//     );
//   }
// }

// //関数呼び出しを使う
// class Divider extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {color:'red'};
//   }
//   getIsColorFlag(){
//     return this.state.color == 'red' ? 'fontRed' : '';
//   }
//   render(){
//     const text = "hello";
//     return(
//       <div className={this.getIsColorFlag()}>
//         <h1>{text}</h1>
//       </div>
//     );
//   }
// }

//&&を使う
class Divider extends React.Component{
  constructor(props){
    super(props);
    this.state = {color:'red'};
  }
  
  render(){
    const text = "hello";
    return(
      <div className={this.state.color && 'fontRed'}>
        <h1>{text}</h1>
      </div>
    );
  }
}


export default Divider;
