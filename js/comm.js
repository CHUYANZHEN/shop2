/**
 * Created by web on 2019/6/15.
 */

function  getIncludeHtml(param){
    ajax({
        url:"http://127.0.0.1:5500/header.html",
        type:"get",
    }).then(res=>{
        var header=document.getElementById("header");
        header.innerHTML=res;
        document.getElementsByClassName(param)[0].className = param + ' on';
        // console.log('header:', res);
    });
    ajax({
        url:"http://127.0.0.1:5500/footer.html",
        type:"get"
    }).then(res=>{
        var footer=document.getElementById("footer");
        footer.innerHTML=res;
        //console.log(res);
    });
}