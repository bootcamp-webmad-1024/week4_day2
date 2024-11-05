import { useState } from "react"
import { moviesData } from "../../data/fakeApi"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)

    const handleMovieRemoval = idToDelete => {
        const filteredMovies = movies.filter(eachMovie => eachMovie._id != idToDelete)
        setMovies(filteredMovies)
    }

    return (
        <div className="MoviesList">

            <h2>Listado de pelis</h2>

            {
                movies.map(eachMovie => {

                    return (
                        <MovieCard
                            key={eachMovie._id}
                            deleteMovie={handleMovieRemoval}
                            {...eachMovie}
                        />
                    )
                })
            }
        </div>
    )
}

export default MoviesList