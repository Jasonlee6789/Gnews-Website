window.addEventListener("load", function () {
  // 1、获取元素
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");
  //2.鼠标经过或者离开，显示箭头
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
  });

  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
  });

  //3.动态生成小圆圈，有几张图片，我就生成几个小圆圈。
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");
  for (var i = 0; i < ul.children.length; i++) {
    //创建一个小li
    var li = document.createElement("li");
    //记录当前小圆圈的索引号，通过自定义属性来做
    li.setAttribute("index", i);
    //把小li插入到ol里面
    ol.appendChild(li);

    // 4. 小圆圈的排他思想 我们可以直接在for 循环生成小圆圈的同时直接绑定点击事件
    li.addEventListener("click", function () {
      // 把所有的小li 清除current类名
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }

      // 把当前的小li 设置current类名
      this.className = "current";

      //5.点击小圆圈，移动图片 当然移动是的 ul
      //ul的移动距离  小圆圈的索引号 乘以图片的宽度 注意是-
      //当我们点击了某个小li 就拿到了当前的小li 的索引号
      var index = this.getAttribute("index");

      var focusWidth = focus.offsetWidth;

      animate_slow(ul, -index * focusWidth);
    });
  }
});
