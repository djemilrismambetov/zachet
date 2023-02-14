function getTime() {
    // Make a GET request to an NTP server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://pool.ntp.org", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Extract the current time from the response
            var time = xhr.responseText;
            // Update the clock element with the time
            document.getElementById("clock").innerHTML = time;
        }
    };
    xhr.send();
}

// Call the getTime function every second to update the clock
setInterval(getTime, 1000);