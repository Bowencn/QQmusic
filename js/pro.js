(function (root) {
    var frameId;
    var curDuration;
    var lastPer = 0;
    var startTime;
    var time;
    var timer;
    var lock = true;
    var index;

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

    function start(Duration) {
        // curDuration = Duration;
        // startTime = new Date().getTime();


        // function frame() {
        //     var curTime = new Date().getTime();
        //     let percent = lastPer + (curTime - startTime) / (curDuration * 1000);
        //     var per = percent * curDuration;
        //     console.log(per);

        //     time = secondToDate(per)
        //     update(time, percent);
        //     frameId = requestAnimationFrame(frame);
        //     allTime = secondToDate(Duration)

        //     if(time == Duration){
        //         cancelAnimationFrame(frameId);
        //         index++;
        //         console.log(index);

        //     }
        // };



        // frame();
    };

    function frames() {
        frame()
    }

    function stop(Time) {
        cancelAnimationFrame(frameId);
        var stopTime = new Date().getTime();
        curDuration = Time


        lastPer = lastPer + (stopTime - startTime) / (curDuration * 1000);
        clearInterval(timer);

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

    function clock(clicktime, Duration, width) {
      

        timer = setInterval(function () {
            if (clicktime >= Duration) {
                clearInterval(timer);
                
            } else {
                percent = lastPer + (clicktime += 1);
                time = secondToDate(percent)
                console.log(time);
                var perX = (percent / Duration);
                update(time, perX);
            }




        }, 1000)


    }
    function btn(clickTime, duration, width) {
        clearInterval(timer);
        // clock(clickTime,songlist[index].data.interval,width)
    }
    root.pro = {
        stop: stop,
        update: update,
        start: start,
        time: time,
        secondToDate: secondToDate,
        // clock: clock,
        btn: btn,

    }

})(window.player || (window.player = {}))