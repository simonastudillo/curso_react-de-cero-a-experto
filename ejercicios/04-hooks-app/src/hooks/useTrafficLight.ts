import { useEffect, useState } from "react";

const colors = {
   red: 'bg-red-500 animate-pulse',
   yellow: 'bg-yellow-500 animate-pulse',
   green: 'bg-green-500 animate-pulse',
   gray: 'bg-gray-500'
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

   const [light, setLight] = useState<TrafficLightColor>('red');
   const [countdown, setCountdown] = useState<number>(5);

   useEffect(() => {
      if (countdown === 0) return;

      const intervalId = setInterval(() => {
         setCountdown(prev => prev - 1);
      }, 1e3);

      return () => {
         clearInterval(intervalId);
      }
   }, [countdown]);

   useEffect(() => {
      if (countdown > 0) return;

      setCountdown(5);

      if (light === 'red') {
         setLight('green');
         return;
      }
      if (light === 'yellow') {
         setLight('red');
         return;
      }
      if (light === 'green') {
         setLight('yellow');
         return;
      }
   }, [countdown, light]);


   return {
      // Props
      countdown,
      // Computed
      percetage: (countdown / 5) * 100,
      redLightClass: (light === 'red') ? colors.red : colors.gray,
      yelllowLightClass: (light === 'yellow') ? colors.yellow : colors.gray,
      greenLightClass: (light === 'green') ? colors.green : colors.gray,
      // Methods
   }

};