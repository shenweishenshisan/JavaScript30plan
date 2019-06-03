var left = document.querySelector(".display__time-left");
var end = document.querySelector(".display__end-time");
var btns = document.querySelectorAll("button");
var submit = document.customForm;

var leftTime = 0, endTime;
var addTime;
var timer;

left.innerHTML = 0;
var btnsArray = Array.from(btns);
btnsArray.map((btn) => {
  btn.addEventListener("click", updateTime, false);
})

submit.addEventListener("submit", function(e){
  e.preventDefault(); 
  leftTime = leftTime + this.minutes.value * 60;
  left.innerHTML = leftTime;
  end.innerHTML = new Date(new Date().getTime() + (leftTime * 1000)).toLocaleTimeString();
})


function updateTime(){
  leftTime = leftTime + parseInt(this.dataset.time);
  end.innerHTML = new Date(new Date().getTime() + (leftTime * 1000)).toLocaleTimeString();
  left.innerHTML = leftTime;
  updateTimer();
}

function updateTimer(){
  if(timer){
    clearInterval(timer);
  }
  timer = setInterval(function(){
    leftTime--;
    left.innerHTML = leftTime;
    if(leftTime == 0){
      clearInterval(timer);
      end.innerHTML = "END";
    }
  }, 1000)
}