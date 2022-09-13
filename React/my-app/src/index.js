import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state为组件的私有属性， 在创建时 constructor中初始化
//     this.state = {
//       // 初始值为null
//       value: null,
//     }
//   }
//     render() {
//       return (
//         <button className="square"
//           // onClick={() => {
//           //   this.setState({ value: "X" })
//           // }}
//           // 执行的回调时 通过props传入的函数
//           onClick={()=>this.props.onClick()}
//         >
//           {/* 使用传入的props */}
//           {this.props.value}
//         </button>
//       );
//     }
//   }
// 此时square的state将不在其作用 将其变成一个函数组件
function calculateWinner(squares) {
  // 该函数用来判断是否获胜
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
    // 将每一方格的 子组件中的数组 在父组件中存储
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),//初始化一个空的方格
      xIsNext:true
    }
  }
  handleClick(i) {
    // 处理点击的回调函数
    // alert(i)
    const squares = this.state.squares.slice(); // 使用slice进行浅拷贝
    // squares[i] = 'X';
    //判断输赢
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
      squares: squares,
      xIsNext:!this.state.xIsNext, // 每一次都取反，改变状态
    }); // 重新调用setState
  }
    renderSquare(i) {
      // 传入 名为value的prop
      return (
        <Square
          value={this.state.squares[i]}
          onClick={()=>this.handleClick(i)}
        />
      );
    }
  
    render() {
      // const status = 'Next player: X';
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
