(function (root) {
  
    function prev(){
        if (index === 0) {
            index = len - 1;
        } else {
            index--;
        }
        
        if(lock){
            index = arr.pop()
        }
        
        
        music(index);
        root.render(songlist[index].data);
        audio.getAudio(src);
        audio.play();
        $(".btn-pause").css("backgroundPosition", "-27px 0px");
        root.pro.check();
        root.pro.start(songTime,0);
        
        
        
        
    }
    function next(){
        if (index === len - 1) {
            index = 0;
        } else {
            index++;
        }
        if(lock){
            index = arr.pop()
        }
        
        
        music(index);
        root.render(songlist[index].data);
        audio.getAudio(src);
        audio.play();
        $(".btn-pause").css("backgroundPosition", "-27px 0px");
        root.pro.check();
        root.pro.start(songTime,0);
        
        
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