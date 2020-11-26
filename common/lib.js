$(document).ready(function () {

    /*---------------Main Top Slide Area End Start---------------*/

    $('.prgr_nav_wrap .prgr_nav .pn_title ul').hide();

    $('.prgr_nav_wrap .prgr_nav .pn_title').mouseover(function () {
        $(this).children().show();

    });
    $('.prgr_nav_wrap .prgr_nav .pn_title').mouseleave(function () {
        $('.prgr_nav_wrap .prgr_nav .pn_title ul').hide();

    });

    $('.visual-slide').slick({
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


    /*---------------Main Top Slide Area End-------------*/

    /*---------------Main Clip Slide Area Start---------------*/

    var data = 0;
    var totalSlides = $(".section ul li").length;
    var sliderWidth = $(".section ul li").outerWidth(true);

    if ($(".section ul li").length <= 2 && $('.section ul li').length > 0) {
        $(".section .btn-list").hide();
    } else {
        $(".section .btn-list").show();
    }

    $(".section .prev").click(function () {
        subSlideRight1();
        subSlideRight2();
        subSlideRight3();
        return false;
    });
    $(".section .next").click(function () {
        subSlideLeft1();
        subSlideLeft2();
        subSlideLeft3();
        return false;
    });

    // ※ 방송연예대상 ※
    //방송 하이라이트(화재의1분)
    function subSlideRight1() {
        $("#eclipList ul li").eq(0).before($('#eclipList ul li').last());
    }

    function subSlideLeft1() {
        $("#eclipList ul li").filter(':last').after($("#eclipList ul li").first());
    }
    //역대 하이라이트
    /*function subSlideRight1() {
        $("#eaclipList ul li").eq(0).before($('#eaclipList ul li').last());
    }

    function subSlideLeft1() {
        $("#eaclipList ul li").filter(':last').after($("#eaclipList ul li").first());
    }*/

    // ※ 방송연기대상 ※
    //방송 하이라이트(화재의1분)
    function subSlideRight2() {
        $("#dclipList ul li").eq(0).before($('#dclipList ul li').last());
    }

    function subSlideLeft2() {
        $("#dclipList ul li").filter(':last').after($("#dclipList ul li").first());
    }
    //역대 하이라이트
    /*function subSlideRight2() {
        $("#daclipList ul li").eq(0).before($('#daclipList ul li').last());
    }

    function subSlideLeft2() {
        $("#daclipList ul li").filter(':last').after($("#daclipList ul li").first());
    }*/

    // ※ 가요대제전 ※
    //방송 하이라이트(화재의1분)
    function subSlideRight3() {
        $("#mclipList ul li").eq(0).before($('#mclipList ul li').last());
    }

    function subSlideLeft3() {
        $("#mclipList ul li").filter(':last').after($("#mclipList ul li").first());
    }
    //역대 하이라이트
    /*function subSlideRight3() {
        $("#maclipList ul li").eq(0).before($('#maclipList ul li').last());
    }

    function subSlideLeft3() {
        $("#maclipList ul li").filter(':last').after($("#maclipList ul li").first());
    }*/


    /*---------------Main Clip Slide Area End---------------*/


});

/*---------------Main Clip Area Start---------------*/

// ※ 방송연예대상 ※
//방송 하이라이트(화재의1분)
geteClip = function () {
    var innerArticle = '';
    var key = programData.eclip;
    var items = getItems(key);
    if (items) {
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                innerArticle += '<li>' +
                    '<a href="' + programData.ehome + 'clip2019/index.html?list_id=' + item.list_id + '">' +
                    '<div class="img">' + '<img src="' + item.view_img.toLowerCase().replace("_small", "") + '" alt="' + item.title + '"></div>' +
                    '<div class="txt-wrap">' +
                    '<p class="title">' + getWidth(item.title, 38) + '</p>' +
                    '<p class="date">' + item.reg_date + '</p>' +
                    '</div>' + '</a>' + '</li>';
            }
        } else {
            $('#eclipList').hide();
        }
    }
    $('.eclip').append(innerArticle);
}
//역대 하이라이트
/*
geteaClip = function () {
    var innerArticle = '';
    var key = programData.eaclip;
    var items = getItems(key);
    if (items) {
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                innerArticle += '<li>' +
                    '<a href="' + programData.ehome + 'allclip/index.html?list_id=' + item.list_id + '">' +
                    '<div class="img">' + '<img src="' + item.view_img.toLowerCase().replace("_small", "") + '" alt="' + item.title + '"></div>' +
                    '<div class="txt-wrap">' +
                    '<p class="title">' + getWidth(item.title, 38) + '</p>' +
                    '<p class="date">' + item.reg_date + '</p>' +
                    '</div>' + '</a>' + '</li>';
            }
        } else {
            $('#eaclipList').hide();
        }
    }
    $('.eaclip').append(innerArticle);
}
*/


