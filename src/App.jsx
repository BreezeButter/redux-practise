
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { inc, dec, res, incWithNum } from './countSlice'
import { login, logout, userLogin } from './authSlice'
import { useState, useEffect } from 'react'








function App() {
  // const [count, setCount] = useState(0)
  // const inc = () => setCount(p => p + 1)
  // const dec = () => setCount(p => p - 1)
  // const re = () => setCount(0)

  const counter = useSelector((state) => state.counter)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [ns, setS] = useState(false)

  const toggle = () => {
    setS(!ns)
  }


  const Modal = () => {

    useEffect(() => {
      if (ns) {
        const timeout = setTimeout(() => {
          setS(false);
        }, 2000); // Close modal after 3 seconds (adjust the timeout duration as needed)
  
        return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
      }
    }, [ns]);



    return (
    <div>
      {ns? (<img src="https://media.tenor.com/RGDFz-rHPYAAAAAi/heart-th%E1%BA%A3.gif" alt="" className='absolute w-12 top-32 left-72'/>):(<div></div>)}

    </div>
    )
  }


  const sty = 'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-slate-100 mr-4 mb-4  p-2 text-lm w-[100px] m-auto rounded-lg shadow-2xl mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'

  return (
    <div >
      <img src="https://media.tenor.com/8HaTOA3o0OoAAAAi/pixel-cat.gif" alt="cat" className='m-auto absolute' onClick={toggle} />
      <Modal />
      <main className='bg-white text-slate-400  text-4xl w-[400px] p-10  rounded-lg shadow-2xl m-auto'>
        <h1 className=' mb-8 text-6xl w-[100px] m-auto  '>{counter.count}</h1>
        <button className=' text-slate-100 mr-4 mb-4  p-2 text-lm w-[100px] m-auto rounded-lg shadow-2xl  bg-green-500' onClick={() => dispatch(inc())}>+</button>
        <button className=' text-slate-100 mr-4 mb-4 p-2 text-lm w-[100px] m-auto rounded-lg shadow-2xl  bg-red-500' onClick={() => dispatch(dec())}>-</button>
        <button className=' text-slate-100 mb-4 p-2 text-sm w-[100px] m-auto rounded-lg shadow-2xl bg-slate-700' onClick={() => dispatch(res())}>Reset</button>
        <div>
          <button className={sty} onClick={() => dispatch(incWithNum({ value: 5, error: "not-err" }))}> +5</button>
        </div>
      </main>

      {/* <img src="src/assets/logo.png" alt="logo-redux" className='realtive '/> */}
      <div className='bg-white text-slate-400  w-[400px] p-10  rounded-lg shadow-2xl m-auto mt-9'>
        <div className=' text-4xl mb-8'>{auth.user ? (
          <h1>{auth.user.fname}</h1>
        ) : (
          <h1>Guest</h1>)}
        </div>
        <button className=' text-slate-100 mr-4 mb-4  p-2 text-sm w-[100px] m-auto rounded-lg shadow-2xl bg-slate-700' onClick={() => dispatch(userLogin())}>Login</button>
        <button className=' text-slate-700 mr-4 mb-4 p-2 text-sm w-[100px] m-auto rounded-lg shadow-2xl border-solid border-2 border-slate-700' onClick={() => dispatch(logout())}>logout</button>

      </div>
    </div>
  )
}

export default App
