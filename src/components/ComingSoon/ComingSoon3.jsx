import {React} from 'react'
import './comingSoon3.css'

const ComingSoon3 = () => {

  let endTime = new Date("March 9, 2024 12:00:00").getTime();
    function countdown() {
      let todayDate = new Date();
      let todayTime = todayDate.getTime();
      let remainingTime = endTime - todayTime;
      let oneMin = 60 * 1000;
      let oneHr = 60*oneMin;
      let oneDay = 24*oneHr
      let daysLeft = Math.floor(remainingTime / oneDay);
      let hoursLeft = Math.floor((remainingTime % oneDay)/oneHr);
      let minutesLeft = Math.floor((remainingTime % oneHr)/oneMin);
      let secondsLeft = Math.floor((remainingTime % oneMin)/1000);
  
      if(endTime < todayTime){
        clearInterval(i);
      } 
      else{
        if (daysLeft < 10) { daysLeft = "0" + daysLeft; }
     
        if (hoursLeft < 10) { hoursLeft = "0" + hoursLeft; }
  
        if (minutesLeft < 10) { minutesLeft = "0" + minutesLeft; }
  
        if (secondsLeft < 10) { secondsLeft = "0" + secondsLeft; }
          // console.log(daysLeft,hoursLeft,minutesLeft,secondsLeft);
  
          document.getElementById('days').innerHTML = daysLeft   
              document.getElementById('hours').innerHTML = hoursLeft 
              document.getElementById('minutes').innerHTML = minutesLeft 
              document.getElementById('seconds').innerHTML = secondsLeft 
  
      }
  
    }
  
    let i = setInterval(countdown, 1000);
    window.onload = function () {countdown();};



return(

  <div className='container'>
  
  <div className='blur'> 
    <div className='content'>
      <div className='h1'>WILSON</div>
      <div className='h2'>WEDDING</div>
      <div className='text'>Website is under construction</div>
      <div className='h3'>Coming Soon</div>
      <div className='text'>We are currently building this site and will be up and running 31 July 2023! Until then, you can get in touch by clicking the button below.</div>
       
      <div className='buttonWrapper'>
            <a className='button__mail' href='mailto:danica.bez@live.com' target='_blank'>GET IN TOUCH</a>
      </div>
      <div className='countdown'>
        <div className='box'>
            <p id='days'>00</p>
            <span>Days</span>
        </div>
        <div className='box'>
            <p id='hours'>00</p>
            <span>Hours</span>
        </div>
        <div className='box'>
            <p id='minutes'>00</p>
            <span>Minutes</span>
        </div>
        <div className='box'>
            <p id='seconds'>00</p>
            <span>Seconds</span>
        </div>
      </div>
    </div>
  </div>
</div>

)
}

export default ComingSoon3;