// ※ 방송연기대상 ※
//방송 하이라이트(화재의1분)
getdClip = function () {
    var innerArticle = '';
    var key = programData.dclip;
    var items = getItems(key);
    if (items) {
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                innerArticle += '<li>' +
                    '<a href="' + programData.dhome + 'clip/index.html?list_id=' + item.list_id + '">' +
                    '<div class="img">' + '<img src="' + item.view_img.toLowerCase().replace("_small", "") + '" alt="' + item.title + '"></div>' +
                    '<div class="txt-wrap">' +
                    '<p class="title">' + getWidth(item.title, 38) + '</p>' +
                    '<p class="date">' + item.reg_date + '</p>' +
                    '</div>' + '</a>' + '</li>';
            }
        } else {
            $('#dclipList').hide();
        }
    }
    $('.dclip').append(innerArticle);
}
//역대 하이라이트
/*getdaClip = function () {
    var innerArticle = '';
    var key = programData.daclip;
    var items = getItems(key);
    if (items) {
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                innerArticle += '<li>' +
                    '<a href="' + programData.dhome + '/allclip/index.html?list_id=' + item.list_id + '">' +
                    '<div class="img">' + '<img src="' + item.view_img.toLowerCase().replace("_small", "") + '" alt="' + item.title + '"></div>' +
                    '<div class="txt-wrap">' +
                    '<p class="title">' + getWidth(item.title, 38) + '</p>' +
                    '<p class="date">' + item.reg_date + '</p>' +
                    '</div>' + '</a>' + '</li>';
            }
        } else {
            $('#daclipList').hide();
        }
    }
    $('.daclip').append(innerArticle);
}*/


// ※ 가요대제전 ※
//방송 하이라이트(화재의1분)
getmClip = function () {
    var innerArticle = '';
    var key = programData.mclip;
    var items = getItems(key);
    if (items) {
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                innerArticle += '<li>' +
                    '<a href="' + programData.ghome + 'clip2019/index.html?list_id=' + item.list_id + '">' +
                    '<div class="img">' + '<img src="' + item.view_img.toLowerCase().replace("_small", "") + '" alt="' + item.title + '"></div>' +
                    '<div class="txt-wrap">' +
                    '<p class="title">' + getWidth(item.title, 38) + '</p>' +
                    '<p class="date">' + item.reg_date + '</p>' +
                    '</div>' + '</a>' + '</li>';
            }
        } else {
            $('#mclipList').hide();
        }
    }
    $('.mclip').append(innerArticle);
}
//역대 하이라이트
/*getmaClip = function () {
    var innerArticle = '';
    var key = programData.maclip;
    var items = getItems(key);
    if (items) {
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                innerArticle += '<li>' +
                    '<a href="' + programData.ghome + 'allclip/index.html?list_id=' + item.list_id + '">' +
                    '<div class="img">' + '<img src="' + item.view_img.toLowerCase().replace("_small", "") + '" alt="' + item.title + '"></div>' +
                    '<div class="txt-wrap">' +
                    '<p class="title">' + getWidth(item.title, 38) + '</p>' +
                    '<p class="date">' + item.reg_date + '</p>' +
                    '</div>' + '</a>' + '</li>';
            }
        } else {
            $('#maclipList').hide();
        }
    }
    $('.maclip').append(innerArticle);
}*/

/*---------------Main Clip Area End---------------*/


/**/

getItems = function (key) {
    var articles = document.articles;
    if (key in articles) {
        var data = articles[key]
        return data;
    }
};

getWidth = function (t, w) {
    if (t.length > w) return t.substring(0, w) + '...';
    else return t;
};

/**/


getBoardData = function () {
    // ※ 방송연예대상 ※
    document.write('<scr' + 'ipt src="http://imbbs.imbc.com/getjs.mbc?bid=' + programData.eclip + '&npage=8&img=yes&tlen=100&content=yes&clen=' + programData.txtLength + '"></script>');
    document.write('<scr' + 'ipt src="http://imbbs.imbc.com/getjs.mbc?bid=' + programData.eaclip + '&npage=8&img=yes&tlen=100&content=yes&clen=' + programData.txtLength + '"></script>');
    // ※ 방송연기대상 ※
    document.write('<scr' + 'ipt src="http://imbbs.imbc.com/getjs.mbc?bid=' + programData.dclip + '&npage=8&img=yes&tlen=100&content=yes&clen=' + programData.txtLength + '"></script>');
    document.write('<scr' + 'ipt src="http://imbbs.imbc.com/getjs.mbc?bid=' + programData.daclip + '&npage=8&img=yes&tlen=100&content=yes&clen=' + programData.txtLength + '"></script>');
    // ※ 가요대제전 ※
    document.write('<scr' + 'ipt src="http://imbbs.imbc.com/getjs.mbc?bid=' + programData.mclip + '&npage=8&img=yes&tlen=100&content=yes&clen=' + programData.txtLength + '"></script>');
    document.write('<scr' + 'ipt src="http://imbbs.imbc.com/getjs.mbc?bid=' + programData.maclip + '&npage=8&img=yes&tlen=100&content=yes&clen=' + programData.txtLength + '"></script>');
};