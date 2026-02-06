function Profile() {
    return (
        <>
            <div className="container-fluid bg-dark text-white p-5">
                <div className="row">
                    <div className="col">
                        <h1>Edit Profile</h1>
                    </div>
                </div>

                <hr className="text-secondary" />

                <div className="row m-2 mb-3">
                    <div className="col-4">
                        <img
                            className="img-fluid"
                            src="/avatar.png"
                            alt="profile avatar"
                        />
                    </div>
                    <div className="col-8">
                        <div>
                            <form className="d-flex flex-column justify-content-center align-items-start" action="">
                                <input
                                    type="text"
                                    placeholder="Profile Name"
                                    className="fs-2 border-0 bg-secondary p-1 px-2"
                                />

                                <div className="d-flex flex-column justify-content-center align-items-start mt-4">
                                    <label htmlFor="languages" className="form-label">Languages</label>
                                    <select className="form-select" id="languages" name="languages">
                                        <option>Select languages...</option>
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                        <option value="german">German</option>
                                        <option value="italian">Italian</option>
                                    </select>
                                </div>

                                <hr className="text-secondary" />

                                <div className="d-flex flex-column align-items-start gap-3">
                                    <p className="m-0">Maturity Settings:</p>
                                    <button className="border-0 px-3 p-2">ALL MATURITY SETTINGS</button>
                                    <p className="m-0">
                                        Show titles of <span className="fw-bold fs-6">all maturity ratings</span> for this profile
                                    </p>
                                    <button className="border border-secondary bg-dark text-secondary px-3">Edit</button>
                                </div>

                                <hr className="text-secondary" />

                                <div className="form-check">
                                    <input
                                        className="form-check-input rounded-0"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDisabled"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                                        Autoplay next episode in a series on all devices
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input rounded-0"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckCheckedDisabled"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                        Autoplay previews while browsing on all devices
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <hr className="text-secondary" />

                <div className="d-flex justify-content-start gap-3 mt-2 mb-5">
                    <button className="btn btn-light rounded-0 px-4 py-2 fs-4">SAVE</button>
                    <button className="btn btn-transparent border-secondary text-secondary rounded-0 px-4 py-2 fs-4">CANCEL</button>
                    <button className="btn btn-transparent border-secondary text-secondary rounded-0 px-4 py-2 fs-4">DELETE PROFILE</button>
                </div>
            </div>
        </>
    );
}

export default Profile;