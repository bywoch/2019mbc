'use strict';
var visualSlide;

var InitMainUI = {
    RelationBID: "",
    TopSlide: function () {
        var _this = this;
        visualSlide = $('.visual-slide').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.visual-page',
            appendPause: '.visual-page .pause',
            dots: true,
            pauseButton: true,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            accessibility: true
        });

        $('.rel-btn button').click(function (e) {
            e.preventDefault();
            $(this).find('.arr').toggleClass('active');

            //if($(this).attr('data-flag')=="N"){
            if (_this.RelationBID != $(this).attr('data-bid')) {
                _this.RelationBID = $(this).attr('data-bid');
                MainInfo.TopRelationContent(_this.RelationBID, 6);
                $(this).attr('data-flag', "Y");
                visualSlide.slick('slickPause');
            }
            //}
            //else{
            //	$(this).attr('data-flag',"N");	
            //}
            _this.RelContent(this);

            if ($(this).find('.arr').hasClass('active')) {
                stopInterval();
            } else {
                startInterval();
            }
        })

        $('.visual-slide').on('beforeChange', function (event, slick, direction) {
            $(this).find('.arr').removeClass('active');
            _this.RelContent(this);
        });
    },
    RelationSlide: function () {
        if ($('.rel-Slide').hasClass('slick-initialized')) {
            $('.rel-page.pagination.wrapper').html('');
            $('.rel-Slide').removeClass('slick-slider');
            $('.rel-Slide').removeClass('slick-initialized');
            $('.rel-Slide').removeClass('slick-dotted');
        }

        $('.rel-Slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            appendDots: '.rel-page',
            dots: true,
            arrows: true,
            draggable: false
        });

        if ($('.pause button').attr('class').indexOf('stop') > -1) {
            $('.pause button').click();
        }

    },
    RelContent: function (select) {
        var relArr = $(select).find('.arr');
        if (relArr.hasClass('active')) {
            $('.rel-contents').addClass('on').css('z-index', '150');
            $('.rel-contents').stop().animate({
                'opacity': '1',
                'bottom': '102px'
            }, 500);
            $('.visual .item .con-wrap').stop().animate({
                'bottom': '38.5%'
            }, 500);
        } else {
            $('.rel-contents').removeClass('on').css('z-index', '0');
            $('.rel-contents').stop().animate({
                'opacity': '0',
                'bottom': '0'
            }, 500);
            $('.visual .item .con-style1').stop().animate({
                'bottom': '32%'
            }, 500);
            $('.visual .item .con-style2').stop().animate({
                'bottom': '32%'
            }, 500);
        }
    },
    EnewsSlide: function () {
        $('.ent-slide').slick({
            infinite: true,
            // slidesPerRow: 2,
            slidesToShow: 1,
            slidesToScroll: 1,
            // rows:2,
            appendDots: '.ent-page',
            dots: true,
            arrows: false,
            draggable: false
        });
    },
    EnewsSlide2: function () {
        $('.ent-slide-v2').slick({
            infinite: true,
            // slidesPerRow: 2,
            slidesToShow: 1,
            slidesToScroll: 1,
            // rows:2,
            appendDots: '.ent-page',
            dots: true,
            arrows: false,
            draggable: false
        });
    },
    ResumeSlide: function () {
        $('.resume-slide').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            appendDots: '.resume-page',
            dots: true,
            arrows: true,
            speed: 1000,
        });
        $('.arr-slide .slick-arrow').hide();
    }
}

function activeClass(select) {
    $(select).addClass('active');
    $(select).siblings().removeClass('active');
}

function banCount() {
    var thisNum = $('.ban-slide .slick-slide').not('.slick-cloned');
    var activeNum = thisNum.siblings('.slick-active').index();
    var allNum = $('.ban-slide .slick-slide').not('.slick-cloned').length;
    $('.ban-left .ban-count span.num-active').html(activeNum);
    $('.ban-left .ban-count span.num-all').html(allNum);
}

$(document).ready(function () {
    MainInfo.Init();
    /* 제이쿼리 추가 */

    $('button').click(function () {
        activeClass(this);
    })

    $('.ch-mbc-btn').click(function () {
        $('.ch-mbc').toggleClass('on');
        $('.main-wrap').toggleClass('on');
        $('.visual-page').toggleClass('on');
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $('.ch-mbc-wrap ul li a').attr('tabindex', '0');
        } else {
            $('.ch-mbc-wrap ul li a').attr('tabindex', '-1');
        }
    });


    /********************************************************************* 슬라이드 옵션 ****************/

    $('.arr-slide').children('.slick-arrow').css('display', 'none');

    $('.arr-slide').mouseenter(function () {
        var thisSlide = $(this);
        thisSlide.children('.slick-arrow').show();

    }).mouseleave(function () {
        var thisSlide = $(this);
        thisSlide.children('.slick-arrow').hide();
    });

    $('.pause button').click(function () {
        var test = $(this).attr('class');
        $(this).toggleClass('play stop');
        // console.log(test);
        // visualSlide.slick('slickPause');

        if (test.indexOf('stop') > -1) {
            visualSlide.slick('slickPause');
        } else {
            visualSlide.slick('slickPlay');
        }

    });

    /* 하단 배너영역 페이지 넘버 */
    banCount();
    $('.ban-slide').on('afterChange', function (event, slick, direction) {
        banCount();
    });
    startInterval();
});


/* 관련 컨텐츠 */
var arrInterval = null;

function startInterval() {
    if (arrInterval == null) {
        arrInterval = setInterval(function () {
            // alert('t');
            $('.visual .item .rel-btn button span.arr').animate({
                'opacity': '0',
                'transform': 'scale(0)',
                'margin-top': '4px'
            }, 300, function () {
                $(this).animate({
                    'opacity': '1',
                    'transform': 'scale(1)',
                    'margin-top': '6px'
                }, 300);
            });
        }, 1500);
    }
}

function stopInterval() {
    clearInterval(arrInterval);
    arrInterval = null;
}