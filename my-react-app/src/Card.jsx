import ReactPic from './assets/react.svg'

function Card(){

        return(
            <div className="card">
                <img className="CardImage" src={ReactPic} alt="picture not found"></img>
                <h2 className="CardTitle"> Chen</h2>
                <p className="CardText">I am a programmer and run</p>
            </div>
        );
}

export default Card