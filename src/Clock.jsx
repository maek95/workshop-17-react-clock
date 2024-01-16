import { useEffect } from "react";
import { useState } from "react";

export default function Clock(props) {

  const selectedCity = props.selectedCity;
  const selectedTimeZone = props.selectedTimeZone;
/*   console.log(selectedTimeZone); */

  /* const t = new Date().toLocaleTimeString(); */

  const [time, setTime] = useState('');

  useEffect( () => {

    setInterval( () => {
     /*  time = new Date(); */
      let t = new Date();

      setTime(t.toLocaleTimeString('en-GB',{timeZone:`${selectedTimeZone}`}));

      //setTime(t.toLocaleTimeString('en-GB',{timeZone:`Europe/London`}));

    }, 1000)

  }, []) // [] är en tom array, används för att köra useEffect en gång... setInterval körs varje 1000 millisekunder!

  return <div className="clock-container">
   
    {/* {time.toLocaleTimeString(<link>"en-GB"</link>, {timeZone: <link>"Europe/London"</link>})}; */}
    <h2>{selectedCity}</h2>
    <div className="clock">
      {time}
      
    </div>
    {/* {time.toString()} */}
  </div>;
}