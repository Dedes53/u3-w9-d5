import { Component } from 'react';
import SingleMovie from './SingleMovie';

const keyAPI = 'd9d859c4';

// state iniziale
const initialState = {
    movies: [],
    loading: true,
    error: null,
    currentIndex: 0,
    itemsPerPage: 6
}

class MovieCarousel extends Component {

    state = initialState

    componentDidMount() {
        this.fetchMovies();
        this.updateItemsPerPage();
        window.addEventListener('resize', this.updateItemsPerPage);
    }

    // metodo per calcolare quanti film mostrare in base alla larghezza schermo
    updateItemsPerPage = () => {
        const width = window.innerWidth;
        let itemsPerPage;

        if (width >= 992) {
            // lg e xl: 6 film
            itemsPerPage = 6;
        } else if (width >= 768) {
            // md: 4 film
            itemsPerPage = 4;
        } else {
            // sm e xs: 2 film
            itemsPerPage = 2;
        }

        this.setState({ itemsPerPage, currentIndex: 0 });
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

    // scorrimento a sinistra
    previous = () => {
        this.setState((prevState) => ({
            currentIndex: Math.max(0, prevState.currentIndex - prevState.itemsPerPage)
        }));
    }

    // scorrimento a destra
    next = () => {
        const { movies, currentIndex, itemsPerPage } = this.state;
        this.setState({
            currentIndex: Math.min(movies.length - itemsPerPage, currentIndex + itemsPerPage)
        });
    }

    // metodo per gestire il click sul film 
    selectMovie = (movie) => {
        console.log('Film cliccato:', movie);
        // buttare qui qualcosa se ho tempo 
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

        const { movies, currentIndex, itemsPerPage } = this.state;
        const visibleMovies = movies.slice(currentIndex, currentIndex + itemsPerPage);
        const canGoPrev = currentIndex > 0;
        const canGoNext = currentIndex + itemsPerPage < movies.length;

        // pagina caricata 
        return (
            <div className="my-5 position-relative">
                <h4 className="mb-3 text-white">{this.props.title}</h4>

                <div className="position-relative">
                    {/* bottone sinistro */}
                    {canGoPrev && (
                        <button
                            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y carousel-control-btn"
                            onClick={this.previous}
                            style={{ zIndex: 10, opacity: 0.8 }}
                        >
                            <i className="bi bi-chevron-left fs-2"></i>
                        </button>
                    )}

                    {/* container dei film */}
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g- px-5 mx-5">
                        {visibleMovies.map((movie) => (
                            <SingleMovie
                                key={movie.imdbID}
                                movie={movie}
                                onMovieClick={this.selectMovie}
                            />
                        ))}
                    </div>

                    {/* bottone destro*/}
                    {canGoNext && (
                        <button
                            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y carousel-control-btn"
                            onClick={this.next}
                            style={{ zIndex: 10, opacity: 0.8 }}
                        >
                            <i className="bi bi-chevron-right fs-2"></i>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default MovieCarousel;