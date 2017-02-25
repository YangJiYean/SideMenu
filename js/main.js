'use strict';

$(document).ready(function () {

    var sideMenu = new SideMenu({
        selector: '.side_menu',
        showBtnSelector: '.side_menu_btn',
        shadowSelector:'.side_shadow'
    });

    /*$('.side_menu_btn').on('click',function () {
       $('.side_menu').stop().animate({
           left: 0
       }, 500);
        $('.side_shadow').stop().fadeIn(300);
    });

    $('.side_menu .close_btn').on('click', function () {
        $('.side_menu').stop().animate({
            left: -500
        }, 500);
        $('.side_shadow').stop().fadeOut(300);
    });

    $('.side_menu .main_menu > li > a').on('click', function () {
       $('.sub_menu').not($(this).siblings('.sub_menu')).stop(false, true).slideUp(500);
        $(this).siblings('.sub_menu').stop(false, true).slideDown(500);
    });*/
});