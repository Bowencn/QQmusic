var root = window.player;
var songList;
var songnum;
var index = 0;
var len;
var clickTime = 0;
var width;
var id;
var src;
var songTime;
var isMove;
var volumeNum;
var arr;
var lock = false;
const audio = new root.audioControl();




function bindmove() {
    var offset = $(".pro-bottom").offset();
    width = $(".pro-bottom").outerWidth(true);
    var left = offset.left;

    $(".player-btn-pro").mousedown(function (e) {
        if (e.which == 1) {
            let time;
            var x = e.clientX;
            var per = (x - left) / width;
            songTime = songlist[index].data.interval;
            clickTime = per * songTime;
            if (per > 0 && per <= 1) {
                $(".start-time").html(time);
                console.log(per);

                time = root.pro.secondToDate(clickTime);
                console.log(time);

                root.pro.stop(clickTime);
                root.pro.start(songTime,clickTime,true);

                root.pro.update(time, per);
            }

            audio.playTo(clickTime);
            $(".btn-pause").css("backgroundPosition", "-27px 0px");
        }
    });
    //音量部分
    (function volume() {
        var dragging = false;
        var iX;
        var oX;
        $(".pro-voice-point").mousedown(function (e) {
            dragging = true;
            iX = e.clientX - this.offsetLeft;
            // iY = e.clientY - this.offsetTop;
            this.setCapture && this.setCapture();
            return false;
        });
        document.onmousemove = function (e) {
            if (dragging) {
                var e = e || window.event;
                oX = e.clientX - iX;
                if (oX < 15) {
                    oX = 15;
                } else if (oX > 85) {
                    oX = 85
                }

                $(".pro-voice-point").css({
                    "left": oX + "px"
                });
                return false;
            }
        };
        $(document).mouseup(function (e) {
            dragging = false;
            //每一份代表1.42音量
            var volumenumebr = 1.42;
            var oxNum = (oX - 15) / 100;
            volumeNum = volumenumebr * oxNum;
            audio.volume(volumeNum)
            // $(".pro-voice-point")[0].releaseCapture();
            // e.cancelBubble = true;
        })



    })()


    // $(".pro-point").mousedown(function (e) {
    //     if (e.which == 1) {
    //         $(".pro-point").mousemove(function (e) {
    //             console.log(e);
    //             var x = e.clientX;
    //             var per = (x - left) / width;
    //             console.log(x);

    //             console.log(per);

    //         })
    //     }

    //     console.log(1);

    // }).mouseup(function (e) {
    //     console.log(3);

    // })
}

