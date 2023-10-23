import React from 'react'
import inception from '../assets/affiche.jpg';
import ligne from '../assets/ligne rouge.webp';
import hostel from '../assets/hostel.jpg';
import { Link } from 'react-router-dom';
import Info from './Info';
import './style.css';


export default function Accueil() {
    sessionStorage.setItem('film', 0);
  return (
    <div className='presentation'>
        <h1>Notre séléction</h1>
        <br />
        
        <div>
            <Link to="/Info" className='gallerie'>
                <img src={inception} alt="" onClick={()=>{sessionStorage.setItem('film', 0);}} />
                <img src={ligne} alt="" onClick={()=>{sessionStorage.setItem('film', 1);}}/>
            </Link>
        </div>
        
        
      </div>
  )
}
