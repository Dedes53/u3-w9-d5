function SingleMovie({ movie, onMovieClick }) {
    return (
        <div className="col col-md-3 col-lg-2">
            <div className="position-relative movie-card">
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                    alt={movie.Title}
                    className="img-fluid rounded w-100 movie-poster"
                    onClick={() => onMovieClick(movie)}
                />
                {/* per hover del titolo */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end movie-overlay rounded">
                    <div className="p-2 w-100 bg-dark bg-opacity-75">
                        <p className="text-light mb-0 small fw-bold text-center">{movie.Title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleMovie;