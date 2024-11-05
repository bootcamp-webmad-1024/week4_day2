const MovieCard = ({ _id, director, IMDBRating, title, deleteMovie, hasOscars }) => {

    let scoreLabel

    if (IMDBRating > 9) {
        scoreLabel = <span className="green">9+</span>;
    } else if (IMDBRating < 7) {
        scoreLabel = <span className="red">{IMDBRating}</span>;
    } else {
        scoreLabel = <span className="black">{IMDBRating}</span>;
    }


    return (
        <div className="MovieCard">
            <h3>{title} {scoreLabel}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating} {IMDBRating > 7 ? '😄' : '💩'}</p>
            {
                hasOscars ? <p>¡Ganó oscars!</p> : <p>No se llevó nada</p>
            }
            <button onClick={() => deleteMovie(_id)}>Eliminar</button>
        </div>
    )
}

export default MovieCard