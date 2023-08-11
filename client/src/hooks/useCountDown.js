import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let result = countDownDate - new Date().getTime()
      if (result <= 0) {
        clearInterval(interval)
        setIsOver(true);
        return
      }
      setCountDown(result);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return isOver ?
    getReturnValues(0) :
    getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
