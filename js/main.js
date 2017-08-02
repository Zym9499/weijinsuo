/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-07-21 20:09:34
 */

'use strict';
$(function() {
    function resize() {
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        //根据每个轮播图判断图大小
        $('#main_ad > .carousel-inner > .item ').each(function(i, item) {
            var $item = $(item);
            var imgScr = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

            $item.css('backgroundImage', 'url("' + imgScr + '")');

            if (isSmallScreen) {
                $item.html(' <img src = "'+imgScr + '"  alt=""/> ');
            }else{
            	$item.empty();
            }
        });
    };
    $(window).on('resize', resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();
    var $ulContainer = $('.nav-tabs');
    var width = 30;
    $ulContainer.children().each(function(index,element){
        width += element.clientWidth;
    });
    //判断当前ul的宽度是否超出屏幕，超出就显示横向滚动条
    if(width > $(window).width()){
        $ulContainer.css('width',width);
        $ulContainer.parent().css('overflow-x','scroll');

    }
    //a点击事件
    var $newTitle = $('.news-title');
    $('#news .nav-pills a').on('click',function(){
        var $this = $(this);
        var title = $this.data('title');
        $newTitle.text(title);
    });
    var $carousels = $('.carousel');
    var startX,endX
    var offset = 50;
    $carousels.on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    })
    $carousels.on('touchmove',function(e){
        endX = e.originalEvent.touches[0].clientX;
    })
    $carousels.on('touchmove',function(e){
        var distance = Math.abs(startX - endX);
        if( distance>offset){
            $carousels.carousel(startX > endX ?'next':'prev');
        }
    });
});
