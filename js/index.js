var dorn = "";
setInterval(function () {
  var today = new Date();
  if(today.getHours() < 6 || today.getHours() > 21){
    var hours = today.getHours();
    dorn = "Night"
    document.body.style.backgroundColor = "#000000";
    document.getElementById("DON").style.color = '#ffffff'; 
    document.getElementById("Time").style.color = '#ffffff'; 
    document.getElementById("vk").style.color = '#ffffff'; 
    document.getElementById("github").style.color = '#ffffff'; 
    document.getElementById("DON").innerHTML= dorn;
  } else {
   dorn = "Day";
	  var hours = today.getHours();
  	document.body.style.backgroundColor = "#ffffff";
    document.getElementById("DON").style.color = '#000000';
    document.getElementById("Time").style.color = '#000000'; 
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