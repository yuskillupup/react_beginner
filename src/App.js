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
//     let colorFlag = true;
//     const text = "hello";
//     return(
//       <div className={if(colorFlag){fontRed}}>
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
// class Divider extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {color:'red'};
//   }
  
//   render(){
//     const text = "hello";
//     return(
//       <div className={this.state.color && 'fontRed'}>
//         <h1>{text}</h1>
//       </div>
//     );
//   }
// }

// 2.4.3.3 HTML文字列として読み込む XXSに注意
// class Divider extends React.Component{
//   render(){
//     const text = "hello";
//     var htmlString = {
//       __html: '<h2>HTML文字列</h2>'
//     }
//     return (
//       <div dangerouslySetInnerHTML={htmlString}>
//       </div>
//     )
//   }
// }

// 2.4.7スタイル
// class Divider extends React.Component{
//   render(){
//     var styles ={
//       color: "blue"
//     }
//     return (
//       <div style={styles}>
//         aaaaa
//       </div>
//     )
//   }
// }


// ９章　フォーム 大文字で表示する
class Divider extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    // bindがないと"TypeError: Cannot read property 'setState' of undefined"
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      value : event.target.value.toUpperCase()
    })
  }
  render(){
    return (
      <input type="text"  autoFocus="true" value={this.state.value} onChange={this.handleChange}/>
    )
  }
}

// フォーム　select
// class Divider extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value: ''};
//     // bindがないと"TypeError: Cannot read property 'setState' of undefined"
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event){
//     this.setState({
//       value : event.target.value.toUpperCase()
//     })
//   }
//   render(){
//     return (
//       <select multiple={true} value={this.handleChange}>
//         <option value="A">選択肢A</option>
//         <option value="B">選択肢B</option>
//       </select>
//     )
//   }
// }

// フォーム　チェックボックス
// class Divider extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {checked: false};
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event){
//     const newState = {};
//     newState[event.target.name] = event.target.name;
//     this.setState(newState);
//   }
//   render(){
//     return (
//       <form>
//         <input
//           name="checked"
//           type="checkbox"
//           value="A"
//           checked={this.state.checked}
//           onChange={this.handleChange}
//         />
//       </form>
//     )
//   }
// }




export default Divider;
