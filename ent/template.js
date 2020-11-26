'use strict';

//globalfunction추가
try {
    getCookie("IMBCMAIN")
} catch (e) {
    document.write("<script" + " type='text/jav" + "asc" + "ript' src='http://www.imbc.com/common/js/global_function.js' charset='euc-kr'></script" + ">");
}

// gnb css 추가
/*document.write("<link rel='stylesheet' href='http://www.imbc.com/commons/css/inc/gnb.2018.css' type='text/css'></link>");*/
try {
    var hdWrap = $('.hd-wrap');
} catch (e) {
    loadDynamic("js", "http://www.imbc.com/commons/js/jquery-1.8.3.min.js", "");
    setTimeout(gnbNavList, 200);
}

// 181203 sub gnb get.Data.js 개편 테스트
var imbcGnbData = {
    gnbNavList: {
        sub: [
            ['', 'MBC', 'http://www.imbc.com/', 'logo', 'http://img.imbc.com/commons/2018/image/main/mbc-logo.png'],
            ['', '드라마', 'http://www.imbc.com/broad/tv/drama/', 'imenu'],
            ['', '예능', 'http://www.imbc.com/broad/tv/ent/', 'imenu'],
            ['', '시사교양', 'http://www.imbc.com/broad/tv/culture/', 'imenu'],
            ['', '연예', 'http://www.imbc.com/broad/enews/', 'imenu'],
            ['', '스포츠', 'http://www.imbc.com/broad/tv/sports/', 'imenu'],
            ['', '라이프', 'http://www.imbc.com/broad/life/', 'imenu'],
            ['N', '뉴스', 'http://imnews.imbc.com/index_pc.html', 'imenu'],
            ['', '라디오', 'http://www.imbc.com/broad/radio/', 'imenu'],
            ['', '영화', 'http://global.imbc.com/', 'imenu'],
            ['', '<span>오리지널</span>', 'http://www.imbc.com/original/', 'imenu disco'],
            ['', 'search', 'javascript:SearchGnbInfo.Init();', 'search', 'http://img.imbc.com/commons/2018/image/main/lnb-search.png']
        ],
        NaviUrl: ['/broad/tv/drama/', '/broad/tv/ent/', '/broad/tv/culture/', '/broad/enews/', '/broad/sports/', '/broad/life/', '', '/broad/radio/', '//global.imbc.com', '/original']
    }
};



/* 181203 수정 */
function getGnbNaviList() {
    var innerHtml = '';
    var navList = imbcGnbData.gnbNavList.sub;
    for (var i = 0; i < navList.length; i++) {
        if (navList[i][3] && navList[i][4] && navList[i][0].length > 0) {
            innerHtml += '<li class="' + navList[i][3] + '"><a href="' + navList[i][2] + '" target="_blank"><img src="' + navList[i][4] + '" alt="' + navList[i][1] + '"></a></li>';
        } else if (navList[i][3] && navList[i][4]) {
            innerHtml += '<li class="' + navList[i][3] + '"><a href="' + navList[i][2] + '"><img src="' + navList[i][4] + '" alt="' + navList[i][1] + '"></a></li>';
        } else if (navList[i][3] && navList[i][0].length > 0) {
            innerHtml += '<li class="' + navList[i][3] + '"><a href="' + navList[i][2] + '"  target="_blank">' + navList[i][1] + '</a></li>';
        } else if (navList[i][0].length > 0) {
            innerHtml += '<li class="' + navList[i][3] + '"><a href="' + navList[i][2] + '"  target="_blank">' + navList[i][1] + '</a></li>';
        } else if (navList[i][3]) {
            innerHtml += '<li class="' + navList[i][3] + '"><a href="' + navList[i][2] + '">' + navList[i][1] + '</a></li>';
        }
    }
    return innerHtml;
}

function gnbNavList() {
    try {
        var navUrl = imbcGnbData.gnbNavList.NaviUrl;
        var loc = String(window.location.href).toLowerCase();
        for (var i = 0; i < navUrl.length; i++) {
            if (loc.indexOf(navUrl[i]) > 0) {
                $(".ignb").find(".imenu").eq(i).addClass("active");
                break;
            }
        }
    } catch (e) {
        setTimeout(gnbNavList, 200);
    }
}
//setTimeout(gnbNavList,200); // 181203 메뉴 호출 
/* 181203 수정 끝 */

