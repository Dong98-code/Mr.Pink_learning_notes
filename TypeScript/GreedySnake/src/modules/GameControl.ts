import Snake from "./Snake";
import Food from "./Foods";
import ScorePanel from "./ScorePanels";

class GameControl {
    //三个属性
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;
    direction: string = "";
    isLive = true;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.init(); // 初始化函数

    }

    init() {
        // 初始化
        document.addEventListener("keydown", this.keydownHandler.bind(this)) //使用bind改变this的指向指向当前的 this 此时为 gamecontrol
        this.run()

    }

    // 键盘案件相应函数
    keydownHandler(event: KeyboardEvent) {
        // 获取按键名字
        // console.log(event.key);
        // alert(event.key)
        // console.log(event);
        
        this.direction = event.key;
        
    }

    run() {
        /*
        *   根据方向（this.direction）来使蛇的位置改变
        *       向上 top 减少
        *       向下 top 增加
        *       向左  left 减少
        *       向右  left 增加
        * */
        // 获取蛇现在坐标
        // console.log("run函数执行了");
        
        let X = this.snake.X;
        let Y = this.snake.Y;
        console.log(this.direction);
        

        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }
        //修改蛇的值
        //修改蛇的X和Y值
         // 检查蛇是否吃到了食物
        this.checkEat(X, Y);
        
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e:any){
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert(e.message+' GAME OVER!');
            // 将isLive设置为false
            this.isLive = false;
            // this.init()
            
        }
        // this.snake.X = X;
        // this.snake.Y = Y;

        // 定时器
        this.isLive && setTimeout(this.run.bind(this), 300 -(this.scorePanel.level-1)*30)
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number){
        if(X === this.food.X && Y === this.food.Y){
            // 食物的位置要进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        }
    }
}

export default GameControl