//动画原理
function animate(obj, target) {
  //1、获得盒子当前位置
  // var div = document.querySelector("div");
  //2、让盒子在当前位置加上1个移动距离 同时利用定时器不断重复这个动作
  var timer = setInterval(function () {
    //3 加上一个结束定时器的条件
    if (obj.offsetLeft >= target) {
      //怎么样停止动画-停止动画，本质是停止定时器
      clearInterval(timer);
    }
    obj.style.left = obj.offsetLeft + 1 + "px";
  }, 30);

  //4、注意此元素需要添加定位position，才能使用element.style.left;
}
