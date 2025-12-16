import { useState } from 'react'
import './App.css'
import IfYes from './ifYes'
import PassWord from './pass'
import cute1 from './assets/img/cute1.JPG'
import cute2 from './assets/img/cute2.PNG'


function App() {
  const [count, setCount] = useState('Would you maybe… possibly… want to go out with me?')

  //password
  const [password, setPassword] = useState(0)
  if (password == 0) {
    return <PassWord password={password} setPassword={setPassword} />
  }

  //answer question
  function ifNo() {
    setCount('Thank you :( ...')
    const btn = document.querySelector('.btn')
    btn.style.display = 'none'
    const imgCute = document.querySelector('.cute img')
    imgCute.src= `${cute2}`
  }

  function ifYes() {
    setCount(1)
  }
  //render next
  if(count == 1) {
    return <IfYes />
  }
  return (
    <>
      
      <section className='question'>
        <h1>{count}</h1>
        <div className="btn">
          <button onClick={ifYes}>Yes</button>
          <button className='no' onClick={ifNo}>I no no wanna...($__$)</button>
          <section className='feel'></section>
        </div>
      </section>
      <div className='cute'>
        <img src={cute1} alt=""></img>
      </div>
    </>
  )
}

export default App
