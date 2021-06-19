'use strict'

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // 한 바퀴 돌았을 때 transition 일시적으로 없애기
    hands.forEach(hand => {
      if(hand.style.transform === `rotate(90deg)`){
         hand.classList.add('notransition');
       } else {
         hand.classList.remove('notransition');
       }
    })
  }




setInterval(setDate, 1000);

setDate();