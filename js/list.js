(function (root) {
    var time;
    var index;
    var data;
    var len;
    var num = 0;
    var songname;
    function secondTotime(duration) {
        duration = duration.interval;
        time = (function secondToDate(result) {
            var m = Math.floor((result / 60 % 60));
            var s = Math.floor((result % 60));
            if (m < 10) {
                m = '0' + m;
            };
            if (s < 10) {
                s = "0" + s
            };
            return result = m + " : " + s;
        })(duration);
    }
    

    function cycle(data) {
      
        
        len = data.cur_song_num;
        for (let i = 0; i < len; i++) {
            songList(data.songlist[i]);
            index++;
            // var len = data.songlist[i].data.singer.length;
            // console.log(len);
            
            
            // if (len = 2) {
            //    var name1 = data.songlist[0].data.singer.name;
            //    var name2 = data.songlist[1].data.singer.name;
            //    songname = name1 + name2;

            // }else{
            //     songname = name1;
                
            // }
            // console.log(name1);
            
        }

    }

    function songList(info) {

        data = info.data;
        secondTotime(data);


        var html =

            '<li calss = "musicList" ix = ' + info.cur_count + '>' +
            ' <div class="songlist-item">' +
            ' <div class="edit">' +
            '   <input type="checkbox" class="songlist-checkbox">' +
            '</div>' +
            ' <div class="songlist-three">' +
            '<div class="songlist-name">' + data.songname + '</div>' +
            '<div class="songlist-artist">' + data.singer[0].name  + '</div>' +
            '<div class="songlist-time">' + time + '</div>' +
            '</div>' +
            '<div class="songlist-number">' + info.cur_count + '</div>' +
            '<div class="songlist-songname">' +
            '  <div class="mou-list-menu">' +
            '  <a href="javascript:;" class="songlist-play" title="播放">' +
            '     <i class="list-menu-play"></i>' +
            '    <span class="icon-txt">播放</span>' +
            ' </a>' +
            '<a href="javascript:;" class="songlist-add" title="添加到歌单">' +
            '    <i class="list-menu-add"></i>' +
            '     <span class="icon-txt">添加到歌单</span>' +
            ' </a>' +
            ' <a href="javascript:;" class="songlist-down" title="下载">' +
            ' <i class="list-menu-down"></i>' +
            ' <span class="icon-txt">下载</span>' +
            '</a>' +
            '  <a href="javascript:;" class="songlist-share" title="分享">' +
            ' <i class="list-menu-share"></i>' +
            ' <span class="icon-txt">分享</span>' +
            ' </a>' +
            ' </div>' +
            '</div>' +

            '<div class="songlist-other"></div>' +
            '<a href="javascript:;" class="songlist-delete" title="删除">' +
            '<i class="list-menu-del"></i>' +
            '<span class="icon-txt">删除</span>' +
            '</a>' +
            '<i></i>' +
            '</div>' +
            '</li>';

        $(".songlist-line").append(html)
    }
    root.list = function (data) {

        // len = data.length;
        cycle(data);

    }
})(window.player || (window.player = {}))