/* 181203 검색어 부분 추가 */

function SetSearchHtml() {
    try {
        var searchHtml = '';
        searchHtml += '<div class="search-area" id="search-area">' +
            '<div class="search-box">' +
            '<div class="search-form box-wrap">' +
            '<form>' +
            '<label for="search"></label>' +
            '<input type="text" id="search" placeholder="검색어를 입력해주세요" />' +
            '<button><span><img src="http://img.imbc.com/commons/2018/image/main/search-box-icon.png" alt="검색" /></span></button>' +
            '</form>' +
            '</div>' +
            '<div class="best-list box-wrap">' +
            '<div class="pop-list pop-word">' +
            '<h3># 인기 검색어 <strong>BEST 5</strong></h3>' +
            '<div class="best word-best">' +
            '<ol></ol>' +
            '</div>' +
            '</div>' +
            '<div class="pop-list pop-star">' +
            '<h3># 인기 스타 <strong>BEST 5</strong></h3>' +
            '<div class="best star-best">' +
            '<ol></ol>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="search-after" id="search-after" onclick="SearchGnbInfo.afterFn();"></div>' +
            '</div>'
        $('body').prepend(searchHtml);
        if ($("#header").css("height") != "") {
            $("#header").css("height", "88px")
        }

        $("#search").keydown(function (key) {
            if (key.keyCode == 13) {
                $(".search-form.box-wrap").find("button").click();
                return false;
            }
        });

        /*
        if($("#wrap").css("height")!=""){
        	$("#wrap").css("height", "88px")
        }
        */

    } catch (e) {
        setTimeout(SetSearchHtml, 200);
    }

}

var SearchGnbInfo = {
    IsGnbSearch: false,
    Init: function () {
        var _this = this;
        if (!_this.IsGnbSearch) {
            _this.SearchBtn();
            _this.FavSearhText();
            _this.FavStarList();
            _this.IsGnbSearch = true;
        };
        $('.search-area').toggleClass('active');
        $('.spot-area .spot-wrap').toggleClass('on');
    },
    afterFn: function () {
        $('.search-area').toggleClass('active');
        $('.spot-area .spot-wrap').toggleClass('on');
    },
    SearchBtn: function () {
        $(".search-form.box-wrap").find("button").click(function () {
            var keyword = $.trim($(this).siblings("#search").val());
            if (keyword.length == 0) {
                alert("검색어를 입력해 주세요");
                return false;
            } else {
                location.href = "http://search.imbc.com?qt=" + escape(keyword);
                return false;
            }
        });
    },
    FavSearhText: function () {
        try {
            var _this = this;
            $.ajax({
                type: "get",
                url: "//control.imbc.com/WebApi/Main/FavSearhText",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "FavSearhText" + _this.MakeCallbackTime(),
                cache: true,
                success: function (o) {
                    _this.FavSearhTextUI(o);
                },
                error: function (request, status, error) {

                }
            });
        } catch (e) {
            $(".pop-list.pop-word").hide();
        }
    },
    FavSearhTextUI: function (o) {
        try {
            var szHtml = [];
            for (var i = 0; i < o.length; i++) {
                var l = "http://search.imbc.com?qt=" + escape(o[i].SearchText);
                szHtml.push('<li><a href="' + l + '"><span>' + o[i].Rank + '</span><strong>' + o[i].SearchText + '</strong></a></li>');
            }
            $(".best.word-best").find("ol").html(szHtml.join(''));
        } catch (e) {
            $(".pop-list.pop-word").hide();
        }
    },
    FavStarList: function () {
        try {
            var _this = this;
            $.ajax({
                type: "get",
                url: "//control.imbc.com/WebApi/Main/FavStarList",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "FavStarList" + _this.MakeCallbackTime(),
                cache: true,
                success: function (o) {
                    _this.FavStarListUI(o);
                },
                error: function (request, status, error) {

                }
            });
        } catch (e) {
            $(".pop-list.pop-star").hide();
        }
    },
    FavStarListUI: function (o) {
        try {
            var szHtml = [];
            for (var i = 0; i < o.length; i++) {
                var l = "http://search.imbc.com?qt=" + escape(o[i].ScriptText);
                szHtml.push('<li><a href="' + l + '"><span>' + o[i].Rank + '</span><strong>' + o[i].ScriptText + '</strong></a></li>');
            }
            $(".best.star-best").find("ol").html(szHtml.join(''));
        } catch (e) {
            $(".pop-list.pop-star").hide();
        }
    },
    MakeCallbackTime: function () {
        var d = new Date();
        var t =
            d.getFullYear() +
            this.pad2(d.getMonth() + 1) +
            this.pad2(d.getDate()) +
            this.pad2(d.getHours()) +
            this.pad2(d.getMinutes());
        return t;
    },
    pad2: function (n) {
        return (n < 10 ? '0' : '') + n;
    },
    getCookie: function (strName) {
        var strArg = new String(strName + "=");
        var nArgLen, nCookieLen, nEnd;
        var i = 0,
            j;

        nArgLen = strArg.length;
        nCookieLen = document.cookie.length;

        if (nCookieLen > 0) {
            while (i < nCookieLen) {
                j = i + nArgLen;
                if (document.cookie.substring(i, j) == strArg) {
                    nEnd = document.cookie.indexOf(";", j);
                    if (nEnd == -1) nEnd = document.cookie.length;
                    return unescape(document.cookie.substring(j, nEnd));
                }
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
            }
        }
        return ("");
    },
    setUrl: function () {
        var _this = this;
        _this.setCookie("IMBCURL", document.location, null, "/", "imbc.com")
    },
    setCookie: function (strName, strValue, dateExpires, strPath, strDomain, isSecure) {
        var strCookie;
        if (strName == "") return;

        strCookie = strName + "=" + escape(strValue) +
            ((dateExpires) ? "; expires=" + dateExpires.toGMTString() : "") +
            ((strPath) ? "; path=" + strPath : "") +
            ((strDomain) ? "; domain=" + strDomain : "") +
            ((isSecure) ? "; secure" : "");

        document.cookie = strCookie;
    },
    login: function () {
        var _this = this;
        _this.setUrl();
        window.location.href = "http://member.imbc.com/Login/Login.aspx";
    },
    logout: function () {
        var _this = this;
        _this.setUrl();
        window.location.href = "http://member.imbc.com/Login/Logout.aspx";
    }
}

var AjaxInfo = {
    OtherIE: function (query, userFunc) {
        if (window.XDomainRequest) {
            var xdr = new XDomainRequest();
            if (xdr) {
                xdr.onload = function () {
                    eval(userFunc + "(" + xdr.responseText + ")");
                    AjaxInfo.OtherLoad = true;
                }
                xdr.onerror = function () {}
                xdr.onprogress = function () {}
                xdr.open('GET', query, true);
                setTimeout(function () {
                    xdr.send();
                }, 0);
            }
        }
    }
}

/* 181203 검색어부분 추가 끝 */

function loadDynamic(t, l, c) {
    if (t.toUpperCase() == "JS") {
        var script = document.createElement("script");
        if (c.toUpperCase() == "KR") {
            script.charset = "euc-kr";
        } else if (c.toUpperCase() == "UTF") {
            script.charset = "utf-8";
        }
        script.src = l;
        script.type = "text/javascript";

        //script.defer = true;
        document.getElementsByTagName("head")[0].appendChild(script);
    } else if (t.toUpperCase() == "CSS") {
        var css = document.createElement("link")
        css.setAttribute("rel", "stylesheet")
        css.setAttribute("type", "text/css")
        css.setAttribute("href", l)
        document.getElementsByTagName("head")[0].appendChild(css);
    }
}


/* 181203 수정 */
document.write('<div class="hd-wrap">');
document.write('    <div class="gnb-wrap">');

document.write('<div class="logo">');
document.write('<a href="http://www.imbc.com/">');
document.write('<img src="http://img.imbc.com/commons/2018/image/main/mbc-logo.png" alt="mbc 홈페이지">');
document.write('</a>');
document.write('</div>');

