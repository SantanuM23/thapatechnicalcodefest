
/********************Mobile nav menu**************************/

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".head_right");
  const toggleNavbar = () => {
    nav_header.classList.toggle("on");
  };
  mobile_nav.addEventListener("click",()=>toggleNavbar());

/**************************************************************/


/******************Show more show less*************************/


function feature() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>Show more</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Show less</h4>"; 
    moreText.style.display = "inline";
  }
}
/***********************************************************/

/*********************Countdown*****************************/
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var endTime = new Date("Oct 22, 2022 00:00:00").getTime();

function runTime()
{
  var currentTime = new Date().getTime();
  var diff = endTime - currentTime;

  var d = Math.floor(diff/1000/60/60/24);
  var h = Math.floor(diff/1000/60/60)%24;
  var m = Math.floor(diff/1000/60)%60;
  var s = Math.floor(diff/1000)%60;

  days.innerHTML = d < 10 ? '0' + d : d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(runTime,1000);
