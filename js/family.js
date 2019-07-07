/**
 * Created by web on 2019/6/13.
 */
(function(){
    //1.查找触发事件的元素
    var lis=document.querySelectorAll(".family ul li");
    //2.遍历每一个元素，绑定事件处理函数
    for(var li=1;li<lis.length-1;li++) {

        lis[li].onmouseover = function () {
            //3.修改元素
            var div = this.lastElementChild;
            div.style.display = "block";
        }
        lis[li].onmouseout = function () {
            //3.修改元素
            var div = this.lastElementChild;
            div.style.display = "none";
        }
    }
})()
