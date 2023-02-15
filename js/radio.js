$(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "https://radiorecord.hostingradio.ru/rr_main96.aacp"
                // aac: "https://radiorecord.hostingradio.ru/rr_main96.aac"
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
})
