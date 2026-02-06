function SetNav() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src="/logo.png"
                            alt="Netflix"
                            style={{ height: '40px' }}
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/tv-shows">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/movies">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/recently-added">Recently Added</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/my-list">My List</a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center gap-3">
                            <i className="bi bi-search text-white"></i>
                            <span className="text-white">KIDS</span>
                            <i className="bi bi-bell text-white"></i>
                            <img
                                src="/Netflix-assets/assets/avatar.png"
                                alt="Profile"
                                style={{ width: '32px', height: '32px' }}
                                className="rounded"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default SetNav;