(function (root) {
    function audioControl() {
        this.audio = new Audio();
        this.status = "pause";
        this.audio.addEventListener('ended',function(){
            root.control.next();
            
        })
    };
    console.log(window.player)
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
        ended: function () {
           this.audio.ended


        }
    }
    root.audioControl = audioControl;
})(window.player || (window.player = {}))