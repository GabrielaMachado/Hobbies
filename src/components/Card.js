import React from 'react'
import cantarImg from '../images/cantar.png'
import pianoImg from '../images/piano.png'
import './styles/Card.css'
import { Link } from 'react-router-dom'

class Card extends React.Component {

    render(){
        return (
            <div>
                <div className="card mx-auto Style-Card"
                style={{ 
                    background: `linear-gradient(to right, #A74CF2, #617BFB)`
                }}
                >
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-4">
                                <img src={pianoImg} className="Img-Card"/>
                            </div>
                            <div className="col-8 Card-Info">
                                <h1>El piano</h1>
                                <p>Un resumen de su historia y algunos compositores que marcaron la historia de la música a través de este instrumento</p>
                                <Link to="/piano">
                                    <button className="Style-Button">ver más</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto Style-Card"
                style={{ 
                    background: `linear-gradient(to right, #A74CF2, #617BFB)`
                }}
                >
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-4">
                                <img src={cantarImg} className="Img-Card"/>
                            </div>
                            <div className="col-8 Card-Info">
                                <h1>Leyendas de la música</h1>
                                <p>Algunas de las personas que serán siempre recordadas en la historia de la música gracias a su voz</p>
                                <Link to="/cantantes">
                                    <button className="Style-Button">ver más</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card