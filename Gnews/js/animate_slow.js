/* //注意：--李靖的性能优化 面对网页有多个轮播图块时
//优化每次用timer命名占用内存的写法， 用对象的属性去替代变量，来充当 每一个timer */
function animate_slow(obj, target, callback) {
  clearInterval(obj.timer);

  obj.timer = setInterval(function () {
    /* //缓动动画原理 ——思路
    //1、让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
    //2、核心算法：（目标值 - 现在的位置） / 10 作为每次移动的距离 步长，步长值写到定时器的里面 写成整数
    //3、停止的条件是： 让当前盒子位置等于目标位置的时候， 就停止定时器 */
    //var step = Math.ceil((target - obj.offsetLeft) / 10);
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //var step = (target - obj.offsetLeft) / 10;
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      //回调函数写到定时器里
      if (callback) {
        callback; //调用函数
      }
    }
    /* // 注意此行时缓动动画原理，替代下一行的
    //把挨着的那行每次加1 这个步长值改为一个慢慢变小的值 步长公式：（目标值 - 现在的位置）/ 10 */
    obj.style.left = obj.offsetLeft + step + "px";
    /* obj.style.left = obj.offsetLeft + 1 + "px"; */
    /* //     匀速动画 就是 盒子是当前的位置 + 固定的值 10
    //     缓动动画就是 盒子当前的位置 + 变化的值（目标值 - 现在的位置） / 10 */
  }, 30);
}
