import React from 'react'
import film from './data';
import './style.css'

function Rating(props) {
    const starRating = props.value;
    let rep = "";
     for (let i = 0; i < starRating; i++) {
        rep+="★";
    }
  return (
    <div>{rep}</div>
  )
}

function Commentaire(props){
    const users = props.value;
    return (
        <ul className='critique'>
            {users.map((user,index)=>(<li key={index} className='avis'>
                <div>{user.nom}</div><div>{user.commentaire}</div> 
                <Rating value={user.star}></Rating>
                </li> 
            ))} 
        </ul>
    )
}

export default function Critiques() {
    // const critique = [{nom:"Thomas",commentaire:"Leonardo DiCaprio livre l'une de ses meilleures performances en tant que Dom Cobb. C'est un film qui vous fait réfléchir et vous donne envie de le revoir.",star:4},
    //     {nom:"Michel",commentaire:"Non, juste non ",star:1},
    //     {nom:"Christian",commentaire:"J'ai beacoup aimé ce film même si je n'ai rien compris.",star:4},
    //     {nom:"Aliénor",commentaire:"Film bouleversant et impressionnant qui vous prend du début à la fin.Vu et revu tellement de fois que je qualifie ce film s'en mal de chef d'oeuvre.",star:5},
    //     {nom:"Annie",commentaire:"Inception est trop compliqué pour son propre bien. J'ai eu du mal à suivre l'intrigue, ce qui a rendu l'expérience décevante.",star:2},
    //     {nom:"John",commentaire:"Les dialogues philosophiques peuvent sembler prétentieux et alourdir l'histoire. J'aurais préféré un équilibre différent entre action et réflexion.",star:3}
    // ];
    const indice = sessionStorage.getItem('film');

    return (
        <div className='center'>
            <h1>{film[indice]["titre"]}</h1>
            <Commentaire value={film[indice]["critiques"]}></Commentaire>
        </div>
    )
}
