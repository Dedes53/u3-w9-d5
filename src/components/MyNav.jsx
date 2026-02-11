import { Link, useLocation } from "react-router-dom";
function MyNav() {

    return (
        <nav
            className="navbar navbar-expand-lg bg-dark"
            data-bs-theme="dark"
            style={{ backgroundColor: "#221f1f" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#"
                ><img src="/logo.png" style={{ width: "100px", height: "55px" }}
                    /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={"nav-link" + (useLocation().pathname === "/" ? " active fw-bold" : "")}>
                                Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/tv-shows"
                                className={"nav-link" + (useLocation().pathname === "/tv-shows" ? " active fw-bold" : "")}
                            >TV Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/movies"
                                className={"nav-link" + (useLocation().pathname === "/movies" ? " active fw-bold" : "")}
                            >Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/recently-added"
                                className={"nav-link" + (useLocation().pathname === "/recently-added" ? " active fw-bold" : "")}
                            >Recently Added</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/my-list"
                                className={"nav-link" + (useLocation().pathname === "/my-list" ? " active fw-bold" : "")}
                            >My List</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-search icons"></i>
                        <div id="kids" className="fw-bold">KIDS</div>
                        <i className="bi bi-bell icons"></i>
                        <i className="bi bi-person-circle icons"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MyNav;   