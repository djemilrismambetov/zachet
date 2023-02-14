// function getTime() {
//     // Make a GET request to an NTP server
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://pool.ntp.org", true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             // Extract the current time from the response
//             var time = xhr.responseText;
//             // Update the clock element with the time
//             document.getElementById("clock").innerHTML = time;
//         }
//     };
//     xhr.send();
// }

// Call the getTime function every second to update the clock
// setInterval(getTime, 1000);
function currentTime() {
    var date = new Date(); /* создаем объект класса Date() */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* настраиваем таймер */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* вызываем функцию currentTime() */