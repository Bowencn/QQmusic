(function (root) {
  
    function prev(){
        if (index === 0) {
            index = len - 1;
        } else {
            index--;
        }
        music(index);
        root.render(songlist[index].data);
        audio.getAudio(src);
        audio.play();
        $(".btn-pause").css("backgroundPosition", "-27px 0px");
        root.pro.check();
        root.pro.start(songlist[index].data.intervale,0);
        console.log(songlist[index].data.interval);
        
        
        
    }
    function next(){
        if (index === len - 1) {
            index = 0;
        } else {
            index++;
        }
        console.log(songlist[index].data.singer[0].name);
        music(index);
        root.render(songlist[index].data);
        audio.getAudio(src);
        audio.play();
        $(".btn-pause").css("backgroundPosition", "-27px 0px");
        root.pro.check();
        root.pro.start(songlist[index].data.intervale,0);
        console.log(index);
        
    }
    function playorpause(){
        if (audio.status == "pause") {
            audio.play();
            $(".btn-pause").css("backgroundPosition", "-27px 0px");
            root.pro.start(songTime);
        } else {
            audio.pause();
            $(".btn-pause").css("backgroundPosition", "0px 0px");
            root.pro.stop(songTime)
            // root.pro.stop(songlist[index].data.intervale);
        }
    }
    root.control = {
        prev : prev,
        next : next,
        pop : playorpause,
    };
})(window.player || (window.player = {}))