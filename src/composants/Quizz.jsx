import React, { useEffect } from 'react'
import film from './data';
import './style.css'
import { useState } from 'react';

function Difficulte(props){
    const diff = props.value;
    let couleur = "";
    let classn = "";

    if (diff=="Facile"){
        couleur = "Vert";
    }

    else if (diff=="Intermédiaire"){
        couleur = "Orange";
    }

    else {
        couleur = "Rouge";
    }
    
    classn = `{}`
    return (
        <div className={`${couleur} difficulte`} >
            {diff}
        </div>
    )
}

function valider(e){
    e.preventDefault();
}

function FormBlog(){
    const [input_rep,setRep] = useState('');

    return (
        <form className='form'>
            <input type="text" name="rep" onChange={(e)=>setRep(e.target.value)} placeholder='Votre réponse'/>
            { (input_rep=="oui") ? 
                <div>Bonne réponse</div>
            :
                <div></div>
            }
        </form>
    )
}

function Question({ question,reponse,difficulte }) {
    const [afficherReponse, setReponse] = useState(false);
    const [input_rep,setRep] = useState('');
    const [enter,setEnter] = useState(false);

    
  
    const Afficher = () => {
      setReponse(afficherReponse ? false : true);
    };
    
    
    useEffect(()=>{
        function handleKeyPress(event) {
            if (event.key === 'y') {
                setEnter(true);
                alert();
                event.preventDefault();
            }
            else {
                setEnter(false)
                event.preventDefault();
            }
            return
          };
    },[input_rep]);

    return (
      <div>
        <p>{question} <Difficulte value={difficulte}></Difficulte></p>
        <form className='form'>
            <input autocomplete="off" type="text" name="rep" onChange={(e)=>setRep(e.target.value)}
                onKeyPress={(e)=>{ if (e.key === "Enter"){
                    e.preventDefault();
                    setEnter(true);
                }
                else {
                    setEnter(false);
                }
            }} placeholder='Votre réponse'/>
            { (input_rep==reponse && enter===true) ? 
                <div className='rep Vert'>Bonne réponse</div>
            :
                <div className='rep'></div>
            }
            { (input_rep!=reponse && enter===true) ? 
                <div className='rep Rouge'>Mauvaise réponse</div>
            :
                <div className='rep'></div>
            }
        </form>
        <button onClick={Afficher}>
            {afficherReponse ? 'Masquer la Réponse' : 'Afficher la Réponse'}
        </button>
        {afficherReponse ? <p><div className='Bleu'>Réponse : </div> {reponse}</p> : <p></p>}
      </div>
    );
  }

export default function Quizz() {
    const quizz = [{question:'Qui est le réalisateur du film "Inception" ?',rep:'Christopher Nolan',difficulte:"Facile"},
        {question:"Quel acteur principal interprète le personnage de Dom Cobb, le voleur d'informations ?",rep:"Leonardo DiCaprio",difficulte:"Facile"},
        {question:"Qui est l'acteur qui incarne le personnage de Mal, la femme décédée de Dom Cobb, qui apparaît fréquemment dans ses rêves ?",rep:"Marion Cotillard",difficulte:"Facile"},
        {question:"Quelle est l'idée principale du film  ? (Indice : c'est lié aux rêves)",rep:"pénétrer les rêves",difficulte:"Intermédiaire"},
        {question:"Quel est le nom du projet d'extraction d'informations dans les rêves que Dom Cobb et son équipe tentent de réaliser ?",rep:"Inception",difficulte:"Intermédiaire"},
        {question:"Quel est l'objet totem que Dom Cobb utilise pour distinguer entre le rêve et la réalité ?",rep:"Toupie",difficulte:"Intermédiaire"},
        {question:"Comment Dom Cobb entre-t-il dans le subconscient de ses cibles pour voler des informations ?",rep:"Passeur",difficulte:"Difficle"}
    ]

    const indice = sessionStorage.getItem('film');

    return (
        <div className='center'>
            <div className="quizz">
                <h1>Quelques questions sur {film[indice]["titre"]}</h1>
                {   
                    <div className='questions'>
                        {film[indice]["quizz"].map((ligne,index)=>(
                            <Question key={index} question={ligne.question} reponse={ligne.rep} difficulte={ligne.difficulte} ></Question>
                        ))}
                        
                    </div>
                }
            </div>
        </div>
  )
}

