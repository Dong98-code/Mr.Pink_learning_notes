import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),//初始化一个空的方格
  //     xIsNext:true
  //   }
  // }
  // handleClick(i) {
  //   // 处理点击的回调函数
  //   // alert(i)
  //   const squares = this.state.squares.slice(); // 使用slice进行浅拷贝
  //   // squares[i] = 'X';
  //   //判断输赢
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "O"
  //   this.setState({
  //     squares: squares,
  //     xIsNext:!this.state.xIsNext, // 每一次都取反，改变状态
  //   }); // 重新调用setState
  // }
  renderSquare(i) {
    // 传入 名为value的prop
    return (
      <Square
        value={this.props.squares[i]}
        // onClick={()=>this.props.handleClick(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const status = 'Next player: X';
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        {/* <div className="status">{status}</div> */}
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
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      // 偶数步的时候更改对应的选手
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    // 展示历史的步骤
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner:" + winner;
    } else {
      status = "Next player:" + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          {/* 通过props给board传参 */}
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
