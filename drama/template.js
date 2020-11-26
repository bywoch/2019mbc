'use strict';

var programData = {
    name: '방송연기대상',
    prgCode: '1004844100000100000', // 신규 : 1004223100000100000 - 테스트 : 1003541100000100000
    home: 'http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/',
    imgUrl: 'http://img.imbc.com//broad/tv/ent/event/2019mbc/drama/images/',
    titLength: 26,
    txtLength: 74,
    page1: 1,
    page2: 2,
    enewsApi: { // 뉴스 갯수
        nStart: 1,
        nEnd: 2
    }
}

var navData = {
    "title": ['프로그램소개', '시청자가 뽑은 올해의 드라마', '최고의 1분 커플', '방청신청', '최신뉴스', '방송보기', '방송 하이라이트', '다시보기', '역대하이라이트'],
    "url": ['', 'program', 'couple', 'ticket', 'news', 'clip', 'clip', 'vod', 'allclip']
}

/*var navData = {
    "title": ['프로그램소개', '시청자가 뽑은 올해의 드라마', '최고의 1분 커플', '방청신청', '최신뉴스', '역대하이라이트', '현장포토', '수상내역', '방송하이라이트', '다시보기'],
    "url": ['', 'program', 'couple', 'ticket', 'news', 'allclip', 'photo', 'winner', 'clip', 'vod']
}*/

$(document).ready(function () {
    //title 설정
    //contentTitle();
    if ($('.main').length) {
        //getClip();
        //getMdClip();
        //getTeaser();
        //getVod();
        //getPreview();
        //getNews();
        //getPhoto();
        //getSpecialclip();
        //getReplay();
        //getEnews();
    }

    //상단
    var $html = String();
    var $logo = String();

    if ($('.main').length) {
        $logo = '<div class="box-visual">' +
            /*'<img src="' + programData.imgUrl + 'mian_top_bg.jpg" alt="' + programData.name + ' - 메인이미지" class="visual1">' +*/
            '</div>';
        $(".visual-top").prepend($logo);
    } else if ($('.sub').length) {
        $logo = '<div class="box-visual">' +
            /*'<img src="' + programData.imgUrl + 'mian_top_bg.jpg" alt="' + programData.name + ' - 메인이미지" class="visual1">' +*/
            '</div>';
        $(".visual-top").prepend($logo);

    }

    //nav
    /*var navHtml = '';
    navHtml += '<h2 class="blind">' + programData.name + ' 프로그램 메뉴</h2>';
    navHtml += '<ul>';
    for (var i = 0; i < navData.title.length; i++) {
        navHtml += '<li id="' + navData.url[i] + '"><a href="' + programData.home + navData.url[i] + '">' + navData.title[i] + '</a></li>';
    }
    navHtml += '</ul>';
    $('#programNav').append(navHtml);

    //dropdown
    $(".nav li").on('mouseover', function () {
        $(this).children("a").addClass('on');
        $(this).find(".dropdown").show();
    });
    $(".nav li").on('mouseleave', function () {
        $(this).children("a").removeClass('on');
        $(this).find(".dropdown").hide();
    });*/

    //nav_on
    // var url = window.location.href.split("/"); 
    // var subMenu = url[url.length-1]; 
    // var firstMenu = subMenu.replace('.html',''); 
    //$(".nav ul> li."+firstMenu).addClass("on"); 
    //$(".nav ul li:last-child a").attr("href", "http://onair.imbc.com/talkplay").attr("target", "_blank");

    // Nav Add
    var $nav = $('#programNav');
    var nav = document.createElement('ul');
    nav.innerHTML = [
       '<li><a href="' + programData.home + 'index.html" class="item"><span class="screen-out">프로그램 소개</span></a></li>',
       '<li><a href="' + programData.home + 'program" class="item"><span class="screen-out">시청자가 뽑은 올해의 드라마</span></a></li>',
       '<li><a href="' + programData.home + 'couple" class="item"><span class="screen-out">최고의 1분 커플</span></a></li>',
       '<li><a href="' + programData.home + 'ticket" class="item"><span class="screen-out">방청신청</span></a></li>',
       '<li><a href="' + programData.home + 'news" class="item"><span class="screen-out">최신뉴스</span></a></li>',
       '<li>',
         '<a href="' + programData.home + 'clip" class="item"><span class="screen-out">방송보기</span></a>',
         '<div class="dropdown">',
           '<a href="' + programData.home + 'clip">방송하이라이트</a>',
           '<a href="' + programData.home + 'vod">다시보기</a>',
         '</div>',
       '</li>',
       '<li><a href="' + programData.home + 'allclip" class="item"><span class="screen-out">역대하이라이트</span></a></li>',
       //'<li><a href="' + programData.home + 'winner" class="item"><span class="screen-out">수상내역</span></a></li>'
     ].join('');
    $nav.append(nav);


    //서브메뉴 dropdown
    var $navItems = $nav.find('.item');
    var $dropdown = $nav.find('.dropdown');
    $dropdown.hide();
    $navItems.on('mouseover focus', function () {
        $navItems.removeClass('active');
        $dropdown.hide();
        $(this).addClass('active').next().show();
    });
    $dropdown.find('a:last-child').on('blur', function () {
        $(this).parent().hide().prev().removeClass('active');
    });
    $nav.on('mouseleave blur', function () {
        $dropdown.hide();
        $navItems.removeClass('active');
    });

    // tab function
    $('.tab-wrap button').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var index = $(this).index();

        $('.tab-con').hide();
        $('.tab-con').eq(index).show();


    });
    $('.tab-wrap button').eq(0).click();

});

//(jQuery);
