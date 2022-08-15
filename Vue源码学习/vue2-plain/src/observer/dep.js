let id = 0;
class Dep {
  id = id++;
  constructor() {
    // 属性的dep要收集watcher， 一个属性可以对应多个watcher
    this.subs = [];
  }
  /**
   * 收集当前属性 对应的视图 watcher
   */
  depend() {
    // 这里我们不希望收集重复的watcher，而且现在还只是单向的关系 dep -> watcher
    // watcher 也需要记录 dep
    // this.subs.push(Dep.target);

    // 这里是让watcher先记住dep
    Dep.target.addDep(this); //  this -> dep; 此时的this指向调用者 dep this
  }
  /**
   * dep 在反过来记录watcher
   * @param {*} watcher
   */
  addSub(watcher) {
    this.subs.push(watcher);
    // console.log(watcher);
  }
  /**
   * 更新视图
   */
  notify() {
    this.subs.forEach((watcher) => watcher.update());
  }
  // 当前的watcher，类似于一个指针 指向当前的watcher
  static target = null;
}

// watcher queue 视图渲染栈
const watcherStack = [];
/**
 * watcher入栈
 * @param {Watcher} watcher
 */
export function pushWatcherTarget(watcher) {
  watcherStack.push(watcher);
  Dep.target = watcher;
}
/**
 * watcher 出栈 且让 Dep.target 指向上一个入栈的 watcher
 */
export function popWatcherTarget() {
  watcherStack.pop();
  Dep.target = watcherStack[watcherStack.length - 1];
}
export default Dep;
