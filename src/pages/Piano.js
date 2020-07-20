import React from 'react'
import '../components/styles/Card.css'
import historiaImg from '../images/historia.jpg'
class Piano extends React.Component {
    render(){
        return (
    <div>
        <div className="card mx-auto Style-Card-Info"
            style={{ 
                background: `#000000`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-4">
                            <img src={historiaImg} className="Img-Card-Info"/>
                        </div>
                        <div className="col-8 Card-Info">
                            <h1>El piano</h1>
                            <p>El piano es una invención del italiano Bartolomeo Cristofori de Padua, que en 1698, diseña un clavecín de martillos pequeños y en 1710, concluye el primer pianoforte de la historia.</p>
                            <p>Cristofori era cliente de los Medici, entre cuyos inventarios consta ya la existencia de un modelo de piano fabricado en torno a 1701. El piano es el resultado de la evolución del clavicémbalo o clavecín, un instrumento con teclas y cuerdas pulsadas: y el clavicordio, cuyas cuerdas con martilleadas, como en el piano, con la diferencia de que en aquel el sonido es muy tenue, y en cambio el piano permite sonidos muy fuertes.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

}

export default Piano