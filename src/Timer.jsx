import { useEffect } from "react";
import { useState } from "react";


export default function Timer(props) {

  const startTime = props.startTime;

  const [time, setTime] = useState(startTime); // 'time' börjar på 600 sekunder (10 minuter)
  const [paused, setPaused] = useState(false);

  function pauseTimer() {
    setPaused(true);
    console.log("hej");
    console.log(paused);
  }

  function resumeTimer() {
    setPaused(false);
    console.log("hej");
    console.log(paused);
  }

  useEffect( () => {
   // We store the interval ID returned by setInterval in a variable called interval.
    const intervalId = setInterval( () => {
      // detta funkar inte... någon regel blabla med att uppdatera...
      // const newTime = time - 1;
      // setTime(newTime); 
      console.log(paused);

      if (paused === false) {
        setTime((t) => {
          if (t > 0){
            return t - 1; // t = t - 1
          } else {
            clearInterval(intervalId); // STOPPAR INTERVALLET HELT!
            return 0; // t = 0
          }
        }); // previous state value is t (right side) and we store it anew but minus one
      } else {
        clearInterval(intervalId);
      }

    }, 1000)

    return () => clearInterval(intervalId); // sets up a cleanup function to clear the interval when the component is unmounted, ensuring that resources associated with the interval are properly cleaned up....
    // måste göra detta eftersom React.StrictMode anropar funktioner två gånger för att felsöka... vilket skapar problem för tid... (nu anropar vi en gång bara)
  }, [paused])  // gör om useEffect när 'paused' ändras... dvs när vi klickar på pause knappen

  // gör om sekunder till minuter och sekunder:
  const minutes = Math.floor(time / 60); // Math.floor hugger bort decimaler!

  const seconds = time - (minutes * 60)
  /* const seconds = time % 60; // Calculate seconds using modulo operator
 */

  return <div className="timer-container">
    <h2>Timer (start time: {startTime} seconds)</h2>
    <div className="timer">
     {minutes}:{seconds}
    </div>
    {/* <div>
      {time}
    </div> */}
    <div className="button-container">
      <button className="timerButton" onClick={pauseTimer}>pause</button>
      <button className="timerButton" onClick={resumeTimer}>resume</button>
    </div>
    
  </div>

}

