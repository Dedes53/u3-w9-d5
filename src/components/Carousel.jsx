function Carousel(props) {
    return (
        <>
            <h4>{props.title}</h4>
            <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
            >
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src="assets/1.png" alt="movie picture" />
                </div>
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src="assets/2.png" alt="movie picture" />
                </div>
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src="assets/3.png" alt="movie picture" />
                </div>
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src="assets/4.png" alt="movie picture" />
                </div>
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src="assets/5.png" alt="movie picture" />
                </div>
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src="assets/6.png" alt="movie picture" />
                </div>
            </div>
        </>
    )
}

export default Carousel;