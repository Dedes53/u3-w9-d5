function PlanSection() {
    return (
        <div className="border-bottom pb-4 mb-4">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5 className="text-uppercase text-secondary">Plan Details</h5>
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                            <span className="fw-bold">Premium</span>
                            <span className="badge bg-dark border">ULTRA HD</span>
                        </div>
                        <a href="#" className="text-primary text-decoration-none">Change plan</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanSection;