import React, { Component } from 'react';


const keyAPI = 'd9d859c4';

// state iniziale
const initialState = {
    movies: [],
    loading: true,
    error: null
}

class MovieCarousel extends Component {

    state = initialState

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = () => {
        const fetchURL = `http://www.omdbapi.com/?apikey=${keyAPI}&s=${this.props.searchQuery}`;

        this.setState({ loading: true }); // setto lo sate a loagind per il caricamento in caso di connessione lenta

        fetch(fetchURL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Errore nella risposta del server');
                }
            })
            .then((data) => {
                if (data.Response === "True") {
                    this.setState({
                        movies: data.Search,
                        loading: false,
                        error: null
                    });
                } else {
                    this.setState({
                        movies: [],
                        loading: false,
                        error: data.Error || "Nessun film trovato"
                    });
                }
            })
            .catch((err) => {
                console.error('Errore durante il fetch:', err);
                this.setState({
                    movies: [],
                    loading: false,
                    error: "Errore nel caricamento dei film"
                });
            });
    }

    render() {

        //durante il loading
        if (this.state.loading) {
            return (
                <div className="my-4">
                    <h4>{this.props.title}</h4>
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                        <div className="spinner-border text-light" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            );
        }

        // in caso di errore
        if (this.state.error) {
            return (
                <div className="my-4">
                    <h4>{this.props.title}</h4>
                    <div className="alert alert-danger">{this.state.error}</div>
                </div>
            );
        }

        // pagina caricata 
        return (
            <div className="my-4">
                <h4 className="mb-3">{this.props.title}</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-3">
                    {this.state.movies.map((movie) => (
                        <div key={movie.imdbID} className="col">
                            <img
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                                alt={movie.Title}
                                className="img-fluid rounded"
                                style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                                onClick={() => this.selectMovie(movie)}
                            />
                            <p className="text-light mt-2 small">{movie.Title}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // metodo per gestire il click sul film 
    selectMovie = (movie) => {
        console.log('Film cliccato:', movie);
        // buttare qui qualcosa se ho tempo 
    }
}

export default MovieCarousel;