document.write('        <nav id="imbc-h-nav" class="gnb-sub">');
document.write('            <h2 class="hd-t">주메뉴</h2>');
document.write('            <ul class="ignb">' + getGnbNaviList() + '</ul>');
document.write('        </nav>');
document.write('        <div class="isnb">');
document.write('            <h2 class="hd-t">개인메뉴</h2>');
document.write('            <ul class="login">');
try {
    if (escape(SearchGnbInfo.getCookie("IMBCMAIN")) != "") {
        document.write('                <li class="my"><a href="http://mypage.imbc.com">MY</a></li>');
        document.write('                <li class="log"><a href="javascript:SearchGnbInfo.logout();">로그아웃</a></li>');
    } else {
        document.write('                <li class="log"><a href="javascript:SearchGnbInfo.login();" >로그인</a></li>');
    }
} catch (e) {
    document.write('                <li class="log"><a href="javascript:SearchGnbInfo.login();" >로그인</a></li>');
}
document.write('                <li class="cash"><a href="http://www.imbc.com/help/vodnotice/index.html">이용권</a></li>');
document.write('            </ul>');
document.write('            <ul class="snb-box">');
document.write('                <li class="snb-onair"><a href="http://onair.imbc.com">온에어</a></li>');
document.write('                <li class="tv-table"><a href="http://www.imbc.com/s2018m/schedule.html">편성표</a></li>');
document.write('                <li class="snb-clip"><a href="http://clip.imbc.com/">클립</a></li>');
document.write('            </ul>');
document.write('        </div>');
document.write('    </div>');
document.write('</div>');

(function () {
    gnbNavList();
    SetSearchHtml();

    setTimeout(gnbNavList, 500);
})();


/* 181203 수정끝 */


/* 브라우저별 css */
var deviceOption = navigator.userAgent;
var isIe8 = deviceOption.toLowerCase().indexOf('msie 8.0'); // 익스플로러 8
var isIe7 = deviceOption.toLowerCase().indexOf('msie 7.0'); // 익스플로러 7 이하
var iSIe = deviceOption.indexOf("NET CLR"); // 익스플로러일 경우
var isChrome = deviceOption.indexOf("Chrome"); // 크롬일 경우
var isSafari = deviceOption.indexOf("Version");

if (isIe7 > -1) {
    setTimeout(function () {
        var searchArea = document.getElementById('search-area');
        var searchAfter = document.getElementById('search-after');
        searchArea.style.height = document.body.scrollHeight;
        searchArea.style.overflow = 'hidden';
        searchAfter.style.position = 'absolute';
        searchAfter.style.top = '88px';
    }, 1500);
}

// 구글통계코드
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6554956-2']);
_gaq.push(['_setDomainName', '.imbc.com']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function () {
    var footHtml = '';
    footHtml += '<div class="fnb-wrap">' +
        '<ul class="foot-menu">' +
        '<li><a href="http://aboutmbc.imbc.com/"><span>MBC</span> 소개</a></li>' +
        '<li><a href="http://aboutmbc.imbc.com/english/"><span>ABOUT MBC</span></a></li>' +
        '<li><a href="http://corp.imbc.com"><span>iMBC</span> 소개</a></li>' +
        '<li><a href="http://mmt.imbc.com/">협찬 및 간접광고</a></li>' +
        '<li><a href="http://www.imbc.com/withmbc/content/">영상자료판매</a></li>' +
        '<li><a href="http://help.imbc.com/rules/service.html">이용약관</a></li>' +
        '<li><a href="http://help.imbc.com/rules/privacy.html"><strong>개인정보 처리방침</strong></a></li>' +
        '<li><a href="http://help.imbc.com/rules/youthpolicy.html">청소년 보호정책</a></li>' +
        '<li><a href="http://help.imbc.com/rules/disclaimer.html">법적고지</a></li>' +
        '<li><a href="http://help.imbc.com/">고객센터</a></li>' +
        '</ul>' +
        '<ul class="sns-menu">' +
        '<li><a class="twt" href="https://twitter.com/withMBC" target="_blank" title="트위터">twitter</a></li>' +
        '<li><a class="fcb" href="https://www.facebook.com/MBC" target="_blank" title="페이스북">facebook</a></li>' +
        '<li><a class="isg" href="https://www.instagram.com/withmbc/" target="_blank" title="인스타그램">instagram</a></li>'
        //+ '<li><a class="ytb" href="" target="_blank" title="새창">youtube</a></li>'
        +
        '</ul>' +
        '</div>' +
        '<div class="add-wrap">' +
        '<div class="add-list add1">' +
        '<span class="ceo">(주)문화방송 대표이사 최승호</span>' +
        '<span class="address">서울시 마포구 성암로 267 (03925)</span>' +
        '<span class="phone">대표전화 02-789-0011</span>' +
        '</div>' +
        '<div class="add-list add2">' +
        '<span class="ceo">(주)아이엠비씨 대표이사 김원태</span>' +
        '<span class="address">서울시 마포구 성암로 255 (상암동 문화방송미디어센터 10층)</span>' +
        '<span class="phone">iMBC 고객센터 1544-4622</span>' +
        '<span class="number1">사업자등록번호 107-81-78996</span>' +
        '<span class="number2">통신판매업신고 2014-서울마포-0761</span>' +
        '<span class="number3">부가통신사업신고 002483호</span>' +
        '</div>' +
        '</div>'
    if ($('.enews-main').length) {
        footHtml += '<div class="caution">iMBC연예의 모든 콘텐츠는 저작권법에 의하여 보호를 받는바, 무단 전재 복제, 배포등을 금합니다.</div>';
    } else {
        footHtml += '<div class="copylight">Copyright(c) Since 1996, MBC&amp;iMBC All rights reserved.</div>';
    }

    footHtml += "<!--referrer : " + document.referrer + "-->";

    $('.fnb').append(footHtml);
});

