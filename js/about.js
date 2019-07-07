/**
 * Created by web on 2019/6/13.
 */
(function(){

    var a=document.getElementById("a1");
    var img=document.querySelector("#a1>img");

    a.onmousemove=function(){
        var url=img.getAttribute("data-url1");
        img.src=url;
    }
    a.onmouseout=function(){
        var url=img.getAttribute("data-url");
        img.src=url;
    }
})()