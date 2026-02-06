function ProfileSection() {
    return (
        <div className="pb-4 mb-4">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5 className="text-uppercase text-secondary">My Profile</h5>
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <div className="d-flex align-items-center gap-3">
                            <img
                                src="/Netflix-assets/assets/avatar.png"
                                alt="Strive Student"
                                style={{ width: '60px', height: '60px' }}
                                className="rounded"
                            />
                            <span className="fw-bold">Strive Student</span>
                        </div>
                        <div className="d-flex flex-column align-items-end gap-1">
                            <a href="#" className="text-primary text-decoration-none">Manage profiles</a>
                            <a href="#" className="text-primary text-decoration-none">Add profile email</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <a href="#" className="text-primary text-decoration-none">Language</a>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <a href="#" className="text-primary text-decoration-none">Viewing activity</a>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <a href="#" className="text-primary text-decoration-none">Playback settings</a>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <a href="#" className="text-primary text-decoration-none">Ratings</a>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <a href="#" className="text-primary text-decoration-none">Subtitle appearance</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;