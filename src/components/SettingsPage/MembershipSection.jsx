function MembershipSection() {
    return (
        <div className="border-bottom pb-4 mb-4">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5 className="text-uppercase text-secondary mb-3">Membership & Billing</h5>
                    <button className="btn btn-secondary btn-sm">Cancel Membership</button>
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <p className="mb-1 fw-bold">student@strive.school</p>
                                <p className="mb-1 text-secondary">Password: ********</p>
                                <p className="mb-0 text-secondary">Phone: 321 044 1279</p>
                            </div>
                            <div className="d-flex flex-column align-items-end gap-1">
                                <a href="#" className="text-primary text-decoration-none">Change account email</a>
                                <a href="#" className="text-primary text-decoration-none">Change password</a>
                                <a href="#" className="text-primary text-decoration-none">Change phone number</a>
                            </div>
                        </div>

                        <hr className="my-2" />

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-paypal text-primary fs-4"></i>
                                <span>admin@strive.school</span>
                            </div>
                            <div className="d-flex flex-column align-items-end gap-1">
                                <a href="#" className="text-primary text-decoration-none">Update payment info</a>
                                <a href="#" className="text-primary text-decoration-none">Billing details</a>
                            </div>
                        </div>

                        <hr className="my-2" />

                        <div className="d-flex flex-column align-items-end gap-1">
                            <a href="#" className="text-primary text-decoration-none">Redeem gift card or promo code</a>
                            <a href="#" className="text-primary text-decoration-none">Where to buy gift cards</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MembershipSection;