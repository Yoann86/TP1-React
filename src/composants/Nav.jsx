import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className='nav'>
      <h2>Allociné</h2>
      <div className='sousnav'>
        <Link className="Rouge" to='/'>Acceuil</Link>
        <Link className='White' to='/info'>Informations</Link>
        <Link className='White' to='/critiques'>Critiques</Link>
        <Link className='White' to='/quizz'>Quizz</Link> 
      </div>
    </ul>
  )
}
