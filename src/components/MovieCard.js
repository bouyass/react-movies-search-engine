import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
        <div className="card">
            <img src={props.picture}  alt={props.title} />
            <h2>{props.title.length < 22 ? props.subTitle : props.subTitle+'...'}</h2>
            <div className="text">
                <p id="available"><b>Disponible sur {props.available}</b> </p>
            </div>
            <button id="voir" onClick={() => {document.location.href = props.url}} > Voir le Film</button>
            
        </div>
    )
}

export default MovieCard
