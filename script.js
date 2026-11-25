function updateClock(){
const clock=document.getElementById("Clock");
if(clock)clock.textContent=new Date().toLocaleTimeString();
}
updateClock();
setinterval(updateClock, 1000);
