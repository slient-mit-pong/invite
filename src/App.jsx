import { useState } from 'react'
import './App.css'
import IfYes from './ifYes'
import cute1 from './assets/img/cute1.JPG'
import cute2 from './assets/img/cute2.PNG'
function App() {
  const [count, setCount] = useState('Would you maybe… possibly… want to go out with me?')

  

  function ifYes() {
    setCount(1)
  }

  function ifNo() {
    setCount('Thank you :( ...')
    const btn = document.querySelector('.btn')
    btn.style.display = 'none'
    const imgCute = document.querySelector('.cute img')
    imgCute.src= `${cute2}`
  }

  if(count == 1) {
    return <IfYes />
  }
  return (
    <>
      <section className='question'>
        <h1>{count}</h1>
        <div className="btn">
          <button onClick={ifYes}>Yes</button>
          <button onClick={ifNo}>I no no wanna...($__$)</button>
        </div>
      </section>
      <div className='cute'>
        <img src={cute1} alt=""></img>
      </div>
    </>
  )
}

export default App
