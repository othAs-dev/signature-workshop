import React from 'react'
import { useCountdown } from '../../hooks/useCountDown'

export default function ClassCountdown({date}) {
  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <div>
      {days} {hours} {minutes} {seconds}
    </div>
  )
}
