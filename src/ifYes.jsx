import Finish from './finish.jsx';
import { useState } from 'react'

function IfYes() {
    const [state, setstate] = useState('Are you free on ...');

    function yes() {
        setstate(1)
    }
    function no() {
        setstate('Oh, its okay.')
        const p = document.querySelector('.question p')
        const btn = document.querySelector('.btn')
        const imgCute = document.querySelector('.cute')
        const crImg = document.createElement('img')
        const h1 = document.querySelector('h1')

        
        crImg.src = '/src/assets/img/cute4.PNG'

        h1.insertAdjacentElement('afterend', crImg)
        p.style.display = 'none'
        btn.style.display = 'none'
        imgCute.style.display = 'none'
    }

    if(state == 1) {
        return <Finish />
    }
    return (
        <>
            <section className='question'>
                <h1>{state}</h1>
                <p>Which day: 25/12/2025</p>
                <div className="btn">
                    <button onClick={yes}>Yes</button>
                    <button onClick={no}>No</button>
                </div>
            </section>
            <div className='cute'>
                <img src="/src/assets/img/cute3.JPG" alt=""></img>
            </div>
        </>
    )
}

export default IfYes