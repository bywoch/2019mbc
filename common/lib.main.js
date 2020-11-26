$(document).ready(function () {
    
});


//-----------------------------------------------------------------------------//
var MainInfoUI = {
    /*TopImage: function (o) {
        try {
            var _this = this;
            var _that = MainInfo;
            var szHtml = [];
            for (var i = 0; i < o.length; i++) {
                szHtml.push('<div class="item">');

                szHtml.push('<a href="' + o[i].URL + '"' + (o[i].IsNewWindow ? ' target="_blank"' : '') + '><span class="img"><img src="' + o[i].Image + '" alt="' + o[i].Title.replace(/\"/gi, "&quot;") + '" /></span>');
                szHtml.push('<span class="con-info wrapper">');
                if (o[i].Title.indexOf("<br>") > 0 || o[i].Title.indexOf("<br/>") > 0 || o[i].SubTitle.indexOf("<br>") > 0 || o[i].SubTitle.indexOf("<br/>") > 0) {
                    szHtml.push('	<span class="con-wrap con-style2">');
                } else {
                    szHtml.push('	<span class="con-wrap con-style1">');
                }
                // szHtml.push('		<a href="'+o[i].URL+'"'+(o[i].IsNewWindow ? ' target="_blank"' : '')+'>');
                if (o[i].IsText) {
                    szHtml.push('		<span class="sub">' + o[i].SubTitle + '</span>');
                    szHtml.push('		<span class="tit">' + o[i].Title + '</span>');
                    if (o[i].Description != "") {
                        szHtml.push('		<span class="sum ellipsis">' + o[i].Description + '</span>');
                    }
                    // szHtml.push('		</a>');
                }
                if (o[i].IsRelation) {
                    szHtml.push('		<span class="rel-wrap"><span class="rel-btn">');
                    szHtml.push('			<button data-bid="' + o[i].BID + '" data-flag="N"><span class="txt">관련 콘텐츠</span><span class="arr"></span></button>');
                    szHtml.push('		</span></span>');
                }

                szHtml.push('	</span>');
                szHtml.push('</span></a>');
                szHtml.push('</div>');
            }
            $(".visual-slide").html(szHtml.join(''));
            if (o.length == 1) {
                $(".visual-page-wrap").hide();
            }
            InitMainUI.TopSlide();
            _that.IsTopImage = true;
        } catch (e) {
            $(".con-area.visual-area").css("height", "300px");
        }
    },*/
    Enews: function (o) {
        try {
            var _that = MainInfo;
            var szHtml = [];
            var i = 0;
            while (i < o.length) {
                var p = parseInt(i / 6);
                var k = parseInt(i % 6);
                if (k == 0) {
                    szHtml.push('<a href="' + o[i].URL + '">');
                    szHtml.push('<span class="img"><img src="' + o[i].Image + '" alt="' + o[i].Title.replace(/\"/gi, "&quot;") + '" /></span>');
                    szHtml.push('<span class="txt"><span class="tit ellipsis-multi">' + o[i].Title + '</span></span>');
                    szHtml.push('</a>');
                    $(".ent-slide-v2.arr-slide").find(".item").eq(p).find(".ent-left").html(szHtml.join(''));
                    szHtml = [];
                } else if (k == 1 || k == 2) {
                    szHtml.push('<li>');
                    szHtml.push('<a href="' + o[i].URL + '">');
                    szHtml.push('		<span class="img"><img src="' + o[i].Image + '" alt="' + o[i].Title.replace(/\"/gi, "&quot;") + '" /></span>');
                    szHtml.push('		<span class="tit ellipsis-multi">' + o[i].Title + '</span>');
                    szHtml.push('	</a>');
                    szHtml.push('</li>');
                    if (k == 2) {
                        $(".ent-slide-v2.arr-slide").find(".item").eq(p).find(".top-item").html(szHtml.join(''));
                        szHtml = [];
                    }
                } else {
                    szHtml.push('<li><a href="' + o[i].URL + '" class="tit ellipsis">' + o[i].Title + '</a></li>')
                    if (k == 5) {
                        $(".ent-slide-v2.arr-slide").find(".item").eq(p).find(".bottom-item").html(szHtml.join(''));
                        szHtml = [];
                    }
                }
                i++;
            }

            InitMainUI.EnewsSlide2();
            _that.IsEnews = true;
        } catch (e) {
            $(".ent-area").hide();
        }
    },
    EnewsTheme: function (o) {
        try {
            var _this = this;
            var _that = MainInfo;

            var k;
            if (o.MBC.LIST.length == undefined) {
                k = o.MBC.LIST;
            } else {
                k = o.MBC.LIST[Math.floor(Math.random() * o.MBC.LIST.length)];
            }
            $(".theme-content h4").html(k.TITLE);
            if ($.trim(k.URL).length > 0) {
                $(".theme-content .more").find("a").attr("href", k.URL);
            }
            $(".theme-bg img").attr("src", k.PC_BG);
            _that.EnewsThemeProgram(k.PROGRAM, 3);
            _that.EnewsThemeProgramCode = k.PROGRAM;
            _that.IsEnewsTheme = true;
        } catch (e) {
            $(".con-area.ent-area.wrapper").hide();
        }
    },
    EnewsThemeProgram: function (o) {
        try {
            var _that = MainInfo;
            var szHtml = [];
            for (var i = 0; i < o.length; i++) {
                szHtml.push('<li><a href="' + o[i].URL + '" class="ellipsis-multi">' + o[i].Title + '</a></li>');
            }
            $(".theme-content ul").html(szHtml.join(''));
            _that.IsEnewsThemeProgram = true;
        } catch (e) {
            $(".con-area.ent-area.wrapper").hide();
        }
    }
}

var MainInfo = {
    /*IsTopImage: false,*/
    IsEnews: false,
    IsEditorPick: false,
    IsVodTabContent: false,
    IsEnewsTheme: true,
    IsEnewsThemeProgram: true,
    VodTabContentBID: "",
    VodTabContentCount: 6,
    EnewsThemeProgramCode: "",
    azEditorTitle: [],
    azEditorChannel: [],
    Init: function () {
        var _this = this;
        _this.CheckAgent();
        /*_this.TopImage();*/
        _this.Enews(12);
        /*_this.Seamless();*/
    },
    CheckInit: function () {
        var _this = this;
        if (!_this.IsTopImage) {
            _this.TopImage();
        }
        if (!_this.IsONAir) {
            _this.ONAir();
        }
        if (!_this.IsVodTab) {
            _this.VodTab();
        }
        if (!_this.IsLife) {
            _this.Life();
        }
        if (!_this.IsSports) {
            _this.Sports();
        }
        if (!_this.IsEnews) {
            _this.Enews();
        }
        if (!_this.IsEditorPick) {
            _this.EditorPick();
        }
        //if(!_this.IsEnewsTheme){_this.EnewsTheme();}
        if (!_this.IsPromotion) {
            _this.Promotion();
        }
        if (!_this.IsWithMBC) {
            _this.WithMBC();
        }
        if (!_this.IsVodTabContent) {
            _this.VodTabContent($(".vod-tab").find("button").attr("data-bid"));
        }
        //if(!_this.IsEnewsThemeProgram){_this.EnewsThemeProgram(_this.EnewsThemeProgramCode);}
        if (!_this.IsTopImage ||
            !_this.IsONAir ||
            !_this.IsVodTab ||
            !_this.IsLife ||
            !_this.IsEnews ||
            !_this.IsEnewsTheme ||
            !_this.IsPromotion || !_this.IsVodTabContent || !_this.IsEnewsThemeProgram ||
            !_this.IsWithMBC) {
            setTimeout(function () {
                _this.CheckInit()
            }, 500);
            return;
        }
    },
    /*TopImage: function () {
        try {
            var _this = this;
            var _that = MainInfoUI;
            $.ajax({
                type: "get",
                url: "http://control.imbc.com/WebApi/Main/Top",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "TopImage" + CacheInfo.MakeCallbackTime(),
                cache: true,
                timeout: 10000,
                data: {
                    deviceType: "PC"
                },
                success: function (o) {
                    _that.TopImage(o);
                },
                error: function (request, status, error) {
                    $(".con-area.visual-area").css("height", "300px");
                }
            });
        } catch (e) {
            $(".con-area.visual-area").css("height", "300px");
        }
    },*/
    TopRelationContent: function (bid, n) {
        try {
            var _this = this;
            var _that = MainInfoUI;
            $(".rel-Slide").html('');

            $.ajax({
                type: "get",
                url: "http://control.imbc.com/WebApi/Main/RelationContent",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "TopRelationContent" + "_" + bid + "_" + n + "_" + CacheInfo.MakeCallbackTime(),
                cache: true,
                timeout: 10000,
                data: {
                    deviceType: "PC",
                    broadcastID: bid,
                    top: n
                },
                success: function (o) {
                    _that.TopRelationContent(o, n);
                },
                error: function (request, status, error) {
                    $(".rel-contents.wrapper").hide();
                }
            });
        } catch (e) {
            $(".rel-contents.wrapper").hide();
        }
    },
    VodTabContent: function (bid) {
        var p = 2;
        var _this = this;
        var _that = MainInfoUI;
        _this.VodTabContentBID = bid;
        $.ajax({
            type: "get",
            url: (bid == "weekbest" ? "http://control.imbc.com/WebApi/Main/WeekBestVod" : "http://control.imbc.com/WebApi/Main/DayProgramVod"),
            dataType: "jsonp",
            async: true,
            jsonpCallback: "VodTabContent" + bid + "_" + (_this.VodTabContentCount * p) + "_" + CacheInfo.MakeCallbackTime(),
            cache: true,
            data: {
                deviceType: "PC",
                broadcastID: (bid == "" ? 0 : bid),
                top: _this.VodTabContentCount * p
            },
            success: function (o) {
                _that.VodTabContent(o);
            },
            error: function (request, status, error) {}
        });
    },
    Enews: function (n) {
        try {
            var _this = this;
            var _that = MainInfoUI;
            $.ajax({
                type: "get",
                url: "http://control.imbc.com/WebApi/Main/Enews",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "Enews_" + n + "_" + CacheInfo.MakeCallbackTime(),
                cache: true,
                data: {
                    top: n
                },
                timeout: 10000,
                success: function (o) {
                    _that.Enews(o);
                },
                error: function (request, status, error) {
                    $(".ent-area").hide();
                }
            });
        } catch (e) {
            $(".ent-area").hide();
        }

    },
    EnewsTheme: function (bid, n) {
        try {
            var _this = this;
            var _that = MainInfoUI;
            $.ajax({
                type: "get",
                url: "http://control.imbc.com/WebApi/Main/EnewsTheme",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "EnewsTheme" + CacheInfo.MakeCallbackTime(),
                cache: true,
                timeout: 10000,
                success: function (o) {
                    _that.EnewsTheme(o);
                },
                error: function (request, status, error) {
                    $(".con-area.ent-area.wrapper").hide();
                }
            });
        } catch (e) {
            $(".con-area.ent-area.wrapper").hide();
        }
    },
    EnewsThemeProgram: function (bid, n) {
        try {
            var _this = this;
            var _that = MainInfoUI;

            $.ajax({
                type: "get",
                url: "http://control.imbc.com/WebApi/Main/EnewsProgram",
                dataType: "jsonp",
                async: true,
                jsonpCallback: "EnewsThemeProgram" + CacheInfo.MakeCallbackTime(),
                cache: true,
                timeout: 10000,
                data: {
                    broadcastID: bid,
                    top: n
                },
                success: function (o) {
                    _that.EnewsThemeProgram(o);
                },
                error: function (request, status, error) {
                    $(".con-area.ent-area.wrapper").hide();
                }
            });
        } catch (e) {
            $(".con-area.ent-area.wrapper").hide();
        }
    },
    /*Seamless: function () {
        try {
            var name = SearchGnbInfo.getCookie("IMBCNAME");
            if (name == "") {
                return;
            }
            var _this = this;
            var _that = MainInfoUI;
            $.ajax({
                //type: "get",
                url: "http://mediaapi.imbc.com/Seamless/UserSeamList",
                dataType: "json",
                async: true,
                crossDomain: true,
                cache: true,
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    curPage: 1,
                    pageSize: 8,
                    tmp: CacheInfo.MakeCallbackTime()
                },
                success: function (o) {
                    _that.Seamless(o);
                },
                error: function (request, status, error) {
                    //alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                }
            });
        } catch (e) {
            $(".con-area.resume-area.wrapper").hide();
        }
    },*/
    CheckAgent: function () {
        if (document.referrer.toLowerCase().indexOf("m.imbc.com") < 0 || document.referrer.toLowerCase().indexOf("query=m.imbc.com") > 0) {
            var ua = navigator.userAgent.toLowerCase();

            if ((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)))) {
                window.location = "http://m.imbc.com";
                return false;
            }
            if (/tizen/i.test(ua) && (ua.indexOf('mobile') > -1 || ua.indexOf('samsungbrowser') > -1)) {
                window.location = "http://m.imbc.com";
                return false;
            }
        }
        return true;
    }
}
//-----------------------------------------------------------------------------//