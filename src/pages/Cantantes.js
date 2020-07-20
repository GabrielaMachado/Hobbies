import React from 'react'
import '../components/styles/Card.css'
import elvisImg from '../images/elvis.jpg'
import arethaImg from '../images/aretha.jpg'
import rayImg from '../images/ray.jpg'

class Cantante extends React.Component {
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
                            <img src={arethaImg} className="Img-Card-Info"/>
                        </div>
                        <div className="col-8 Card-Info">
                            <h1>Aretha Louise Franklin</h1>
                            <p>(Memphis, 25 de marzo de 1942-Detroit, 16 de agosto de 2018). 
                                Fue una cantante estadounidense de soul, R&B y góspel. Apodada «Lady Soul» 
                                (la Dama del Soul) o «Queen of soul» (la Reina del Soul), fue una de las máximas 
                                exponentes de aquel género, y una de las más grandes transmisoras de góspel de todos 
                                los tiempos, así como una de las artistas más influyentes en la música contemporánea.</p>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row center">
                        <div className="col-4">
                            <img src={rayImg} className="Img-Card-Info"/>
                        </div>
                        <div className="col-8 Card-Info">
                            <h1>Ray Charles Robinson</h1>
                            <p>(Albany, Georgia; 23 de septiembre de 1930-Beverly Hills, California; 10 de junio de 2004), 
                                más conocido como Ray Charles, fue un cantante, saxofonista1 y pianista estadounidense de soul, 
                                R&B. Entre sus amigos y músicos el prefería que le llamaran "Hermano Ray" Era frecuentemente referido 
                                como "El Genio". Charles comenzó a perder la visión a la edad de 5 años y a los 7 años era ciego.
                                 Fue pionero de la música soul durante los años 1950s por la combinación del blues, rhythm and blues 
                                 y el estilo gospel dentro de la música que grabó para el sello Atlantic. Contribuyó a la integración de 
                                 la música country, rhythm and blues y música pop durante los años 1960s con su gran éxito en ABC Records, n
                                 otable con sus dos álbumes de Sonido Moderno. Mientras estuvo con ABC, Ray Charles fue uno de los primeros 
                                 músicos afroamericanos en tener control artístico en la compañía para la cual grababa.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row center">
                        <div className="col-4">
                            <img src={elvisImg} className="Img-Card-Info"/>
                        </div>
                        <div className="col-8 Card-Info">
                            <h1>Elvis Aaron Presley</h1>
                            <p>(Tupelo, Misisipi; 8 de enero de 1935-Memphis, Tennessee; 16 de agosto de 1977) fue uno de los cantantes estadounidenses 
                                más populares del siglo XX considerado como un ícono cultural y conocido ampliamente bajo su nombre de pila, 
                                Elvis. Se hace referencia a él frecuentemente como «El Rey del Rock and Roll» o simplemente «El Rey».</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

}

export default Cantante