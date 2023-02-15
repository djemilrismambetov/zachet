$(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "https://radiorecord.hostingradio.ru/rr_main96.aacp"
                // aac: "https://radiorecord.hostingradio.ru/rr_main96.aac"
            });
            $(this).jPlayer("volume", 0.1); // установка уровня громкости на 10%
            $(this).jPlayer("play");
        },
        play: function() { // Тут можно добавить дополнительный код, который выполняется при начале проигрывания
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "path/to/jquery.jplayer.swf",
        supplied: "mp3",
        wmode: "window",
        autoplay: true,
        useStateClassSkin: true
    })

    $("#jquery_jplayer_1").bind($.jPlayer.event.volumechange, function(event) {
        var volume = event.jPlayer.options.volume;
        $('#volume-bar').css('width', volume * 100 + '%');
      });
    
      // Обработчик событий скроллинга мыши на всем плеере
      $("#jquery_jplayer_1").bind('mousewheel DOMMouseScroll', function(event){
        event.preventDefault();
        var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        var volume = $("#jquery_jplayer_1").data("jPlayer").status.volume;
        var newVolume = volume + (delta > 0 ? 0.1 : -0.1);
        newVolume = Math.min(Math.max(newVolume, 0), 1);
        $("#jquery_jplayer_1").jPlayer("volume", newVolume);
      });
    });