$(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "http://23.111.104.132:9010/chil_320"
            });
        },
        play: function() { // Тут можно добавить дополнительный код, который выполняется при начале проигрывания
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "path/to/jquery.jplayer.swf",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true
    })
});
