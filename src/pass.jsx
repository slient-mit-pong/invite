import { useState,useEffect } from 'react'
import './pass.css'
function PassWord({password, setPassword}) {

    const [count, setCount] = useState('')

    useEffect(() => {
        if (count === 'LocVinh') {
            setTimeout(() => {
                setPassword(1)
            }, 1000);
        }
    }, [count, setPassword])
    return (
        <>
            <form>
                <label htmlFor="Idpassword">Trang Web này riêng cho</label>
                <input id="Idpassword" type="text" value={count} onChange={(e) => setCount(e.target.value)} />
            </form>
        </>
    )
}

export default PassWord
