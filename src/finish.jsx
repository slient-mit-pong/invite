import hoa from './assets/img/hoa.png'

function Finish() {
    return(
        <>
            <section className="question">
                <h1>Thank you for accepting the invitation.</h1>
            </section>
            <div className="decor">
                <img src={hoa} alt=""></img>
            </div>
        </>
    )
}

export default Finish