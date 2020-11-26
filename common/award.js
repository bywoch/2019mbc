var MainInfoUI = {
    Enews: function (o) {
        try {
            var _that = MainInfo;
            var szHtml = [];
            var i = 0;
            while (i < o.length) {
                var p = parseInt(i / 6);
                var k = parseInt(i % 6);
                if (k == 0) {
                    szHtml.push('<a href="http://www.imbc.com/broad/enews/view.html?idx=' + o[i].NewsIdx + '" target="_blank">');
                    szHtml.push('<span class="img"><img src="' + o[i].RectangleImg + '" alt="' + o[i].Title.replace(/\"/gi, "&quot;") + '" /></span>');
                    szHtml.push('<span class="txt"><span class="tit ellipsis-multi">' + o[i].Title + '</span></span>');
                    szHtml.push('</a>');
                    $(".ent-slide-v2.arr-slide").find(".item").eq(p).find(".ent-left").html(szHtml.join(''));
                    szHtml = [];
                } else if (k == 1 || k == 2) {
                    szHtml.push('<li>');
                    szHtml.push('<a href="http://www.imbc.com/broad/enews/view.html?idx=' + o[i].NewsIdx + '" target="_blank">');
                    szHtml.push('		<span class="img"><img src="' + o[i].RectangleImg + '" alt="' + o[i].Title.replace(/\"/gi, "&quot;") + '" /></span>');
                    szHtml.push('		<span class="tit ellipsis-multi">' + o[i].Title + '</span>');
                    szHtml.push('	</a>');
                    szHtml.push('</li>');
                    if (k == 2) {
                        $(".ent-slide-v2.arr-slide").find(".item").eq(p).find(".top-item").html(szHtml.join(''));
                        szHtml = [];
                    }
                } else {
                    szHtml.push('<li><a href="http://www.imbc.com/broad/enews/view.html?idx=' + o[i].NewsIdx + '" class="tit ellipsis" target="_blank">' + o[i].Title + '</a></li>')
                    if (k == 5) {
                        $(".ent-slide-v2.arr-slide").find(".item").eq(p).find(".bottom-item").html(szHtml.join(''));
                        szHtml = [];
                    }
                }
                i++;
                if(i==6 && o.length<12){
                	$(".ent-slide-v2 .item:eq(1)").remove();
                	break;}
            }

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
        } catch (e) {
            $(".ent-area").hide();
        }
    }
}    
var MainInfo = {    
    Enews: function (n) {
        try {
            var _this = this;
            var _that = MainInfoUI;
            $.ajax({
                type: "get",
                url: "http://enews.imbc.com/News/RetrieveNewsJson?newsType=Theme&pageSize=12&themeCode=050194000",
                async: true,
                cache: true,
                timeout: 10000,
                success: function (o) {
                    _that.Enews(o.List);
                },
                error: function (request, status, error) {
                    $(".ent-area").hide();
                }
            });
        } catch (e) {
            $(".ent-area").hide();
        }
    }    
}

$(document).ready(function () {
	MainInfo.Enews();
});