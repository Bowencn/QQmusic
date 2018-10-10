(function (root) {
    function random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }

    function randomarr() {
        var arr = new Array();
        for (let i = 0; i <= (songnum)-1; i++) {
            random(1, 100);
            arr.push(random(0, 99))
        }
        
        return arr;
    }
    
    root.num = {
        random: randomarr,
        
    }
})(window.player || (window.player = {}))