$(document).ready(function () {
    var prgrHtml = '';
    prgrHtml += '<ul class="prgr_nav">' +
        '<li class="pn_title pntt_01">' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent">방송연예대상</a>' +
        '<ul>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/">프로그램 소개</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/program">올해의 프로그램 후보</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/couple">베스트 커플 후보</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/ticket">방청신청</a>' +
        '</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/photo">현장포토</a>' +
        //'</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/news">최신뉴스</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/bbs">후보에게 묻는다</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/clip2019">방송 하이라이트</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/vod">다시보기</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/allclip">역대 하이라이트</a>' +
        '</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/winner">수상내역</a>' +
        //'</li>' +
        //'<li>' +
        //'<a href="http://onair.imbc.com/talkplay">라떼TV</a>' +
        //'</li>' +
        '</ul>' +
        '</li>' +

        '<li class="pn_title pntt_02">' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama">방송연기대상</a>' +
        '<ul>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama">프로그램소개</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/program/">시청자가 뽑은 올해의 드라마</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/couple/">최고의 1분 커플</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/ticket/">방청신청</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/news/">최신뉴스</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/allclip/">역대하이라이트</a>' +
        '</li>' +

        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/photo/">현장포토</a>' +
        //'</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/winner/">수상내역</a>' +
        //'</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/clip/">방송하이라이트</a>' +
        //'</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/vod/">다시보기</a>' +
        //'</li>' +

        '</ul>' +
        '</li>' +

        '<li class="pn_title pntt_03">' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo">가요대제전</a>' +
        '<ul>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/">프로그램 소개</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/artist">출연 아티스트</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/ticket">방청신청</a>' +
        '</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/news">최신뉴스</a>' +
        '</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/clip2019">방송 하이라이트</a>' +
        //'</li>' +
        //'<li>' +
        //'<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/vod">다시보기</a>' +
        //'</li>' +
        '<li>' +
        '<a href="http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/allclip">역대 하이라이트</a>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>'

    $('.prgr_nav_wrap').append(prgrHtml);
});


$(document).ready(function () {

    /*---------------Top Slide Area End Start---------------*/

    $('.prgr_nav_wrap .prgr_nav .pn_title ul').hide();

    $('.prgr_nav_wrap .prgr_nav .pn_title').mouseover(function () {
        $(this).children().show();

    });
    $('.prgr_nav_wrap .prgr_nav .pn_title').mouseleave(function () {
        $('.prgr_nav_wrap .prgr_nav .pn_title ul').hide();

    });

    /*---------------Top Slide Area End-------------*/
});

$(document).ready(function () {
    var fltBanner = '';
    fltBanner += '<div class="fb_bx">' +
        '<a href="http://onair.imbc.com/talkplay" target="_blank">' +
        '<img src="http://img.imbc.com/broad/tv/ent/event/2019mbc/images/floating_banner.png" alt="Floating Banner Link">' +
        '</a>' +
        '</div>'
    $('.content-sub').append(fltBanner);
});


//An alternative function. Note: for dynamic resizing, attach to the window resize event