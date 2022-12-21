import React, { useState } from 'react'

interface CounterProps {
  value?: number
}

const Counter = ({ value = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <div onClick={onMinus}>Subtract</div>
      <div>Current Counter Value is {counter}</div>
      <div onClick={onPlus}>Add</div>
    </div>
  )
}

export default Counter
