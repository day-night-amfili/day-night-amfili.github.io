var min = 0;
var hour = 0;
var tm = 0;
var dorn = "";
setInterval(function () {
  var today = new Date();
  if(today.getHours() < 6 || today.getHours() > 21){
    var hours = today.getHours();
    dorn = "Ночь"
    document.body.style.backgroundColor = "#000000";
    document.getElementById("DON").style.color = '#ffffff'; 
    document.getElementById("se").style.color = '#000000'; 
    document.getElementById("se").style.backgroundColor = '#ffffff'; 
    document.getElementById("Time").style.color = '#ffffff'; 
    document.getElementById("timer").style.color = '#ffffff'; 
    document.getElementById("vk").style.color = '#ffffff'; 
    document.getElementById("github").style.color = '#ffffff'; 
    document.getElementById("DON").innerHTML= dorn;
  } else {
   dorn = "День";
    var hours = today.getHours();
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("DON").style.color = '#000000';
    document.getElementById("se").style.color = '#ffffff'; 
    document.getElementById("se").style.backgroundColor = '#000000'; 
    document.getElementById("Time").style.color = '#000000'; 
    document.getElementById("timer").style.color = '#000000'; 
    document.getElementById("vk").style.color = '#000000'; 
    document.getElementById("github").style.color = '#000000'; 
    document.getElementById("DON").innerHTML= dorn;
  }
  if(today.getMinutes() < 10){
    var minutes = '0' + today.getMinutes();
  } else {
    var minutes = today.getMinutes();
  }
  if(today.getSeconds() < 10){
    var seconds = '0' + today.getSeconds();
  } else {
    var seconds = today.getSeconds();
  }
  var time = hours + ":" + minutes + ":" + seconds;

  document.getElementById("Time").innerHTML= time;
}, 1000)


ttimer = 0;
se.onclick = function StartFunction() {
  tm += 1;
  sec = 0;
  var ttimer = setInterval(tick, 1000);
  if(tm === 2){
    clearInterval(ttimer); 
    tm -= 1;
  }
} 

function tick() {
    sec++;
    if (sec >= 60) { 
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}
