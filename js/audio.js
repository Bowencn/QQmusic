(function (root) {
    function audioControl() {
        this.audio = new Audio();
        this.status = "pause"
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
        ended: function (index) {
            let = index = index
            

            this.audio.onended = function () {
                index++;
                // this.audio.src = ;
            }


        }
    }
    root.audioControl = audioControl;
})(window.player || (window.player = {}))