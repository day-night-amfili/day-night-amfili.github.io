var snow_img = "snow.gif";                                     
var snow_no = 560;                                                 
var timeszimaon = 1;         

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

if (typeof(window.pageYOffset) == "number") {
snow_browser_width = window.innerWidth;
snow_browser_height = window.innerHeight; }
else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
snow_browser_width = document.body.offsetWidth;
snow_browser_height = document.body.offsetHeight; }
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
snow_browser_width = document.documentElement.offsetWidth;
snow_browser_height = document.documentElement.offsetHeight; }
else {
snow_browser_width = 500;
snow_browser_height = 500; }
snow_dx = [];
snow_xp = [];
snow_yp = [];
snow_am = [];
snow_stx = [];
snow_sty = [];
if (timeszimaon == 1) {
for (i = 0; i < snow_no; i++) {
snow_dx[i] = 0;
snow_xp[i] = Math.random()*(snow_browser_width-50);
snow_yp[i] = Math.random()*snow_browser_height;
snow_am[i] = Math.random()*20;
snow_stx[i] = 0.01 + Math.random()/10;
snow_sty[i] = 1.3 + Math.random();
//����� �������� ������� �������� �� ���� z-index
if (i == 0) document.write("<\div id=\"snow_flake0\" style=\"position:absolute;z-index:0\"><a href=\"#\" target=\"_blank\"><\img src=\""+snow_img+"\" border=\"0\"></a><\/div>");
else document.write("<\div id=\"snow_flake"+ i +"\" style=\"position:absolute;z-index:10000"+i+"\"><\img src=\""+snow_img+"\" border=\"0\"><\/div>");
}
}
function SnowStart() {
for (i = 0; i < snow_no; i++) {
snow_yp[i] += snow_sty[i];
if (snow_yp[i] > snow_browser_height-50) {
snow_xp[i] = Math.random()*(snow_browser_width-snow_am[i]-30);
snow_yp[i] = 0;
snow_stx[i] = 0.02 + Math.random()/10;
snow_sty[i] = 1.3 + Math.random();}
snow_dx[i] += snow_stx[i];
document.getElementById("snow_flake"+i).style.top=snow_yp[i]+"px";
document.getElementById("snow_flake"+i).style.left=snow_xp[i] + snow_am[i]*Math.sin(snow_dx[i])+"px";}
snow_time = setTimeout("SnowStart()", 10); }
if (timeszimaon == 1) { SnowStart(); }
