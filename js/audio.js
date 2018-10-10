(function (root) {
    var  lock = false;
    function data(olock){
        lock = olock;
    }
    
    function audioControl() {
        this.audio = new Audio();
        this.status = "pause";
       
        this.audio.addEventListener('ended', function () {
            

            if (lock) {
                console.log(111111);
                
                root.pro.check();
                audio.play();
                root.pro.start(songTime,0,false);
            } else {
                root.control.next()
            }

        });

    };
    audioControl.prototype = {
        play: function () {

            this.audio.play();
            this.status = "play"
        },
        pause: function () {
            this.audio.pause();
            this.status = "pause"
        },
        getAudio: function (src) {
            this.audio.src = src;
            this.audio.load();
        },
        playTo: function (time) {
            this.audio.currentTime = time;
            this.audio.play();
            this.status = "play"
        },
        volume: function (num) {
            $(".btn-voice").css({
                "background-position": "0 -144px"
            })
            if (!num) {
                if (num == 0) {
                    num = 0;
                    $(".btn-voice").css({
                        "background-position": "0 -182px"
                    })
                } else {
                    num = 1;
                }
            }
            this.audio.volume = num;
        },
        loop: function (lock) {
            if (lock) {
                // this.audio.loop = "loop";
                data(true);



                console.log("开启单曲循环");
            } else {
                data(false)


            };


        }
    }
    root.audioControl = audioControl;
})(window.player || (window.player = {}))