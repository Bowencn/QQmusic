(function (root) {
    var frameId;
    var curDuration;
    var lastPer = 0;
    var startTime;
    var time;
    var timer;
    var lock = true;
    var index;
    var per;
    var stoptime;

    // 时间转换
    function secondToDate(time) {
        time = Math.round(time);
        var m = Math.floor((time / 60 % 60));
        var s = Math.floor((time % 60));
        if (m < 10) {
            m = '0' + m;
        };
        if (s < 10) {
            s = "0" + s
        };
        return m + " : " + s;
    };

    function start(Duration, stop, bl) {
        curDuration = Duration;
        // startTime = new Date().getTime();

        //直接跳转锁
        if (bl) {
            lock = false;
            stoptime = stop;
        }
        //播放后吧锁关上 避免重置计数
        if (lock) {
            start = 0;
            lock = false;
        } else {


            start = stoptime;

        }
        clock(start, curDuration);
        // return function frame() {
        //     var curTime = new Date().getTime();
        //     let percent = lastPer + (curTime - startTime) / (curDuration * 1000);


        //     // per = percent * curDuration;
        //     // console.log(per);
        //     // // console.log(curDuration);
        //     // time = secondToDate(per)
        //     update(time, percent);
        //     frameId = requestAnimationFrame(frame);
        //     // allTime = secondToDate(Duration)
        // };
        // frame();


    };
    //切换歌曲重置开始时间
    function check() {
        clear();
        lock = true;
        update("00 : 00", 0)
    }
    //清除定时器
    function clear() {
        // cancelAnimationFrame(frameId);
        clearInterval(timer);
    }

    function stop(Time) {
        // cancelAnimationFrame(frameId);
        // clearInterval(timer);
        // var stopTime = new Date().getTime();
        // curDuration = Time;
        // lastPer = lastPer + (stopTime - startTime) / (curDuration * 1000);
        clear();

    }

    function update(time, per) {
        // var curTime = per * curDuration;
        // time = secondToDate(time);
        $(".start-time").html(time);
        var perX = (per - 1) * 100 + '%';
        $(".pro-top").css({
            transform: 'translate(' + perX + ')'
        });
    }
    //得到暂停时间
    function data(stime) {
        stoptime = stime;


        return stoptime;
    }

    //计时器
    function clock(begin, over) {
        let = stime = begin;
        let = otime = over;

        timer = setInterval(function () {
            stime++;
            per = (stime / otime)



            time = secondToDate(stime)
            update(time, per)
            data(stime);
            if (stime >= (otime)-0.5) {
                clearInterval(timer);
            }



        }, 1000)


    }


    root.pro = {
        stop: stop,
        update: update,
        start: start,
        time: time,
        secondToDate: secondToDate,
        clear: clear,
        check: check,


    }

})(window.player || (window.player = {}))