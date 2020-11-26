'use strict';

var programData = {
    ehome: 'http://www.imbc.com/broad/tv/ent/event/2019mbc/ent/',
    dhome: 'http://www.imbc.com/broad/tv/ent/event/2019mbc/drama/',
    ghome: 'http://www.imbc.com/broad/tv/ent/event/2019mbc/gayo/',
    //역대 하이라이트
    //eaclip: 'ent_allclip',
    //daclip: 'dramaawards_clip',
    //maclip: 'music_allclip',
    //방송 하이라이트(화재의1분)
    eclip: 'ent_clip2019',
    dclip: 'dramaclip_2019',
    mclip: 'music_clip2019',
    titLength: 26,
    txtLength: 74,
    enewsApi: { // 뉴스 갯수
        nStart: 1,
        nEnd: 2
    }
};

$(document).ready(function () {
    //if ($('.roll-ban-event').size() > 0) mainVisual();
    if ($('.main').length) {

        //역대 하이라이트
        //geteaClip();
        //getdaClip();
        //getmaClip();

        //방송 하이라이트(화재의1분)
        geteClip();
        getdClip();
        getmClip();

    };

});

//(jQuery);