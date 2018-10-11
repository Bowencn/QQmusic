(function (root) {
    
   
    function renderinfo(info) {
        var songname;
        let duration = info.interval;
        let time = (function secondToDate(result) {
            var m = Math.floor((result / 60 % 60));
            var s = Math.floor((result % 60));
            if (m < 10) {
                m = '0' + m;
            };
            if(s<10){
                s = "0"+s
            };
            return result = m + " : " + s;
        })(duration);
        
       
        var html =
            '<div class="song-info-name song-txt">歌曲名:  &nbsp;' + '<a href="javascript:;">' + info.songname + '</a></div>' +
            '<div class="song-info-singer song-txt">歌手名: &nbsp;' + '<a href="javascript:;">' + info.singer[0].name + '</a></div>' +
            '<div class="song-info-album song-txt">专辑名: &nbsp;' + '<a href="javascript:;">' + info.albumname + '</a></div>';
        
            var btn = 
            '<div class="player-btn-name">'+
                    '<a href="javascript:;" class="player-btn-song-name">'+ info.songname +'</a>-'+
                    '<a href="javascript:;" class="player-btn-song-singer">'+ info.singer[0].name  +'</a></div>'+
                // '<div class="player-btn-time">'+  + ' &nbsp;/&nbsp; '+ time +'</div>';
                '<div class="player-btn-time"><span class="start-time">00 : 00</span>&nbsp; /&nbsp; <span>'+ time +'</span></div>'
                $(".song-info").html(html);
        // $(".songlist-three").html(list);
        $(".player-list").html(btn);
    }

    function renderImg(albummid) {
        var image = "https://y.gtimg.cn/music/photo_new/T002R300x300M000"+ albummid +".jpg?max_age=2592000";
        var img = '<a href="javascript:;" class="song-info-cover">' +
            '<img src="' + image + '"alt="" class="song-image">' +
            '<i class="song-image-back"></i></a>';
        $(".song-info").prepend(img);
        $(".bg_color").css("background-image", "url(" + image + ")")
    };
    function renderIslike(islike){
        if(islike){
            $(".btn-like").css("backgroundPosition","-30px -96px");
         
        }else{
            $(".btn-like").css("backgroundPosition","0px -96px");
        }
    };
    root.render = function (data) {
        renderinfo(data);
        renderImg(data.albummid);
        renderIslike(data.isLike);
        
    };
    
})(window.player || (window.player = {}));

