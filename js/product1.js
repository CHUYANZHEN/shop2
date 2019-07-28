/**
 * Created by web on 2019/6/15.
 */
//获取当前点击视频观看
var videoplay = document.getElementById("videoplay");
var btnbox = document.getElementById("btn-box");
var ulvideo = document.getElementById("ul-video");
var video = document.getElementById("video");
ulvideo.onclick = function (e) {
    if (e.target.nodeName == "IMG") {
        var src1 = e.target.parentNode;
        src1 = src1.dataset.src;
        videoplay.style.display = "block";
        video.src = src1;
    }
}

videoplay.onclick = function (e) {
    if (e.target.nodeName == "DIV") {
        videoplay.style.display = "none";
        video.pause();

    }
}

btnbox.onclick = function (e) {
    if (e.target.nodeName == "IMG") {
        var src1 = e.target.parentNode;
        src1 = src1.dataset.src;
        videoplay.style.display = "block";
        video.src = src1;
    }
}