function music(num) {
    id = songlist[num].data.songmid;
    src =
        "http://ws.stream.qqmusic.qq.com/C100" +
        id +
        ".m4a?fromtag=0&guid=126548448";
    //   lrc =
    //     "https://route.showapi.com/213-2?showapi_appid=54411&showapi_sign=55b7ca99e210452a86269a9f09def34c&musicid=" +
    //     id;
    //     var unescapeHTML = function(lrc){
    //         　　var t=document.createElement("div");
    //         　　return t.innerHTML=lrc+"";
    //         }
    //     console.log(unescapeHTML);

}
// function lyric() {
//   lyricsrc =
//     "https://route.showapi.com/213-2?showapi_appid=54411&showapi_sign=55b7ca99e210452a86269a9f09def34c&musicid=" +
//     id;
// }
function bindEvent() {
    console.log(songlist[index].data);
    songTime = songlist[index].data.interval;
    music(index);
    audio.getAudio(src);
    // volumeNum = 0.99;
    // audio.volume(volumeNum)
    $(".btn-prev").on("click", function () {
        // if (index === 0) {
        //     index = len - 1;
        // } else {
        //     index--;
        // }
        // music(index);
        // root.render(songlist[index].data);
        // audio.getAudio(src);
        // audio.play();
        // $(".btn-pause").css("backgroundPosition", "-27px 0px");
        // root.pro.check();
        // root.pro.start(songTime);
        root.control.prev(index);
    });

    $(".btn-next").on("click", function () {
        // if (index === len - 1) {
        //     index = 0;
        // } else {
        //     index++;
        // }
        // console.log(songlist[index].data.singer[0].name);
        // music(index);
        // root.render(songlist[index].data);
        // audio.getAudio(src);
        // audio.play();
        // $(".btn-pause").css("backgroundPosition", "-27px 0px");
        // root.pro.check();
        // root.pro.start(songTime);
        root.control.next();
    });

    $(".btn-pause,.list-menu-play")
        .on("click", function () {
            // if (audio.status == "pause") {
            //     audio.play();
            //     $(".btn-pause").css("backgroundPosition", "-27px 0px");
            //     root.pro.start(songTime);
            // } else {
            //     audio.pause();
            //     $(".btn-pause").css("backgroundPosition", "0px 0px");

            //     root.pro.stop(songTime);
            // }
            root.control.pop();
        })
        .on("keydown", function (e) {
            if (e.keyCode == 32) {
                root.control.pop();
            }
        });

    // audio.ended(index);

    $(".songlist-line").one("mouseover", function () {
        $(".songlist-line>li")
            .off("dbclick")
            .on("dblclick", function () {
                console.log("dbclick");

                index = $(this).attr("ix") - 1;

                // music(index);
                // root.render(songlist[index].data);
                // audio.getAudio(src);
                // audio.play();
                // $(".btn-pause").css("backgroundPosition", "-27px 0px");
                // root.pro.check();
                // root.pro.start(songlist[index].data.interval);

                music(index);
                root.render(songlist[index].data);
                audio.getAudio(src);
                audio.play();
                $(".btn-pause").css("backgroundPosition", "-27px 0px");
                root.pro.check();
                root.pro.start(songTime);
                // root.pro.btn(clickTime, songlist[index].data.interval, width);
            });
        // $(".songlist-time").on("mouseover",function () {

        //     $(this).css("display","none");
        //     $(".songlist-delete").css("display","block")
        // }).on("mouseout",function(){
        //     $(this).css("display","inline-block")
        //     $(".songlist-delete").css("display","none")
        // })
    });
    let num = 0;
    $(".btn-style").on("click", function () {
        num += 1;
        //判断点击次数
        switch (num) {
            case 1:
            //顺序播放
                $(this).css({
                    "background-position": "0 -260px",
                    "width": "23px",
                    "height": "20px"
                });
                audio.loop(false);
                lock = false;
                break;
            case 2:
            //随机播放
                console.log("随机播放");
                
                $(this).css({
                    "background-position": "0 -74px",
                    "width": "25px",
                    "height": "19px"
                });
                audio.loop(false);
                
                arr = root.num.random();
                lock = true;
                
                break;
            case 3:
            //单曲循环
                $(this).css({
                    "background-position": "0 -232px",
                    "width": "26px",
                    "height": "25px"
                });
                lock = false;
                audio.loop(true)
                break;
            default:
            //列表循环
                $(this).css({
                    "background-position": "0 -205px",
                    "width": "26px",
                    "height": "25px"
                });
                lock = false;
                audio.loop(false)
                num = 0;

        }
    })
    // $(".btn-like").on("click", function () {
    //     if (songList[index].isLike) {
    //         $(".btn-like").css("backgroundPosition", "0px -96px")
    //     } else {
    //         $(".btn-like").css("backgroundPosition", "-30px -96px")
    //     }
    // })
    // $(".i-like").on("click", function () {
    //     $(".btn-like").css("backgroundPosition", "-30px -96px")
    // })
    // console.log(2);

    // $(".songlist-item").on("mouseenter", function () {
    //     console.log(1);

    //     $(".list-menu-play").css("opacity", "1")
    // })
}

function getData() {
    $.ajax({
        type: "get",
        dataType: "jsonp",
        url: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923",
        jsonp: "jsonpCallback",
        scriptCharset: "GBK",
        success: function (data) {
            
            songnum = data.cur_song_num;
            songlist = data.songlist;
            root.render(songlist[0].data);
            bindEvent();
            bindmove();
            //     console.log(data.songlist);

            console.log(data);

            len = data.cur_song_num;
            //     repet(len);
            root.list(data);
        },
        error: function (e) {
            console.log("error");
        }
    });
}
getData();
// "https://y.gtimg.cn/music/photo_new/T002R300x300M000"+ albummid +".jpg?max_age=2592000"