var ulimgs = document.getElementById('ul-imgs');

var COUNT = 3; //轮播图图片的张数
var i = 0; //当前轮播图的位置
var banner = document.getElementById("banner");
var imgwidth = document.getElementById('img1');
var marginLeft = imgwidth.clientWidth;

window.onresize = function () { //窗口大小改变时，重新获取宽度
    marginLeft = imgwidth.clientWidth;
}
var timer = null;

function timeout() { //自动播放轮播图
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
        i++;
        moveTo(i)
        if (i == COUNT) {
            moveTo(0)
        }
        if (i == COUNT + 1) {
            moveTo(0)
            setTimeout(function () {
                ulimgs.style.marginLeft = '0px';
                ulimgs.classList = "";
            }, 0)
            i = 0;
        }
        ulimgs.style.marginLeft = -i * marginLeft + "px";
        ulimgs.classList = "animation";
    }, 3000)
}
//点击进行图片切换
var ulidx = document.getElementById("ul-idx");
var lis = document.querySelectorAll("#ul-idx>li");
console.log(lis);
//使用事件委托的方式给每个指示器添加点击书剑
ulidx.onclick = function (e) {
    if (e.target.nodeName == "LI") {
        var idx = Array.prototype.indexOf.call(lis, e.target);
        ulimgs.style.marginLeft = -idx * marginLeft + "px";
        moveTo(idx);
        i = idx;

        setTimeout(function () {
            timeout();
        }, 500)
    }
}

function moveToimg(n) {
    ulimgs.style.marginLeft = -n * marginLeft + "px";
}
var btnleft = document.getElementById('btn-left');
var btnright = document.getElementById("btn-right");

//左移
btnright.onclick = function () {
    if (i < COUNT - 1) {
        i = i + 1;
        ulimgs.style.marginLeft = -i * marginLeft + "px";
        moveTo(i);
        setTimeout(function () {
            timeout();
        }, 500)
    }
}

//右移
btnleft.onclick = function () {
    console.log(i);
    if (i > 0) {
        i = i - 1;
        ulimgs.style.marginLeft = -i * marginLeft + "px";
        moveTo(i);

        setTimeout(function () {
            timeout();
        }, 500)
    }
}

//当前显示的第几张图片
function moveTo(a) {
    var lilist = document.querySelectorAll("#ul-idx>li");
    for (var i = 0; i < COUNT; i++) {
        lilist[i].className = "";
        if (a == i) {
            lilist[a].className = "active";
        }
    }
}

window.onload = function () {
    timeout();
}