import React from 'react'
import film from './data';
import './style.css'

function AfficheActeur(props) {
    const liste = props.acteurs;
    return (
      <ul className='liste-acteur'>
        {liste.map((acteur) => (
          <div className="card">{acteur}</div>
        ))}
      </ul>
    );
}

function Info() {
    // const synopsis = "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant."
    // const listeActeur = ["Ken Watanabe","Joseph Gordon-Levitt","Marion Cotillard","Ellen Page",
    // "Tom Hardy","Cilian Murphy","Tom Berenger","Michel Caine"];
    
    const indice = sessionStorage.getItem('film');
    return (
        <div className='center' >
            <div>
                <h1>{film[indice]["titre"]}</h1>
                <div className='bloc'>
                <img src={film[indice]["img"]} alt="" />
                <p> 
                    <h2>Synopsis</h2>
                    {film[indice]["synopsis"]}
                    <h2>Acteurs</h2>
                    <AfficheActeur acteurs={film[indice]["acteurs"]}/>
                </p>
                </div>
            </div>  
        </div>
    )
}

export default Info;