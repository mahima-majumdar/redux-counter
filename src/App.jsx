import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/reducers/counterSlice'

const App = () => {
  const dispatch = useDispatch()
const incrementhandler = () =>{
  dispatch(increment(value+1))
}
const decrementhandler = () =>{
  dispatch(decrement(value-1))
}

  let { value } = useSelector((state) => state.counter)
  return (
    <div className=' p-10 text-white bg-slate-500 text-2xl'>
      <h1 className='text-5xl '>{value}</h1>
      <div className='text-lg mt-10 flex gap-4'>
        <button className='bg-green-500 px-5 py-1 rounded ' onClick={incrementhandler}>Increment by 1</button>
        <button className='bg-red-500 px-5 py-1 rounded ' onClick={decrementhandler}>Decrement by 1</button>

      </div>
    </div>
  )
}

export default App