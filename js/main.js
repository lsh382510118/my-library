/**
 * Created by 月_霜影 on 2017/3/20.
 */

sideScroll('mainNav');

// 侧边栏点击 主模块类锚点平滑滚动
function sideScroll(boxId){
    var menuList = document.getElementById(boxId).getElementsByTagName('li');
    var timer=null;
    for(var i = 0;i<menuList.length;i++){
        (function(i){
            menuList[i].onclick = function(){
                clearInterval(timer);
                var mudolarEle = this.getElementsByTagName('a')[0].getAttribute('link');
                if(!mudolarEle){
                    return;
                }
                timer = setInterval(function(){
                    var top = document.getElementById(mudolarEle).offsetTop,//元素到顶部的距离720
                        boxTop = document.getElementById('mainBox').scrollTop;//滚动条到顶部的距离0
                    var distance = boxTop - top;
                    var speed = distance/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    document.getElementById('mainBox').scrollTop = boxTop - speed;
                    if(speed == 0 && distance == 0){
                        clearInterval(timer);
                    }
                },30);
            }
        })(i)
    }
};

// plugin手风琴
function accordion(obj)  {
    var   len ,
        normalWidth,                     //正常宽度
        thisWidth,                          //当前宽度
        otherWidth;                       //其他宽度
    len = obj.children.length;
    normalWidth = $(obj).width()/len;
    thisWidth = 80 * (len - 1) + normalWidth;
    otherWidth = normalWidth -80;
    $(obj).find('.accordion-item').mouseover(function () {
        $(this).stop().animate({width:thisWidth},500).siblings("div").stop().animate({width:otherWidth},500);
    })
}

// 下拉框

function selectPlugin() {
    // var $obj = $(".selectbox[data-sel='custom']");
    var $obj = $('[data-sel="custom"]')
    $obj.on('click','.select-title',function () {
        console.info($(this))
        $(this).parent().toggleClass('show');
    })
    $obj.on('click','.select-item',function () {
        var txt = $(this).text();
        $(this).parent().siblings('.select-title').find('.select-title-txt').text(txt);
        $obj.removeClass('show');
    })
    $obj.on('mouseleave','.select-main',function () {
        console.info('left')
            console.info($(this))
            $(this).parent().removeClass('show');
    })
}